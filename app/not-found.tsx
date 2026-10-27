import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-layout flex min-h-[70dvh] flex-col items-start justify-center py-16">
      <p className="mb-4 text-sm font-semibold text-sub-heading">404 - Page not found</p>
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-heading sm:text-5xl">Let&apos;s get you back on track.</h1>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground">This page may have moved or the link may be incorrect. Explore my work or return to the home page.</p>
      <div className="mt-7 flex flex-wrap gap-4">
        <Link href="/" className="rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground">Back to home</Link>
        <Link href="/case-studies" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-heading">Explore case studies</Link>
      </div>
    </main>
  );
}
