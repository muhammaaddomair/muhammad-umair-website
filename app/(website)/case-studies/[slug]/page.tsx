import { Suspense } from "react";
import Loading from "@/app/loading";
import { CaseStudyData } from "@/data/case-studies/case-studies-data";
import CaseStudyPage from "@/views/case-study-page";

export function generateStaticParams() {
  return CaseStudyData.map((study) => ({ slug: study.slug }));
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<Loading />}>
      <CaseStudyPage params={params} />
    </Suspense>
  );
}
