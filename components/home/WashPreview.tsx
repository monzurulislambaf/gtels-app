"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const capabilities = [
  "Deep tubewell drilling & installation",
  "Hand tubewell installation",
  "Solar deep tubewell systems",
  "Water-quality testing",
  "Water treatment facilities",
  "DEWATS (Decentralized Wastewater Treatment)",
  "Sanitation infrastructure",
  "Community WASH programs",
];

const processSteps = [
  "Site Assessment",
  "Planning",
  "Drilling",
  "Casing & Installation",
  "Civil Works",
  "Pump Installation",
  "Testing",
  "Commissioning",
  "Handover",
];

export default function WashPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="WASH & Water Infrastructure"
          title="Deep Tubewell & WASH Expertise"
          description="GTELS delivers comprehensive WASH infrastructure including deep tubewells, solar water systems, treatment facilities, and community programs."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Capabilities list */}
          <ScrollReveal direction="left">
            <div className="bg-base-200 rounded-2xl p-8">
              <h3 className="font-semibold text-lg mb-5">WASH Capabilities</h3>
              <div className="space-y-3">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-base-content/70">{cap}</span>
                  </div>
                ))}
              </div>
              <Link href="/wash" className="btn btn-primary mt-8 gap-2">
                View WASH Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Process flow */}
          <ScrollReveal direction="right">
            <div className="bg-base-200 rounded-2xl p-8">
              <h3 className="font-semibold text-lg mb-5">Implementation Process</h3>
              <div className="space-y-0">
                {processSteps.map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="w-px h-8 bg-primary/20" />
                      )}
                    </div>
                    <div className="pt-1">
                      <span className="text-sm font-medium text-base-content">{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
