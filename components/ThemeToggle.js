import { useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// Beobachtet die "dark"-Klasse am <html>, die das Inline-Skript in _document.js setzt.
function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("ag-theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Helles Design" : "Dunkles Design"}
      className="pill glass-sm grid h-10 w-10 place-items-center text-ink-2 transition hover:text-ink active:scale-95"
    >
      {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
