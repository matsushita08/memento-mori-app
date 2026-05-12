"use client";

import { useState } from "react";
import { formatClock } from "@/lib/time";
import type { GameState, Scene } from "@/types/game";

export function NameGate({
  initialName,
  onStart,
  onReset
}: {
  initialName: string;
  onStart: (name: string) => void;
  onReset: () => void;
}) {
  const [name, setName] = useState(initialName);

  function submit() {
    const trimmed = name.trim();
    if (!trimmed) return;
    onStart(trimmed);
  }

  return (
    <div className="title-gate min-h-full bg-ink px-5 py-8 text-mint">
      <div className="mx-auto flex min-h-[620px] max-w-sm flex-col justify-between">
        <div className="space-y-8">
          <div>
            <p className="mb-4 text-[10px] opacity-60">ロックされた記憶</p>
            <h1 className="text-5xl leading-none text-frost">余白</h1>
          </div>

          <div className="space-y-4 text-sm leading-loose text-frost/85">
            <p>途中で止まった通知がある。</p>
            <p>開きかけの画面が、まだ暗いまま残っている。</p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-[10px] text-mint/70" htmlFor="player-name">
            下の名前
          </label>
          <input
            id="player-name"
            className="w-full border-4 border-mint bg-black px-3 py-3 text-xl text-frost outline-none"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") submit();
            }}
            autoComplete="given-name"
            inputMode="text"
            maxLength={12}
            placeholder="例：はる"
          />
          <button className="choice-button title-choice" type="button" disabled={!name.trim()} onClick={submit}>
            <span>▶</span>
            <span>続きを開く</span>
          </button>
          <button className="title-reset" type="button" onClick={onReset}>
            はじめから
          </button>
        </div>
      </div>
    </div>
  );
}

export function LockScreen() {
  const notifications = [
    ["取引先", "こちらの件、いかがでしょうか。"],
    ["母", "不在着信 5件"],
    ["LINE", "12件のメッセージがあります。"],
    ["SNS", "コメント2件とメッセージ3件があります。"]
  ];

  return (
    <div className="space-y-2">
      {notifications.map(([from, text], index) => (
        <div
          key={from}
          className={`notification-card border-4 border-pixel bg-frost p-2 shadow-[4px_4px_0_#22312a] ${from === "母" ? "notification-pulse" : ""}`}
          style={{ animationDelay: `${index * 420}ms` }}
        >
          <div className="text-[10px] opacity-70">{from}</div>
          <div className="text-xs leading-relaxed">{text}</div>
        </div>
      ))}
    </div>
  );
}

export function SnsScreen() {
  const searches = ["余命3ヶ月　助かった", "誤診", "余命宣告から10年", "生存率"];
  const posts = ["今日だるすぎる", "駅前のラーメン屋閉店するらしい", "来月旅行行く", "父が余命宣告されました", "もっと一緒にいればよかった"];

  return (
    <div className="space-y-3">
      <div className="border-4 border-pixel bg-white p-2 text-xs">検索</div>
      <div className="grid grid-cols-2 gap-2">
        {searches.map((search) => (
          <div key={search} className="border-2 border-pixel bg-frost p-2 text-[10px]">{search}</div>
        ))}
      </div>
      <div className="space-y-2">
        {posts.map((post) => (
          <div key={post} className="border-b-2 border-pixel/50 pb-2 text-[11px]">{post}</div>
        ))}
      </div>
    </div>
  );
}

export function MessageScreen() {
  return (
    <div className="space-y-2">
      {["どうでもいい話なんだけどさ", "駅前のラーメン屋なくなるらしいw", "てか来週飲みいける？"].map((message) => (
        <div key={message} className="ml-auto max-w-[82%] border-4 border-pixel bg-frost p-2 text-xs shadow-[3px_3px_0_#22312a]">
          健太：{message}
        </div>
      ))}
      <div className="mt-4 border-4 border-pixel bg-white p-2 text-[11px] opacity-80">返信を入力...</div>
    </div>
  );
}

