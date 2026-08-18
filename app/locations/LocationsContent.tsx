"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { offices } from "@/src/data/offices";
import { MapPin, Building } from "lucide-react";

export default function LocationsContent() {
  const shouldReduceMotion = useReducedMotion();

  const zones = [...new Set(offices.map((o) => o.zone))];

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
              Our Reach
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Office <span className="text-primary">Locations</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Headquartered in Dhaka with 8 zonal offices and 18 sub-offices across Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Head Office */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-primary text-primary-content rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6" />
                <h2 className="text-xl font-bold">Head Office — Dhaka</h2>
              </div>
              <p className="text-primary-content/80 text-lg">623, West Nakhalpara, Tejgaon, Dhaka-1215</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Zone Offices */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Zonal & Sub-Offices"
            title="Nationwide Office Network"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, i) => {
              const zoneOffices = offices.filter((o) => o.zone === zone);
              return (
                <ScrollReveal key={zone} delay={i * 0.08}>
                  <div className="bg-base-200 rounded-xl p-6 card-hover h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-lg">{zone} Zone</h3>
                    </div>
                    <div className="space-y-3">
                      {zoneOffices.map((office) => (
                        <div key={office.id} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                            office.type === "head-office" ? "bg-primary" :
                            office.type === "zonal" ? "bg-info" : "bg-base-content/30"
                          }`} />
                          <div>
                            <div className="text-sm font-medium">{office.address}</div>
                            <span className={`badge badge-xs mt-1 ${
                              office.type === "head-office" ? "badge-primary" :
                              office.type === "zonal" ? "badge-info" : "badge-ghost"
                            }`}>
                              {office.type.replace("-", " ")}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
