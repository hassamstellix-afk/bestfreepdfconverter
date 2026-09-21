import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(255,255,255,0.18)] bg-[var(--brand)] text-white shadow-[0_10px_28px_rgba(169,15,22,0.18)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <Link href="/" className="group flex min-w-0 flex-col">
          <span className="flex min-w-0 items-center gap-2.5">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
              <Image
                src="/logo.svg"
                alt=""
                width={32}
                height={32}
                priority
                unoptimized
                className="h-8 w-8 object-contain bg-white"
              />
            </span>
            <span className="min-w-0 truncate font-display text-base font-bold sm:text-xl">
              {SITE.name}
            </span>
          </span>
          <span className="truncate text-xs text-white/82 group-hover:text-white">
            Private · client-side PDF tools
          </span>
        </Link>
        <nav className="flex w-full items-center justify-between rounded-xl bg-white/10 p-1 text-sm sm:w-auto sm:justify-end sm:bg-transparent sm:p-0">
          <Link
            href="/#tools"
            className="min-h-10 rounded-lg px-3 py-2 text-white/86 transition hover:bg-white/14 hover:text-white"
          >
            Tools
          </Link>
          <Link
            href="/about"
            className="min-h-10 rounded-lg px-3 py-2 text-white/86 transition hover:bg-white/14 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="min-h-10 rounded-lg px-3 py-2 text-white/86 transition hover:bg-white/14 hover:text-white"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
