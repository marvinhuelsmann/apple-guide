import { useEffect } from "react";
import * as m from "motion/react-m";
import { animate, useMotionValue, useTransform, useReducedMotion } from "motion/react";

const R = 26;
const C = 2 * Math.PI * R;

export default function ScoreRing({ value, tone = "ink" }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(value);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 0.7, ease: [0.32, 0.72, 0, 1] });
    return () => controls.stop();
  }, [value, reduce, mv]);

  return (
    <div className="flex items-center gap-3">
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r={R} fill="none" stroke="currentColor" strokeWidth="6" className="text-ink/10 dark:text-white/12" />
        <m.circle
          cx="32"
          cy="32"
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          transform="rotate(-90 32 32)"
          strokeDasharray={C}
          initial={false}
          animate={{ strokeDashoffset: C - (C * value) / 100 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className={tone === "accent" ? "text-accent" : "text-ink"}
        />
      </svg>
      <div>
        <m.div className="tnum text-[28px] font-semibold leading-none tracking-tight">{rounded}</m.div>
        <div className="mt-1 text-[12px] font-medium text-ink-3">von 100 Punkten</div>
      </div>
    </div>
  );
}
