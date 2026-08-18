"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-neutral text-neutral-content py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/gtels-about-hero/1920/600"
          alt="GTELS engineering operations"
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
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            About <span className="text-primary">GTELS</span>
          </h1>
          <p className="text-lg text-neutral-content/70 max-w-2xl">
            GlobalTech Engineering & Logistic Solutions — a multidisciplinary service provider delivering engineering, WASH infrastructure, logistics, and community-development support across Bangladesh.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
