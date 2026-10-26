import type { Metadata } from "next";

import CaseStudiesPage from "@/views/case-studies-page";

export default function CaseStudies({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  return <CaseStudiesPage searchParams={searchParams} />;
}
