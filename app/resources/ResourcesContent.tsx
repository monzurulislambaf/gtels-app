"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FileText, Download } from "lucide-react";

const resources = [
  { title: "Company Profile", desc: "Complete GTELS company profile document", available: true },
  { title: "Capability Statement", desc: "Summary of GTELS technical and operational capability", available: true },
  { title: "Project Portfolio", desc: "Detailed project experience documentation", available: true },
  { title: "Equipment Register", desc: "Complete equipment inventory and specifications", available: true },
  { title: "Manpower Profile", desc: "Workforce structure and capacity details", available: true },
  { title: "WASH Capability", desc: "WASH-specific capability and experience statement", available: true },
  { title: "HSE & Quality Statement", desc: "Quality, health, safety and environmental policy", available: true },
  { title: "Tender Documents", desc: "Standard tender documentation package", available: false },
];

export default function ResourcesContent() {
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
              Downloads
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              <span className="text-primary">Resources</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Company documents, capability statements, and project documentation available for download.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {resources.map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 0.06}>
                <div className="bg-base-200 rounded-xl p-6 flex items-center justify-between card-hover">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{resource.title}</h3>
                      <p className="text-sm text-base-content/60">{resource.desc}</p>
                    </div>
                  </div>
                  <div>
                    {resource.available ? (
                      <button className="btn btn-primary btn-sm gap-2" disabled>
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Download</span>
                      </button>
                    ) : (
                      <span className="text-xs text-base-content/50 italic">Available upon request</span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
