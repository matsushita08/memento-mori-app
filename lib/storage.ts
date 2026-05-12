import type { GameState } from "@/types/game";

const KEY = "yohaku-game-state";

export const initialGameState: GameState = {
  sceneIndex: 0,
  choices: {},
  responses: {},
  unsentDraft: ""
};

export function loadGameState(): GameState {
  if (typeof window === "undefined") return initialGameState;

  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return initialGameState;
    return { ...initialGameState, ...JSON.parse(raw) };
  } catch {
    return initialGameState;
  }
}

export function saveGameState(state: GameState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function clearGameState() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
