import Link from "next/link";
import { SITE } from "@/lib/site";
import { tools, CATEGORY_LABELS, type ToolCategory } from "@/lib/tools";
import { PrivacyCallout } from "@/components/PrivacyCallout";
import { ToolIcon } from "@/components/ToolIcon";

const categoryOrder: ToolCategory[] = [
  "convert",
  "organize",
  "optimize",
  "edit",
  "secure",
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--brand)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(169,15,22,0.78), rgba(215,25,32,0.2) 45%, rgba(255,255,255,0.08)), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.24), transparent 34%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[62svh] max-w-6xl flex-col justify-center px-4 py-14 sm:min-h-[72vh] sm:px-6 sm:py-24">
          <p className="animate-fade-up font-display text-sm font-semibold tracking-wide text-white/82">
            {SITE.domain}
          </p>
          <h1 className="animate-fade-up font-display mt-3 max-w-4xl text-[clamp(2.65rem,13vw,4.5rem)] font-bold leading-[1.04] text-white sm:text-6xl md:text-7xl">
            best free pdf converter
          </h1>
          <p className="animate-fade-up-delay mt-5 max-w-xl text-base leading-relaxed text-white/86 sm:text-xl">
            {SITE.tagline}
          </p>
          <div className="animate-fade-up-delay mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <a href="#tools" className="btn btn-primary w-full sm:w-auto">
              Browse tools
            </a>
            <Link href="/privacy" className="btn btn-secondary w-full sm:w-auto">
              Why it&apos;s private
            </Link>
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20"
        aria-labelledby="tools-heading"
      >
        <PrivacyCallout className="mb-10" />
        <h2
          id="tools-heading"
          className="font-display text-2xl font-bold sm:text-3xl"
        >
          All tools
        </h2>
        <p className="mt-2 max-w-[65ch] text-[var(--ink-muted)]">
          Fourteen free utilities with dedicated SEO pages. Pick a tool — heavy
          PDF libraries load only after you choose a file.
        </p>

        <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
          {categoryOrder.map((category) => {
            const group = tools.filter((t) => t.category === category);
            return (
              <div key={category}>
                <h3 className="font-display text-lg font-semibold text-[var(--brand-deep)]">
                  {CATEGORY_LABELS[category]}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.map((tool, index) => (
                    <li
                      key={tool.id}
                      className="tool-grid-item"
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      <Link
                        href={tool.href}
                        className="group flex h-full items-start gap-4 rounded-xl border border-[var(--line)] bg-white/80 px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[var(--shadow)] sm:px-5"
                      >
                        <ToolIcon id={tool.id} />
                        <span className="min-w-0">
                          <span className="font-display block text-base font-semibold group-hover:text-[var(--brand)] sm:text-lg">
                            {tool.name}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-[var(--ink-muted)]">
                            {tool.summary}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
