"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ShieldCheck, Leaf, HeartPulse, AlertTriangle, FileCheck, Eye } from "lucide-react";

const certCards = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    status: "On Process",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Leaf,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    status: "On Process",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: HeartPulse,
    title: "OHSAS 18001:2007",
    subtitle: "Occupational Health & Safety",
    status: "On Process",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

const policies = [
  "Third-party testing and inspection",
  "Regular internal and external audits",
  "Continuous improvement programs",
  "Systematic risk assessment",
  "PPE provision and enforcement",
  "Public safety protocols",
  "Environmental controls and monitoring",
  "Water-quality testing and compliance",
  "Ethical conduct and safeguarding",
  "Permit compliance and documentation",
  "Information security management",
];

export default function QualityHSEContent() {
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
              Standards
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Quality & <span className="text-primary">HSE</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Committed to quality management, environmental responsibility, and occupational health & safety across all operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification Status */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Certifications"
            title="Certification Status"
            description="GTELS is pursuing the following international standards. Status: In Progress."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certCards.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <ScrollReveal key={cert.title} delay={i * 0.1}>
                  <div className="bg-base-200 rounded-xl p-8 text-center card-hover h-full">
                    <div className={`w-16 h-16 rounded-xl ${cert.bg} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${cert.color}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                    <p className="text-sm text-base-content/60 mb-3">{cert.subtitle}</p>
                    <span className="badge badge-warning badge-lg">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      {cert.status}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HSE Policies */}
      <section className="py-20 lg:py-28 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Quality & Compliance Policies"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {policies.map((policy, i) => (
              <ScrollReveal key={policy} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-base-100 rounded-xl p-5 border border-base-300/50 card-hover">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-base-content/70">{policy}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            eyebrow="Statement"
            title="Quality, HSE & Compliance Statement"
          />
          <ScrollReveal>
            <div className="bg-base-200 rounded-2xl p-8 lg:p-10">
              <p className="text-base-content/70 leading-relaxed">
                GTELS is committed to delivering engineering, WASH, and logistics services that meet or exceed
                client requirements and applicable regulatory standards. We maintain a systematic approach to
                quality management, environmental responsibility, and occupational health & safety. Our team
                implements third-party testing, regular audits, risk assessment, and continuous improvement
                programs across all operations. We uphold ethical conduct, safeguarding, permit compliance,
                and information security as core operational principles.
              </p>
              <p className="text-sm text-base-content/50 mt-4 italic">
                Note: ISO 9001:2015, ISO 14001:2015, and OHSAS 18001:2007 certifications are currently in process.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
