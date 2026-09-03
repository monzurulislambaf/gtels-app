"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { company } from "@/src/data/company";
import { teamStructure } from "@/src/data/team";
import { zones } from "@/src/data/offices";
import { equipment } from "@/src/data/equipment";
import { fleet } from "@/src/data/fleet";
import { projects } from "@/src/data/projects";
import { clients } from "@/src/data/clients";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sections = [
  { num: "01", title: "Company at a Glance", desc: "Overview of GTELS capabilities and reach" },
  { num: "02", title: "Vision, Mission & Core Values", desc: "Guiding principles and organizational direction" },
  { num: "03", title: "Organizational Structure", desc: "Departments and reporting lines" },
  { num: "04", title: "Geographic Reach", desc: "8 zones, 18 sub-offices nationwide" },
  { num: "05", title: "WASH & Deep Tubewell Capability", desc: "Technical WASH delivery capability" },
  { num: "06", title: "Project Experience", desc: "Documented WASH and engineering projects" },
  { num: "07", title: "Manpower", desc: "100+ skilled personnel" },
  { num: "08", title: "Equipment & Resources", desc: "24+ equipment categories" },
  { num: "09", title: "Quality, HSE & Compliance", desc: "ISO standards and compliance policies" },
];

export default function CompanyProfileContent() {
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
              Company Profile
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              {company.shortName} <span className="text-primary">Profile</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              A comprehensive overview of GlobalTech Engineering & Logistic Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Index */}
      <section className="py-16 lg:py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="Quick Index" title="Evaluator Quick Index" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {sections.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.05}>
                <div className="bg-base-100 rounded-xl p-5 card-hover border border-base-300">
                  <span className="text-xs font-bold text-primary">{s.num}</span>
                  <h3 className="font-semibold text-sm mt-1">{s.title}</h3>
                  <p className="text-xs text-base-content/50 mt-1">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="01" title="Company at a Glance" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: 30000, suffix: "+", label: "Sq. Ft. Warehouse" },
              { value: 8, suffix: "", label: "Field Offices" },
              { value: 100, suffix: "+", label: "Personnel" },
              { value: 1000, suffix: "+", label: "Tube Wells" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="text-center p-4 bg-base-200 rounded-xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-3xl font-bold text-primary" />
                  <div className="text-sm text-base-content/60 mt-1">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-base-content/70 leading-relaxed max-w-3xl">
            {company.description} With {projectStats.totalProjects} documented projects worth {projectStats.totalValue} implemented
            in the last 4 years, GTELS maintains a strong track record in engineering and WASH infrastructure delivery.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="02" title="Vision, Mission & Core Values" />
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ScrollReveal>
              <div className="bg-base-100 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">Vision</h3>
                <p className="text-sm text-base-content/70">{company.vision}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-base-100 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">Mission</h3>
                <p className="text-sm text-base-content/70">{company.mission}</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {company.values.map((v) => (
              <div key={v.title} className="bg-base-100 rounded-lg p-4">
                <h4 className="font-semibold text-sm">{v.title}</h4>
                <p className="text-xs text-base-content/60 mt-1">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manpower */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="07" title="Manpower" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {teamStructure.workforce.map((item) => (
              <div key={item.category} className="flex items-center justify-between bg-base-200 rounded-lg p-3 text-sm">
                <span className="text-base-content/70">{item.category}</span>
                <span className="font-bold text-primary">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 lg:py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="08" title="Equipment Register" />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full max-w-4xl mx-auto">
              <thead>
                <tr><th>Equipment</th><th>Category</th><th className="text-center">Qty</th></tr>
              </thead>
              <tbody>
                {equipment.map((e) => (
                  <tr key={e.id}>
                    <td className="text-sm">{e.name}</td>
                    <td className="text-sm text-base-content/60">{e.category}</td>
                    <td className="text-center font-semibold text-primary">{e.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Download Full Company Profile</h2>
          <p className="text-primary-content/80 mb-6 max-w-xl mx-auto">
            Contact GTELS to request the complete company profile document with detailed financial, technical, and project information.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-white/90 border-none gap-2">
            Contact GTELS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

const projectStats = {
  totalValue: "BDT 180+",
  totalProjects: 8,
};
