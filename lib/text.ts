export function personalize(text: string, playerName?: string) {
  const name = playerName?.trim() || "あなた";
  return text.replaceAll("{name}", name);
}

export function personalizeLines(lines: string[], playerName?: string) {
  return lines.map((line) => personalize(line, playerName));
}
