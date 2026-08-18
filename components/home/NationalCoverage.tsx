"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { zones } from "@/src/data/offices";
import { MapPin } from "lucide-react";

export default function NationalCoverage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="National Coverage"
          title="Nationwide Implementation Capability"
          description="8 zonal offices and 18 sub-offices ensure GTELS can deliver projects anywhere in Bangladesh."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {zones.map((zone, i) => (
            <ScrollReveal key={zone.name} delay={i * 0.06}>
              <div className="bg-base-200 rounded-xl p-5 border border-base-300/50 card-hover">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm">{zone.name}</h3>
                </div>
                <div className="space-y-1.5 text-xs text-base-content/60">
                  <div className="flex justify-between">
                    <span>Offices:</span>
                    <span className="font-medium text-base-content">{zone.offices}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Warehouse:</span>
                    <span className="font-medium text-base-content">{zone.warehouse}</span>
                  </div>
                  <div className="pt-1 border-t border-base-300/50">
                    <span className="text-primary/80">{zone.coverage}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
