"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type TypewriterTextProps = {
  lines: string[];
  speed?: number;
  onComplete?: () => void;
};

export function TypewriterText({ lines, speed = 42, onComplete }: TypewriterTextProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(lines.length === 0);
  const endRef = useRef<HTMLDivElement | null>(null);

  const currentLine = lines[lineIndex] || "";
  const visibleLines = useMemo(() => {
    const completed = lines.slice(0, lineIndex);
    if (done) return lines;
    return [...completed, currentLine.slice(0, charIndex)];
  }, [charIndex, currentLine, done, lineIndex, lines]);

  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setDone(lines.length === 0);
  }, [lines]);

  useEffect(() => {
    if (done) {
      onComplete?.();
      return;
    }

    if (charIndex < currentLine.length) {
      const timer = window.setTimeout(() => setCharIndex((value) => value + 1), speed);
      return () => window.clearTimeout(timer);
    }
  }, [charIndex, currentLine.length, done, onComplete, speed]);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [visibleLines, done]);

  function advance() {
    if (done) return;

    if (charIndex < currentLine.length) {
      setCharIndex(currentLine.length);
      return;
    }

    if (lineIndex < lines.length - 1) {
      setLineIndex((value) => value + 1);
      setCharIndex(0);
      return;
    }

    setDone(true);
  }

  return (
    <button className="typewriter-area" type="button" onClick={advance} aria-label="本文を進める">
      <div className="space-y-4 text-left text-sm leading-loose">
        {visibleLines.map((line, index) => (
          <p key={`${line}-${index}`}>
            {line}
            {!done && index === visibleLines.length - 1 && <span className="type-caret">▌</span>}
          </p>
        ))}
      </div>
      {!done && <div className="mt-4 text-right text-[10px] opacity-60">TAP</div>}
      <div ref={endRef} aria-hidden="true" />
    </button>
  );
}
