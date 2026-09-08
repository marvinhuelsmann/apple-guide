import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import CategoryTabs from "./CategoryTabs";

export default function Nav({ category, onCategory }) {
  return (
    <>
    <div aria-hidden="true" className={`nav-fade${onCategory ? "" : " is-single"}`} />
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-center gap-2 sm:gap-3">
        <Link href="/" className="pill glass-strong glass-specular flex h-12 shrink-0 items-center gap-2 px-4 text-[17px] font-semibold tracking-tight">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="text-ink">
            <path fill="currentColor" d="M16.4 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9s-2-.9-3.4-.9C5.9 6.8 4.2 7.9 3.3 9.6c-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.5.9 2.4-1.4 3.3-2.7c1-1.5 1.5-3 1.5-3.1-.1 0-3.5-1.3-3.5-4.7zM13.9 5c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.5z" />
          </svg>
          <span>Apple Guide</span>
        </Link>
        {onCategory && (
          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <CategoryTabs value={category} onChange={onCategory} />
          </div>
        )}
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a href="#tipp" className="pill glass-sm hidden h-10 items-center px-4 text-[15px] font-medium text-ink-2 transition hover:text-ink sm:flex">
            Trinkgeld
          </a>
          <ThemeToggle />
        </div>
      </div>
      {onCategory && (
        <div className="mx-auto mt-2 max-w-6xl lg:hidden">
          <CategoryTabs value={category} onChange={onCategory} compact />
        </div>
      )}
    </header>
    </>
  );
}
