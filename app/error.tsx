"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="page-layout flex min-h-[70dvh] flex-col items-start justify-center py-16">
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-heading">Something didn&apos;t load.</h1>
      <p className="mt-5 text-base leading-relaxed text-foreground">Please try again, or return to the home page.</p>
      <div className="mt-7 flex flex-wrap gap-4">
        <button type="button" onClick={reset} className="rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground">Try again</button>
        <Link href="/" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-heading">Back to home</Link>
      </div>
    </main>
  );
}
