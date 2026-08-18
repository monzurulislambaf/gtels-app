"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/src/data/services";

export default function CoreCapabilities() {
  return (
    <section className="py-20 lg:py-28 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Comprehensive Engineering & WASH Services"
          description="From deep tubewell drilling to national-scale logistics, GTELS delivers end-to-end infrastructure solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="card bg-base-100 shadow-sm border border-base-300/50 card-hover h-full">
                  <div className="card-body p-6 lg:p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="card-title text-lg">{service.title}</h3>
                    <p className="text-sm text-base-content/60 leading-relaxed mt-1">
                      {service.shortDescription}
                    </p>
                    <div className="card-actions mt-4">
                      <a
                        href={`/services#${service.id}`}
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
