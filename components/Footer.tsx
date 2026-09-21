import Link from "next/link";
import { SITE } from "@/lib/site";
import { tools } from "@/lib/tools";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[rgba(255,255,255,0.55)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold">{SITE.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
            Free PDF utilities that process files in your browser. No uploads.
            No accounts required for core tools.
          </p>
          <p className="mt-3 text-xs text-[var(--ink-muted)]">
            {SITE.domain}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Popular tools</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ink-muted)]">
            {tools.slice(0, 6).map((tool) => (
              <li key={tool.id}>
                <Link href={tool.href} className="hover:text-[var(--brand)]">
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Site</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ink-muted)]">
            <li>
              <Link href="/about" className="hover:text-[var(--brand)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[var(--brand)]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[var(--brand)]">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)] px-4 py-4 text-center text-xs text-[var(--ink-muted)]">
        © {new Date().getFullYear()} {SITE.name}. Files never leave your device.
      </div>
    </footer>
  );
}
