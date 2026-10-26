import PageIntroSection from "@/sections/shared/page-intro-section";
import CTASection from "@/sections/shared/cta-section";
import FeaturedStudiesSection from "@/sections/case-studies/featured-case-studies-section";
import CollectionSection from "@/sections/case-studies/collection-section";

export default function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  return (
    <main>
      <PageIntroSection
        id="case-studies-title"
        title="Problems solved."
        subtitle="Built to solve real problems."
        description="Explore the software, automations, and systems I've built and see how they work."
        phrases={[
          "Systems built.",
          "Work made easier.",
          "Ideas realized.",
          "Tasks automated.",
          "Products launched.",
        ]}
      />

      <FeaturedStudiesSection />
      <CollectionSection searchParams={searchParams} />
      <CTASection />
    </main>
  );
}
