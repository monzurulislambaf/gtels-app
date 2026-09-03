"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/src/data/company";
import {
  Shield,
  Award,
  Users,
  Leaf,
  Lightbulb,
  Target,
} from "lucide-react";

const icons = [Shield, Award, Users, Leaf, Lightbulb, Target];

export default function ValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Our Values"
          title="Core Values"
          description="The principles that guide every project, every team member, and every decision."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.values.map((value, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <div className="bg-base-100 rounded-xl p-6 border border-base-300 card-hover h-full">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-base mb-2">{value.title}</h3>
                  <p className="text-sm text-base-content/60">{value.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
