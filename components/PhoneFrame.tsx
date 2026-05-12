import type { ReactNode } from "react";
import type { SceneId } from "@/types/game";
import { getVitalState } from "@/lib/vitals";

type PhoneFrameProps = {
  children: ReactNode;
  noiseLevel: number;
  sceneId: SceneId;
};

export function PhoneFrame({ children, noiseLevel, sceneId }: PhoneFrameProps) {
  const vital = getVitalState(sceneId, noiseLevel);

  return (
    <main className="min-h-dvh bg-ink px-3 py-5 text-frost sm:grid sm:place-items-center">
      <div className="phone-shell mx-auto flex h-[calc(100dvh-40px)] max-h-[820px] min-h-0 w-full max-w-[430px] flex-col overflow-hidden rounded-[2rem] border-4 border-pixel bg-deep p-3 shadow-2xl sm:h-[820px] sm:min-h-[680px]">
        <div className="mx-auto mb-3 h-4 w-24 rounded-b-xl bg-pixel" />
        <section className={`relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.25rem] border-4 border-pixel bg-gameboy text-pixel shadow-screen ${vital.className}`}>
          <div className="scanline pointer-events-none absolute inset-0 z-30 opacity-25" />
          {noiseLevel > 0 && <div className="static-noise pointer-events-none absolute inset-0 z-20" style={{ opacity: noiseLevel * 0.035 }} />}
          <div className="vital-overlay pointer-events-none absolute inset-0 z-10" />
          {children}
        </section>
      </div>
    </main>
  );
}
