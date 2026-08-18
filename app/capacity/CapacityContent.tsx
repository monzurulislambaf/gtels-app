"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { zones } from "@/src/data/offices";
import { offices } from "@/src/data/offices";

export default function CapacityContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral text-neutral-content py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/gtels-capacity/1920/600"
            alt="GTELS national coverage"
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
              Our Reach
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              National <span className="text-primary">Capacity</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Bangladesh-wide implementation capability with 8 zonal offices, 18 sub-offices, and 55,000+ sq. ft. warehouse capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 55000, suffix: "+", label: "Sq. Ft. Warehouse" },
              { value: 8, suffix: "", label: "Zonal Offices" },
              { value: 18, suffix: "", label: "Sub-Offices" },
              { value: 241, suffix: "+", label: "Personnel" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="text-center p-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-3xl font-bold text-primary" />
                  <div className="text-sm text-base-content/60 mt-1">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Cards */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Warehouse Zones"
            title="Nationwide Warehousing Network"
            description="55,000+ sq. ft. total capacity across 8 strategically located warehouse zones."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {zones.map((zone, i) => (
              <ScrollReveal key={zone.name} delay={i * 0.08}>
                <div className="bg-base-200 rounded-xl p-6 card-hover h-full">
                  <h3 className="font-semibold text-lg mb-3">{zone.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Warehouse:</span>
                      <span className="font-medium">{zone.warehouse}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base-content/60">Offices:</span>
                      <span className="font-medium">{zone.offices}</span>
                    </div>
                    <div className="pt-2 border-t border-base-300/50">
                      <span className="text-primary text-xs font-medium">{zone.coverage}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Offices */}
      <section className="py-20 lg:py-28 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Office Locations"
            title="All Offices"
          />
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Zone</th>
                  <th>Type</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {offices.map((office) => (
                  <tr key={office.id}>
                    <td className="font-medium">{office.zone}</td>
                    <td>
                      <span className={`badge badge-sm ${
                        office.type === "head-office" ? "badge-primary" :
                        office.type === "zonal" ? "badge-info" : "badge-ghost"
                      }`}>
                        {office.type.replace("-", " ")}
                      </span>
                    </td>
                    <td className="text-sm text-base-content/70">{office.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
