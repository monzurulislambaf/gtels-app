"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/src/data/gallery";

export default function GalleryPreview() {
  const featured = galleryImages.slice(0, 6);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Project Evidence & Documentation"
          description="Visual evidence from WASH projects, field operations, equipment, and construction activities."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {featured.map((img, i) => (
            <ScrollReveal key={img.id} delay={i * 0.08}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] group img-zoom">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="btn btn-outline btn-primary gap-2">
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
