import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE.name}`,
  description:
    "best free pdf converter processes files in your browser. We do not upload, store, or access your documents on a server.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-[var(--ink-muted)]">
        Last updated: September 15, 2026
      </p>

      <div className="prose-like mt-8 space-y-6 text-[var(--ink)] leading-relaxed">
        <p>
          {SITE.name} ({SITE.domain}) is built around a simple rule:{" "}
          <strong>your files never leave your device</strong> for core PDF
          tools. Processing happens in your browser using client-side
          JavaScript libraries.
        </p>

        <h2 className="font-display text-2xl font-bold">No uploads for tools</h2>
        <p>
          When you use merge, split, compress, convert, edit, sign, unlock, or
          related utilities on this site, selected files are read locally in
          your browser. We do not operate a file-upload API for these tools, and
          we do not receive or store your documents on our servers.
        </p>

        <h2 className="font-display text-2xl font-bold">No accounts required</h2>
        <p>
          Core tools do not require an account. If we add optional accounts or
          cloud features later, we will update this policy and clearly separate
          those flows from local processing.
        </p>

        <h2 className="font-display text-2xl font-bold">
          Hosting and analytics
        </h2>
        <p>
          The website itself is hosted by a provider (for example Vercel). The
          host may process standard request logs (such as IP address, user
          agent, and requested URL) needed to serve pages. If we enable privacy-
          respectful analytics in the future, we will disclose the provider and
          settings here.
        </p>

        <h2 className="font-display text-2xl font-bold">Cookies</h2>
        <p>
          We do not use advertising cookies for the core toolkit. Essential
          cookies may be set by the hosting platform for security or performance.
        </p>

        <h2 className="font-display text-2xl font-bold">Contact</h2>
        <p>
          Questions about privacy: reach out via the contact method listed on
          our <Link href="/about" className="text-[var(--brand)] underline">About</Link>{" "}
          page once published for {SITE.domain}.
        </p>
      </div>
    </article>
  );
}
