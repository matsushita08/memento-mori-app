export type SceneId =
  | "TITLE"
  | "STREET"
  | "HOSPITAL"
  | "LOCK_SCREEN"
  | "DOCTOR"
  | "SNS_DENIAL"
  | "FRIEND_MESSAGE"
  | "HOSPITAL_NIGHT"
  | "CAMERA_ROLL"
  | "UNSENT_DRAFT"
  | "RETURN_TO_NOW"
  | "YOUR_WORDS";

export type VisualType =
  | "title"
  | "street_crossing"
  | "hospital_ceiling"
  | "lock_screen"
  | "doctor_view"
  | "sns"
  | "message"
  | "hospital_night"
  | "camera_roll"
  | "draft"
  | "return_now"
  | "your_words";

export type Choice = {
  label: string;
  response?: string;
  value?: string;
};

export type Scene = {
  id: SceneId;
  title: string;
  body: string[];
  question?: string;
  choices?: Choice[];
  visualType: VisualType;
  noiseLevel: number;
  delayMs?: number;
};

export type GameState = {
  sceneIndex: number;
  choices: Record<string, string>;
  responses: Record<string, string>;
  unsentDraft: string;
  startedAt?: string;
};

export type VitalState = {
  label: string;
  className: string;
  notificationText: string;
};
