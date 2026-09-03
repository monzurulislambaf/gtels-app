"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilities = [
  { title: "Deep Tubewell Drilling", desc: "Professional drilling operations with modern rigs for deep groundwater access." },
  { title: "Hand Tubewell Installation", desc: "Community-level hand tubewell systems for rural water supply." },
  { title: "Solar Deep Tubewells", desc: "Solar-powered pumping systems for sustainable, off-grid water supply." },
  { title: "Water-Quality Testing", desc: "Laboratory-approved water sampling and testing for safe drinking water." },
  { title: "Water Treatment", desc: "Communal drinking-water treatment facilities and purification systems." },
  { title: "DEWATS", desc: "Decentralized Wastewater Treatment Systems for sustainable sanitation." },
  { title: "Sanitation Infrastructure", desc: "Bathing facilities, latrines, and community sanitation systems." },
  { title: "Community WASH", desc: "Hygiene promotion, community engagement, and capacity building." },
];

const processSteps = [
  { step: "Site Assessment", desc: "Hydrogeological survey and community needs assessment" },
  { step: "Planning", desc: "Engineering design and project planning" },
  { step: "Drilling", desc: "Borehole drilling with professional rigs" },
  { step: "Casing & Installation", desc: "Filter, casing, and GI-PVC pipe installation" },
  { step: "Civil Works", desc: "Platform construction and civil infrastructure" },
  { step: "Pump Installation", desc: "Solar or hand pump installation and connection" },
  { step: "Testing", desc: "Water-quality testing and performance verification" },
  { step: "Quality Verification", desc: "Third-party testing and client approval" },
  { step: "Commissioning", desc: "System commissioning and operational setup" },
  { step: "Handover", desc: "Documentation, training, and community handover" },
];

export default function WashContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral text-neutral-content py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-wash.jpg"
            alt="GTELS WASH infrastructure project"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-content/60 mb-3 block">
              WASH & Water Infrastructure
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Deep Tubewell & <span className="text-primary">WASH</span> Infrastructure
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              GTELS delivers comprehensive WASH infrastructure including deep tubewells, hand tubewells, solar-powered systems, water treatment, DEWATS, and community WASH programs across Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Our WASH Capabilities"
            title="Comprehensive Water & Sanitation Solutions"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08}>
                <div className="bg-base-200 rounded-xl p-6 card-hover h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center mb-3">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{cap.title}</h3>
                  <p className="text-xs text-base-content/60 leading-relaxed">{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 lg:py-28 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Implementation Process"
            title="End-to-End WASH Delivery"
            description="From site assessment to community handover, GTELS follows a structured implementation process."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {processSteps.map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.06}>
                  <div className="flex gap-4 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-primary mt-2" />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-semibold text-base">{item.step}</h3>
                      <p className="text-sm text-base-content/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Readiness */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Technical Readiness"
            title="Turnkey Delivery Capability"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Turnkey Delivery", desc: "Labor, materials, tools, transportation, supervision, temporary works, safety, cleaning and incidental works." },
              { title: "Deep Tubewell Works", desc: "Boring/drilling, casing/filter/GI-PVC installation, platform/civil works and pump installation." },
              { title: "Quality & Water Testing", desc: "Water sampling/testing through approved laboratory, with corrective action and re-testing." },
              { title: "Permits & Coordination", desc: "Drilling/groundwater permits and coordination with relevant authorities." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="card bg-base-200 border border-base-300 h-full">
                  <div className="card-body p-6">
                    <h3 className="card-title text-base">{item.title}</h3>
                    <p className="text-sm text-base-content/60">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Discuss Your WASH Project?</h2>
          <p className="text-primary-content/80 mb-6 max-w-xl mx-auto">
            GTELS has the technical capability, workforce, and nationwide reach to deliver your WASH infrastructure requirements.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-white/90 border-none gap-2">
            Contact GTELS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
