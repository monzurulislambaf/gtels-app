"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { fleet } from "@/src/data/fleet";
import { Truck, Warehouse, Package, Clock } from "lucide-react";

const capabilities = [
  { icon: Truck, title: "Fleet Management", desc: "Comprehensive vehicle fleet for multi-site deployment." },
  { icon: Warehouse, title: "Warehousing", desc: "30,000+ sq. ft. across 8 zones for storage and inventory." },
  { icon: Package, title: "Procurement", desc: "End-to-end sourcing, purchasing, and supply chain." },
  { icon: Clock, title: "Emergency Response", desc: "Rapid deployment for time-critical deliveries." },
];

export default function LogisticsContent() {
  const [filter, setFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const vehicleTypes = ["All", ...new Set(fleet.map((f) => f.vehicleType))];
  const filtered = filter === "All" ? fleet : fleet.filter((f) => f.vehicleType === filter);

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
              Operations
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Logistics & <span className="text-primary">Fleet</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Nationwide logistics capability including fleet management, warehousing, procurement, transportation, and last-mile delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={cap.title} delay={i * 0.1}>
                  <div className="bg-base-200 rounded-xl p-6 card-hover text-center h-full">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-sm mb-2">{cap.title}</h3>
                    <p className="text-xs text-base-content/60">{cap.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Table */}
      <section className="py-16 lg:py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Fleet Inventory"
            title="Vehicle Fleet"
          />

          <div className="flex flex-wrap gap-2 mb-6">
            {vehicleTypes.map((type) => (
              <button
                key={type}
                className={`btn btn-sm ${filter === type ? "btn-primary" : "btn-ghost"}`}
                onClick={() => setFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Vehicle Type</th>
                  <th>Model</th>
                  <th className="text-center">Count</th>
                  <th>Ownership</th>
                  <th>Condition</th>
                  <th className="hidden md:table-cell">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td className="font-medium">{item.vehicleType}</td>
                    <td className="text-sm">{item.model}</td>
                    <td className="text-center font-semibold text-primary">{item.count}</td>
                    <td>
                      <span className={`badge badge-sm ${item.ownership === "owned" ? "badge-primary" : "badge-ghost"}`}>
                        {item.ownership}
                      </span>
                    </td>
                    <td>
                      <span className={`badge badge-sm ${
                        item.condition === "excellent" ? "badge-success" :
                        item.condition === "good" ? "badge-info" : "badge-warning"
                      }`}>
                        {item.condition}
                      </span>
                    </td>
                    <td className="text-sm text-base-content/60 hidden md:table-cell">{item.purpose}</td>
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
