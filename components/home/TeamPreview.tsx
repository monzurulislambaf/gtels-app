"use client";

import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { teamStructure } from "@/src/data/team";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function TeamPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="Our Team"
              title="Technical Workforce"
              align="left"
              description="Approximately 241 skilled personnel ready for nationwide deployment across engineering, WASH, logistics, and construction."
            />

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-base-200 rounded-xl">
                <AnimatedCounter value={241} className="text-3xl font-bold text-primary" />
                <div className="text-xs text-base-content/60 mt-1">Total Personnel</div>
              </div>
              <div className="text-center p-4 bg-base-200 rounded-xl">
                <AnimatedCounter value={15} className="text-3xl font-bold text-primary" />
                <div className="text-xs text-base-content/60 mt-1">Corporate Staff</div>
              </div>
              <div className="text-center p-4 bg-base-200 rounded-xl">
                <AnimatedCounter value={8} className="text-3xl font-bold text-primary" />
                <div className="text-xs text-base-content/60 mt-1">Zonal Coordinators</div>
              </div>
            </div>

            <Link href="/team" className="btn btn-primary gap-2">
              View Team Structure
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-base-200 rounded-2xl p-6 lg:p-8">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Workforce Distribution
              </h3>
              <div className="space-y-2">
                {teamStructure.workforce.map((item) => (
                  <div key={item.category} className="flex items-center justify-between text-sm py-1.5 border-b border-base-300/50 last:border-0">
                    <span className="text-base-content/70">{item.category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-base-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${(item.count / 93) * 100}%` }}
                        />
                      </div>
                      <span className="font-semibold text-primary w-8 text-right">{item.count}</span>
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
