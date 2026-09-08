import Image from "next/image";
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";
import ScoreRing from "./ScoreRing";

// Zeigt das Gerät groß, mit weichem Wechsel beim Umschalten.
export default function DeviceStage({ device, side, priority }) {
  const fromX = side === "a" ? -40 : 40;
  const landscape = device.imageW > device.imageH * 1.1;
  return (
    <div className="flex flex-col items-center">
      <div className={`relative flex w-full items-end justify-center ${landscape ? "h-[210px] sm:h-[260px] lg:h-[300px]" : "h-[280px] sm:h-[360px] lg:h-[420px]"}`}>
        <AnimatePresence mode="popLayout" initial={false}>
          <m.div
            key={device.id}
            initial={{ opacity: 0, x: fromX, scale: 0.96, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -fromX / 2, scale: 0.97, filter: "blur(6px)" }}
            transition={{ type: "spring", stiffness: 240, damping: 28, mass: 0.9 }}
            className="absolute inset-0 flex items-end justify-center"
          >
            <Image
              src={device.image}
              alt={device.name}
              width={device.imageW}
              height={device.imageH}
              priority={priority}
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 60vw"
              unoptimized={device.image.endsWith(".svg")}
              className="h-full w-auto max-w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.22)] dark:drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
            />
          </m.div>
        </AnimatePresence>
      </div>
      <div className="mt-6 w-full max-w-[360px] text-center">
        <AnimatePresence mode="wait" initial={false}>
          <m.div key={device.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
            <h2 className="text-[22px] font-semibold tracking-tight">{device.name}</h2>
            <p className="mt-1 text-[15px] leading-snug text-ink-2 text-balance">{device.tagline}</p>
          </m.div>
        </AnimatePresence>
        <div className="mt-4 flex justify-center">
          <ScoreRing value={device.points} tone={side === "b" ? "accent" : "ink"} />
        </div>
      </div>
    </div>
  );
}
