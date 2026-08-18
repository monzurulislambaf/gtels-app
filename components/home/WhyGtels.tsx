"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/src/data/company";
import {
  FileCheck,
  Layers,
  MapPin,
  Warehouse,
  Users,
  Droplets,
  Shield,
  CalendarCheck,
} from "lucide-react";

const icons = [FileCheck, Layers, MapPin, Warehouse, Users, Droplets, Shield, CalendarCheck];

export default function WhyGtels() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-content relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Why GTELS"
          title="The GTELS Edge"
          description="Evidence-based capabilities that set GTELS apart in engineering, WASH, and infrastructure delivery."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {company.edge.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors h-full">
                  <Icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-content/70 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
