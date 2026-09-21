import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
  description:
    "best free pdf converter is a privacy-first suite of free browser-based PDF tools for bestfreepdfconverter.com.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold tracking-tight">
        About {SITE.name}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--ink-muted)]">
        {SITE.name} is an all-in-one hub of free PDF utilities for{" "}
        <strong className="text-[var(--ink)]">{SITE.domain}</strong>. Every core
        tool runs in your browser so documents stay on your device.
      </p>

      <div className="mt-8 space-y-6 leading-relaxed">
        <h2 className="font-display text-2xl font-bold">What we offer</h2>
        <p>
          Merge, split, compress, rotate, convert (Word, Excel, JPG), edit
          overlays, sign, and unlock PDFs when you know the password. Each tool
          has its own page for clear guidance and SEO — not a single opaque SPA
          route.
        </p>

        <h2 className="font-display text-2xl font-bold">Honest scope</h2>
        <p>
          Browser-only processing means working free tools, not Adobe-level
          fidelity. We avoid deceptive “perfect conversion” claims and document
          limitations such as no OCR for scanned PDFs and no password cracking.
        </p>

        <p>
          <Link href="/#tools" className="btn btn-primary inline-flex">
            Explore tools
          </Link>
        </p>
      </div>
    </article>
  );
}
