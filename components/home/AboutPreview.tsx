"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/src/data/company";

const highlights = [
  "Engineering works and construction",
  "WASH infrastructure delivery",
  "Logistics and supply-chain operations",
  "Institutional procurement",
  "Community development support",
  "Project management and QA",
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="About GTELS"
              title="Multidisciplinary Engineering & WASH Partner"
              description="GTELS is a nationally recognized multidisciplinary service provider delivering engineering, WASH infrastructure, logistics, procurement, and community-development support."
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-base-content/70">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn btn-primary gap-2">
              Learn More About GTELS
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom">
                <img
                  src="/images/about-preview.jpg"
                  alt="GTELS project crew at a drilling site"
                  className="w-full h-[350px] lg:h-[420px] object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
