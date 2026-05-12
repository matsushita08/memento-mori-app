export type AudioCue =
  | "street_crossing"
  | "heartbeat"
  | "hospital_room"
  | "notification"
  | "paper"
  | "night_air";

export const audioManifest: Record<AudioCue, string> = {
  street_crossing: "/audio/street_crossing.mp3",
  heartbeat: "/audio/heartbeat.mp3",
  hospital_room: "/audio/hospital_room.mp3",
  notification: "/audio/notification.mp3",
  paper: "/audio/paper.mp3",
  night_air: "/audio/night_air.mp3"
};

export function getSceneAudio(sceneId: string): AudioCue[] {
  switch (sceneId) {
    case "STREET":
      return ["street_crossing", "heartbeat"];
    case "HOSPITAL":
      return ["hospital_room", "notification"];
    case "DOCTOR":
      return ["paper", "hospital_room", "notification"];
    case "HOSPITAL_NIGHT":
    case "RETURN_TO_NOW":
      return ["night_air", "heartbeat"];
    default:
      return [];
  }
}
