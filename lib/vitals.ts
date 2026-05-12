import type { SceneId, VitalState } from "@/types/game";

export function getVitalState(sceneId: SceneId, noiseLevel: number): VitalState {
  if (sceneId === "DOCTOR") {
    return {
      label: "音が遠い",
      className: "vital-critical",
      notificationText: "通知 1"
    };
  }

  if (sceneId === "HOSPITAL_NIGHT") {
    return {
      label: "眠れない",
      className: "vital-night",
      notificationText: "通知 0"
    };
  }

  if (sceneId === "RETURN_TO_NOW" || sceneId === "YOUR_WORDS") {
    return {
      label: "呼吸",
      className: "vital-clear",
      notificationText: "静か"
    };
  }

  if (noiseLevel >= 5) {
    return {
      label: "ざわめき",
      className: "vital-noisy",
      notificationText: "通知 多"
    };
  }

  if (noiseLevel >= 3) {
    return {
      label: "画面を見る",
      className: "vital-uneasy",
      notificationText: "通知 少"
    };
  }

  return {
    label: "余白",
    className: "vital-soft",
    notificationText: "静か"
  };
}
