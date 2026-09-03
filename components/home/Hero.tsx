"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Droplets, Building2, Truck } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-home.jpg"
          alt="GTELS deep tubewell drilling operation"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Decorative elements */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Engineering • WASH • Logistics • Infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Engineering Solutions for{" "}
            <span className="text-accent">Water</span>,{" "}
            <span className="text-accent">Infrastructure</span> &{" "}
            <span className="text-accent">Sustainable Development</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl"
          >
            GTELS delivers integrated engineering works, WASH infrastructure, logistics, procurement,
            technology installation and community-development support across Bangladesh.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/about"
              className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/30"
            >
              Explore Our Capabilities
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              Contact GTELS
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { icon: Droplets, value: "1000+", label: "Tube Wells" },
              { icon: Building2, value: "8", label: "Field Offices" },
              { icon: Truck, value: "30K+", label: "Sq. Ft. Warehouse" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                <div className="text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 to-transparent" />
    </section>
  );
}
