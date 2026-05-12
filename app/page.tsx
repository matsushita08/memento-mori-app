"use client";

import { useEffect, useMemo, useState } from "react";
import { ChoiceList } from "@/components/ChoiceList";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PixelVisual } from "@/components/PixelVisual";
import { DraftInput, SceneInlineExtra, YourWords } from "@/components/SpecialScreens";
import { TypewriterText } from "@/components/TypewriterText";
import { scenes } from "@/data/scenes";
import { clearGameState, initialGameState, loadGameState, saveGameState } from "@/lib/storage";
import { getVitalState } from "@/lib/vitals";
import type { Choice, GameState } from "@/types/game";

export default function Home() {
  const [state, setState] = useState<GameState>(initialGameState);
  const [selectedResponse, setSelectedResponse] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [textComplete, setTextComplete] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("reset=1")) {
      clearGameState();
      window.history.replaceState(null, "", window.location.pathname);
      setState({ ...initialGameState, startedAt: new Date().toISOString() });
      setHydrated(true);
      return;
    }

    setState(loadGameState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveGameState(state);
  }, [hydrated, state]);

  const scene = scenes[Math.min(state.sceneIndex, scenes.length - 1)];
  const progress = useMemo(() => Math.round((state.sceneIndex / (scenes.length - 1)) * 100), [state.sceneIndex]);
  const vital = getVitalState(scene.id, scene.noiseLevel);

  useEffect(() => {
    setSelectedResponse("");
    setTextComplete(scene.body.length === 0 || scene.visualType === "your_words");
  }, [scene.id, scene.body.length, scene.visualType]);

  function restart() {
    clearGameState();
    setSelectedResponse("");
    setTextComplete(false);
    setState({ ...initialGameState, startedAt: new Date().toISOString() });
  }

  function goNext(extra?: Partial<GameState>) {
    setState((current) => ({
      ...current,
      ...extra,
      sceneIndex: Math.min(current.sceneIndex + 1, scenes.length - 1)
    }));
  }

  function handleChoice(choice: Choice) {
    if (choice.value === "restart") {
      restart();
      return;
    }

    const response = choice.response || "";
    const nextState = {
      choices: { ...state.choices, [scene.id]: choice.label },
      responses: response ? { ...state.responses, [scene.id]: response } : state.responses
    };

    if (response) {
      setSelectedResponse(response);
      setState((current) => ({ ...current, ...nextState }));
      window.setTimeout(() => {
        setSelectedResponse("");
        goNext(nextState);
      }, scene.delayMs || 1200);
      return;
    }

    setSelectedResponse("");
    goNext(nextState);
  }

  function handleDraftAction(action: string) {
    if (action === "消す") {
      setState((current) => ({ ...current, unsentDraft: "" }));
      return;
    }

    goNext({
      choices: { ...state.choices, [scene.id]: action },
      responses: { ...state.responses, [scene.id]: action }
    });
  }

  function handleDraftGate(choice: Choice) {
    setState((current) => ({
      ...current,
      choices: { ...current.choices, [scene.id]: choice.label }
    }));
  }

  return (
    <PhoneFrame noiseLevel={scene.noiseLevel} sceneId={scene.id}>
      <header className="flex items-center justify-between border-b-4 border-pixel bg-frost px-4 py-3 text-[10px]">
        <span>余白</span>
        <span>{vital.notificationText}</span>
      </header>

      <div className="h-1 bg-pixel/20">
        <div className="h-full bg-pixel transition-all duration-700" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <PixelVisual type={scene.visualType} noiseLevel={scene.noiseLevel} />

        <section className="mt-5 space-y-5">
          <div>
            <p className="mb-2 text-[10px] opacity-70">{vital.label}</p>
            <h1 className="text-2xl leading-tight">{scene.title}</h1>
          </div>

          {scene.visualType === "your_words" ? (
            <YourWords state={state} />
          ) : (
            <TypewriterText
              key={scene.id}
              lines={scene.body}
              speed={scene.delayMs ? 70 : 38}
              onComplete={() => setTextComplete(true)}
            />
          )}

          {textComplete && <SceneInlineExtra scene={scene} />}

          {selectedResponse && (
            <div className="border-4 border-pixel bg-frost p-3 text-sm leading-loose shadow-[4px_4px_0_#22312a]">
              {selectedResponse}
            </div>
          )}

          {textComplete && scene.visualType === "draft" ? (
            state.choices.UNSENT_DRAFT ? (
              <DraftInput
                state={state}
                onDraftChange={(value) => setState((current) => ({ ...current, unsentDraft: value }))}
                onDraftAction={handleDraftAction}
              />
            ) : (
              <>
                {scene.choices && <ChoiceList choices={scene.choices} onChoice={handleDraftGate} />}
              </>
            )
          ) : textComplete ? (
            <>
              {scene.question && <p className="question-text">{scene.question}</p>}
              {scene.choices && !selectedResponse && <ChoiceList choices={scene.choices} onChoice={handleChoice} />}
            </>
          ) : null}
        </section>
      </div>
    </PhoneFrame>
  );
}
