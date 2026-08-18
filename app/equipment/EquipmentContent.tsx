"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { equipment, equipmentCategories } from "@/src/data/equipment";

export default function EquipmentContent() {
  const [filter, setFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered = filter === "All" ? equipment : equipment.filter((e) => e.category === filter);
  const totalItems = equipment.reduce((sum, e) => sum + e.quantity, 0);

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
              Resources
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Equipment <span className="text-primary">Inventory</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              {totalItems}+ equipment items across {equipmentCategories.length} categories for comprehensive project delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-base-200 border-b border-base-300 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {["All", ...equipmentCategories].map((cat) => (
              <button
                key={cat}
                className={`btn btn-sm ${filter === cat ? "btn-primary" : "btn-ghost"}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Category</th>
                  <th className="text-center">Qty</th>
                  <th>Ownership</th>
                  <th>Condition</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td className="font-medium">{item.name}</td>
                    <td className="text-sm text-base-content/60">{item.category}</td>
                    <td className="text-center font-semibold text-primary">{item.quantity}</td>
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
