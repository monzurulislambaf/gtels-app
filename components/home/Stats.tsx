"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { company } from "@/src/data/company";

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {company.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="bg-base-100 rounded-xl p-6 text-center shadow-sm border border-base-300 card-hover">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl lg:text-4xl font-bold text-primary"
                />
                <div className="mt-2 text-sm font-semibold text-base-content">{stat.label}</div>
                <div className="mt-1 text-xs text-base-content/50">{stat.description}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
