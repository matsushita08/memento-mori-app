export function getTimeMood(date = new Date()) {
  const hour = date.getHours();

  if (hour >= 5 && hour < 10) {
    return {
      label: "morning",
      copy: "朝の光が、まだ少し冷たい。",
      className: "from-hospital via-frost to-gameboy"
    };
  }

  if (hour >= 10 && hour < 16) {
    return {
      label: "day",
      copy: "いつもの街は、何も知らない顔をしている。",
      className: "from-frost via-gameboy to-mint"
    };
  }

  if (hour >= 16 && hour < 19) {
    return {
      label: "evening",
      copy: "帰り道みたいな色が、踏切の向こうに残っている。",
      className: "from-[#d8e5b0] via-[#a8c5b4] to-[#7f9bae]"
    };
  }

  return {
    label: "night",
    copy: "深夜の街は、画面の光だけが近い。",
    className: "from-[#0d1114] via-[#1b2b34] to-[#638077]"
  };
}

export function formatClock(date = new Date()) {
  return new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}
