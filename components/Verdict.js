import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";
import { ArrowsRightLeftIcon, ArrowDownIcon } from "@heroicons/react/20/solid";

const TONE = {
  bad: "text-bad",
  warn: "text-warn",
  neutral: "text-ink-2",
  good: "text-good",
  great: "text-good",
};

export default function Verdict({ result, a, b, onSwap }) {
  if (!result) return null;
  const { delta, verdict, gains, losses, differences } = result;
  const sign = delta > 0 ? "+" : "";
  return (
    <div className="glass-strong glass-specular flex w-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[13px] font-medium text-ink-2">Einschätzung</div>
          <AnimatePresence mode="wait" initial={false}>
            <m.div key={verdict.title} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
              <h3 className={`mt-1 text-[26px] font-semibold leading-tight tracking-tight ${TONE[verdict.tone]}`}>{verdict.title}</h3>
            </m.div>
          </AnimatePresence>
        </div>
        <button
          type="button"
          onClick={onSwap}
          aria-label="Geräte tauschen"
          title="Geräte tauschen"
          className="pill glass-sm grid h-10 w-10 shrink-0 place-items-center text-ink-2 transition hover:text-ink active:scale-95"
        >
          <ArrowsRightLeftIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <AnimatePresence mode="popLayout" initial={false}>
          <m.span
            key={delta}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="tnum text-[56px] font-semibold leading-none tracking-tighter"
          >
            {sign}
            {delta}
          </m.span>
        </AnimatePresence>
        <span className="text-[15px] font-medium text-ink-2">
          Punkte von <span className="text-ink">{a.name}</span> zu <span className="text-ink">{b.name}</span>
        </span>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{verdict.text}</p>

      {gains.length > 0 && (
        <div className="mt-5">
          <div className="text-[13px] font-medium text-ink-2">Was du gewinnst</div>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {gains.slice(0, 6).map((g) => (
              <li key={g.key} className="pill bg-good/12 px-3 py-1 text-[13px] font-medium text-good dark:bg-good/18">
                {g.text}
              </li>
            ))}
            {gains.length > 6 && <li className="pill bg-ink/6 px-3 py-1 text-[13px] font-medium text-ink-2 dark:bg-white/10">+{gains.length - 6} weitere</li>}
          </ul>
        </div>
      )}
      {losses.length > 0 && (
        <div className="mt-4">
          <div className="text-[13px] font-medium text-ink-2">Was du aufgibst</div>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {losses.slice(0, 4).map((g) => (
              <li key={g.key} className="pill bg-warn/14 px-3 py-1 text-[13px] font-medium text-[#b26a00] dark:bg-warn/18 dark:text-warn">
                {g.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href="#vergleich"
        className="pill mt-6 inline-flex h-11 items-center justify-center gap-1.5 self-start bg-accent px-5 text-[15px] font-medium text-white transition hover:bg-accent-strong active:scale-[0.98]"
      >
        {differences === 0 ? "Alle Details ansehen" : `${differences} Unterschiede im Detail`}
        <ArrowDownIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
