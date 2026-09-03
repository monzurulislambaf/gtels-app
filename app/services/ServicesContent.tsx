"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/src/data/services";

export default function ServicesContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral text-neutral-content py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-services.jpg"
            alt="GTELS engineering services"
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
              What We Do
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Comprehensive engineering, WASH, logistics, procurement, and construction services delivered with technical excellence across Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 lg:py-28 ${isEven ? "" : "bg-base-200"}`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:direction-rtl" : ""}`}>
                <ScrollReveal direction={isEven ? "left" : "right"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-content flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-base-content/60 leading-relaxed mb-6">{service.description}</p>
                </ScrollReveal>

                <ScrollReveal direction={isEven ? "right" : "left"}>
                  <div className="bg-base-200 rounded-2xl p-6 lg:p-8">
                    <h3 className="font-semibold mb-4">Key Capabilities</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span className="text-base-content/70">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
