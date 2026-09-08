import * as m from "motion/react-m";
import { CATEGORIES } from "../lib/devices";

export default function CategoryTabs({ value, onChange, compact }) {
  return (
    <div className={`pill glass-strong glass-specular thin-scroll flex max-w-full items-center gap-0.5 overflow-x-auto p-1 ${compact ? "h-11" : "h-12"}`} role="tablist" aria-label="Gerätekategorie">
      {CATEGORIES.map((c) => {
        const active = c.id === value;
        return (
          <button
            key={c.id}
            role="tab"
            aria-selected={active}
            type="button"
            onClick={() => onChange(c.id)}
            className={`pill relative shrink-0 px-3.5 text-[15px] font-medium transition-colors sm:px-4 ${compact ? "h-9" : "h-10"} ${active ? "text-ink" : "text-ink-2 hover:text-ink"}`}
          >
            {active && (
              <m.span
                layoutId={compact ? "tab-pill-compact" : "tab-pill"}
                className="pill absolute inset-0 bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.08),0_0_0_0.5px_rgba(0,0,0,0.05)] dark:bg-white/12"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative">{c.label}</span>
          </button>
        );
      })}
    </div>
  );
}