export function ReturnNowScreen() {
  return (
    <div className="grid min-h-56 place-items-center border-4 border-pixel bg-ink p-5 text-center text-mint">
      <div>
        <div className="breath-ring mx-auto mb-6 grid h-24 w-24 place-items-center border-4 border-mint">
          <span className="text-[10px]">BREATHE</span>
        </div>
        <div className="mb-5 text-4xl">{formatClock()}</div>
        <p className="text-sm leading-loose">
          画面の外に、<br />
          まだ空気がある。
        </p>
      </div>
    </div>
  );
}

export function DraftInput({
  state,
  onDraftChange,
  onDraftAction
}: {
  state: GameState;
  onDraftChange: (value: string) => void;
  onDraftAction: (action: string) => void;
}) {
  const [sendError, setSendError] = useState("");

  return (
    <div className="space-y-3">
      <textarea
        className="min-h-32 w-full resize-none border-4 border-pixel bg-frost p-3 text-sm leading-loose outline-none"
        placeholder="言えなかった言葉を書く"
        value={state.unsentDraft}
        onChange={(event) => onDraftChange(event.target.value)}
      />
      <p className="text-[10px] opacity-70">この画面からは送信できません。</p>
      <button
        className="choice-button opacity-70"
        type="button"
        onClick={() => setSendError("送信できません。まだ、宛先を選べない。")}
      >
        <span>▶</span>
        <span>送信する</span>
      </button>
      {sendError && <p className="border-4 border-pixel bg-white p-2 text-xs">{sendError}</p>}
      <div className="grid gap-2">
        {["保存する", "消す", "まだ閉じられない"].map((action) => (
          <button key={action} className="choice-button" type="button" onClick={() => onDraftAction(action)}>
            <span>▶</span>
            <span>{action}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function YourWords({ state }: { state: GameState }) {
  const name = state.playerName || "あなた";
  const memory = state.choices.CAMERA_ROLL || "誰にも見せなかった時間";
  const wish = state.choices.RETURN_TO_NOW || "今日を後回しにしないこと";
  const draft = state.unsentDraft.trim() || "まだ、うまく言葉にならない。";
  const fear = state.choices.HOSPITAL_NIGHT || "まだ死にたくない";
  const avoided = state.choices.LOCK_SCREEN || "開きたくなかった通知";
  const denial = state.choices.SNS_DENIAL || "信じたかった言葉";

  return (
    <div className="space-y-5 text-sm leading-loose">
      <p>
        {name}が最後まで握っていたものは、<br />
        成功ではなく、<br />
        「{memory}」<br />
        のような、誰にも見せなかった時間でした。
      </p>
      <p>
        {name}は、<br />
        誰かに会いたかった。
      </p>
      <p>
        一番怖かったのは、<br />
        「{fear}」<br />
        という形をした沈黙でした。
      </p>
      <p>
        最初に目を逸らしたのは、<br />
        「{avoided}」でした。
      </p>
      <p>
        それでも、あなたは<br />
        「{denial}」<br />
        を信じたかった。
      </p>
      <p>
        でも人生は、<br />
        いつも「また今度」のまま進んでいく。
      </p>
      <p>
        未送信のまま残っていた言葉。
      </p>
      <blockquote className="border-4 border-pixel bg-frost p-3">「{draft}」</blockquote>
      <p>
        最後に。<br />
        今日、{wish}。<br />
        今日を後回しにしないために。
      </p>
    </div>
  );
}

export function SceneInlineExtra({ scene }: { scene: Scene }) {
  if (scene.visualType === "lock_screen") return <LockScreen />;
  if (scene.visualType === "sns") return <SnsScreen />;
  if (scene.visualType === "message") return <MessageScreen />;
  if (scene.visualType === "return_now") return <ReturnNowScreen />;
  return null;
}
