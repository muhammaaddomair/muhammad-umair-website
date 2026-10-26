import ResponsiveCardCarousel from "@/components/shared/responsive-card-carousel";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ICaseStudyDetail } from "@/data/case-studies/case-studies-data";
import DetailSectionHeading from "./detail-section-heading";

export default function GallerySection({ study }: { study: ICaseStudyDetail }) {
  const { proof } = study.detail;
  const count = Math.max(proof.screenshots.length, proof.recommendedAssets.length, 1);
  return (
    <section aria-label="Project gallery" className="page-layout pt-12 md:pt-18 lg:pt-24">
      <DetailSectionHeading number="03" label="Project gallery" title={proof.heading} />
      <ResponsiveCardCarousel label="project gallery" desktopClassName="grid-cols-2 gap-8">
        {Array.from({ length: count }, (_, index) => {
          const screenshot = proof.screenshots[index];
          const caption = screenshot?.caption || proof.recommendedAssets[index] || `Project view ${index + 1}`;
          return <figure key={index} className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-16/10 bg-muted">
              {screenshot ? <Image src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain object-[0%_0%]" /> : <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-sub-heading"><ImageIcon aria-hidden="true" className="size-7 opacity-40" /><span className="text-xs">Preview not available yet</span></div>}
            </div>
            <figcaption className="border-t border-border px-5 py-4 text-sm leading-relaxed font-medium text-heading">{caption}</figcaption>
          </figure>;
        })}
      </ResponsiveCardCarousel>
    </section>
  );
}
