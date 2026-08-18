"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { TrendingUp, Landmark, Shield, FileCheck } from "lucide-react";

const summaryItems = [
  {
    icon: TrendingUp,
    title: "Financial Growth",
    desc: "Recent financial growth reflecting expanding project portfolio and operational capacity.",
  },
  {
    icon: FileCheck,
    title: "Audited Statements",
    desc: "Audited financial statements available upon request for qualified parties.",
  },
  {
    icon: Landmark,
    title: "Banking Capacity",
    desc: "Established banking relationships supporting project operations and tender requirements.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    desc: "Comprehensive insurance coverage for operational, professional, and project risks.",
  },
];

export default function FinancialContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative bg-neutral text-neutral-content py-20 lg:py-28 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-content/60 mb-3 block">
              Financial
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Financial <span className="text-primary">Capacity</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Public summary of GTELS financial capability and institutional readiness.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Public Summary"
            title="Financial Capability"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {summaryItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-base-200 rounded-xl p-6 card-hover h-full">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-base-content/60">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-base-100 rounded-2xl p-8 border border-base-300/50">
              <h3 className="font-semibold text-lg mb-3">Restricted Information</h3>
              <p className="text-sm text-base-content/60 leading-relaxed">
                Sensitive financial details including bank account numbers, SWIFT codes, detailed insurance
                policy numbers, and confidential financial records are not published on this page. These
                documents are available to qualified parties upon request during tendering processes.
              </p>
              <p className="text-sm text-base-content/50 mt-4 italic">
                Contact GTELS for detailed financial documentation: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "globaltechess@gmail.com"}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
