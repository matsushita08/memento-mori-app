"use client";

import { formatClock, getTimeMood } from "@/lib/time";
import type { VisualType } from "@/types/game";

type PixelVisualProps = {
  type: VisualType;
  noiseLevel: number;
};

const recentPhotos = ["コーヒー", "スクショ", "駅前", "動画", "ご飯", "空", "鏡", "メモ", "夏", "踏切", "海", "食卓"];

export function PixelVisual({ type, noiseLevel }: PixelVisualProps) {
  const mood = getTimeMood();
  const clock = formatClock();

  if (type === "title") {
    return (
      <div className="pixel-panel relative h-52 overflow-hidden bg-gameboy">
        <div className="absolute inset-0 pixel-grid opacity-35" />
        <div className="absolute bottom-8 left-7 right-7 h-10 border-4 border-pixel bg-mint shadow-[8px_8px_0_#22312a]" />
        <div className="absolute bottom-20 left-12 h-12 w-8 border-4 border-pixel bg-frost" />
        <div className="absolute right-10 top-10 h-20 w-20 border-4 border-pixel bg-frost shadow-[6px_6px_0_#22312a]" />
      </div>
    );
  }

  if (type === "street_crossing") {
    return (
      <div className={`pixel-panel relative h-56 overflow-hidden bg-gradient-to-b ${mood.className}`}>
        <div className="absolute left-4 top-4 text-[9px] text-pixel/80">{mood.copy}</div>
        <div className="absolute bottom-0 h-16 w-full bg-pixel/85" />
        <div className="absolute bottom-16 left-0 h-2 w-full bg-white/70" />
        <div className="absolute bottom-24 left-8 h-20 w-4 bg-pixel" />
        <div className="absolute bottom-40 left-2 h-3 w-28 bg-pixel" />
        <div className="absolute bottom-28 right-8 h-24 w-28 border-4 border-pixel bg-frost/70" />
        <div className="absolute bottom-12 left-1/2 h-14 w-8 -translate-x-1/2 bg-ink/80" />
        <NoiseDots level={noiseLevel} />
      </div>
    );
  }

  if (type === "hospital_ceiling") {
    return (
      <div className="pixel-panel relative h-56 overflow-hidden bg-gradient-to-b from-frost to-hospital">
        <div className="absolute left-12 top-8 h-8 w-36 border-4 border-pixel bg-white" />
        <div className="absolute right-8 top-20 h-28 w-2 bg-pixel/50" />
        <div className="absolute right-5 top-40 h-8 w-7 border-4 border-pixel bg-white" />
        <div className="absolute bottom-0 left-0 h-16 w-full bg-white/70" />
        <div className="absolute bottom-5 right-8 h-9 w-20 border-4 border-pixel bg-mint shadow-glow" />
        <NoiseDots level={noiseLevel} />
      </div>
    );
  }

  if (type === "doctor_view") {
    return (
      <div className="pixel-panel relative h-56 overflow-hidden bg-gradient-to-b from-white to-hospital">
        <div className="absolute inset-x-0 top-0 h-20 bg-white/80" />
        <div className="absolute bottom-5 left-1/2 h-32 w-24 -translate-x-1/2 border-4 border-pixel bg-white">
          <div className="mx-auto mt-5 h-10 w-10 bg-pixel/40" />
          <div className="mx-auto mt-4 h-2 w-12 bg-pixel/70" />
        </div>
        <div className="absolute bottom-20 right-10 h-14 w-10 rotate-6 border-4 border-pixel bg-frost" />
        <div className="absolute bottom-0 left-0 h-10 w-full bg-frost" />
      </div>
    );
  }

  if (type === "hospital_night") {
    return (
      <div className="pixel-panel relative h-56 overflow-hidden bg-gradient-to-b from-ink via-deep to-[#182c33] text-mint">
        <div className="absolute left-8 top-8 h-24 w-28 border-4 border-mint/60 bg-ink" />
        <div className="absolute left-14 top-16 h-1 w-16 bg-mint/40" />
        <div className="absolute bottom-0 h-16 w-full bg-black/40" />
        <div className="absolute bottom-8 right-8 h-20 w-12 border-4 border-mint bg-frost shadow-glow" />
        <div className="absolute right-10 top-4 text-[10px]">{clock}</div>
      </div>
    );
  }

  if (type === "camera_roll") {
    return (
      <div className="pixel-panel h-56 overflow-hidden bg-frost p-3">
        <div className="grid grid-cols-3 gap-2">
          {recentPhotos.map((item, index) => (
            <div key={item} className={`aspect-square border-4 border-pixel ${index > 7 ? "bg-gameboy" : "bg-white"}`}>
              <div className="flex h-full items-end justify-center p-1 text-center text-[8px] text-pixel">{item}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-panel relative h-40 overflow-hidden bg-gradient-to-b from-frost to-gameboy">
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="absolute left-5 top-5 text-[10px] text-pixel">{clock}</div>
      <NoiseDots level={noiseLevel} />
    </div>
  );
}

function NoiseDots({ level }: { level: number }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: level * 10 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 bg-pixel/40"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`
          }}
        />
      ))}
    </div>
  );
}
