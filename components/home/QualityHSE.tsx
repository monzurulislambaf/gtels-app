"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, HeartPulse } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    icon: ShieldCheck,
    title: "Quality Management",
    status: "ISO 9001:2015 — Certified",
    color: "text-primary-content",
    bg: "bg-primary",
  },
  {
    icon: Leaf,
    title: "Environmental Management",
    status: "ISO 14001:2015 — Certified",
    color: "text-accent-content",
    bg: "bg-accent",
  },
  {
    icon: HeartPulse,
    title: "Occupational Health & Safety",
    status: "OHSAS 18001:2007 — Certified",
    color: "text-secondary-content",
    bg: "bg-secondary",
  },
];

export default function QualityHSE() {
  return (
    <section className="py-20 lg:py-28 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Quality & HSE"
          title="Committed to Standards"
          description="Dedicated quality assurance, health, safety, and environmental management across all operations."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-base-100 rounded-xl p-6 border border-base-300 text-center card-hover h-full">
                  <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <span className="badge badge-ghost text-xs">{item.status}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/quality-hse" className="btn btn-outline btn-primary gap-2">
            View Quality & HSE
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
