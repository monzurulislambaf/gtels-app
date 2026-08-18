"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/src/data/clients";
import { Globe, Heart, Building2 } from "lucide-react";

const typeIcons: Record<string, typeof Globe> = {
  international: Globe,
  ngo: Heart,
  government: Building2,
};

export default function ClientsContent() {
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
              Partners
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Selected <span className="text-primary">Clients</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Institutional experience with international organizations, NGOs, and development partners across Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Our Partners"
            title="Institutional Experience"
            description="Selected clients and project partners — not implying formal partnerships unless supported by project documentation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {clients.map((client, i) => {
              const Icon = typeIcons[client.type] || Globe;
              return (
                <ScrollReveal key={client.id} delay={i * 0.06}>
                  <div className="bg-base-200 rounded-xl p-6 card-hover h-full flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{client.name}</h3>
                      <span className="badge badge-ghost badge-xs mt-1 capitalize">{client.type}</span>
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
