"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { company } from "@/src/data/company";
import { teamStructure } from "@/src/data/team";
import { zones } from "@/src/data/offices";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutContent() {
  return (
    <>
      {/* Vision & Mission */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-base-200 rounded-2xl p-8 lg:p-10 h-full">
                <h2 className="text-xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-base-content/70 leading-relaxed">{company.vision}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-base-200 rounded-2xl p-8 lg:p-10 h-full">
                <h2 className="text-xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-base-content/70 leading-relaxed">{company.mission}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="py-20 lg:py-28 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="What We Do"
            title="Relevant Areas of Work"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Engineering Works & Construction",
              "WASH Infrastructure Delivery",
              "Deep Tubewell Drilling",
              "Logistics & Supply Chain",
              "Institutional Procurement",
              "Community Development",
              "Project Management & Supervision",
              "Quality Assurance & HSE",
              "Technology Installation",
              "Solar-Powered Water Systems",
              "Donor-Oriented Documentation",
              "Last-Mile Delivery",
            ].map((area, i) => (
              <ScrollReveal key={area} delay={i * 0.05}>
                <div className="bg-base-100 rounded-xl p-5 border border-base-300 text-sm font-medium text-base-content/80 card-hover">
                  {area}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="By the Numbers"
            title="GTELS at a Glance"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { value: 100, suffix: "+", label: "Personnel" },
              { value: 8, suffix: "", label: "Field Offices" },
              { value: 30000, suffix: "+", label: "Sq. Ft. Warehouse" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center p-6 bg-base-200 rounded-xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-4xl font-bold text-primary" />
                  <div className="mt-2 text-sm text-base-content/60">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 lg:py-28 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Organization"
            title="Organizational Structure"
          />
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary text-primary-content px-6 py-3 rounded-xl font-semibold">
                  {teamStructure.proprietor}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamStructure.departments.map((dept) => (
                  <div key={dept.name} className="bg-base-100 rounded-xl p-5 border border-base-300">
                    <h3 className="font-semibold text-sm mb-3 text-primary">{dept.name}</h3>
                    <ul className="space-y-1">
                      {dept.roles.map((role) => (
                        <li key={role} className="text-xs text-base-content/60 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* National Reach */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="National Reach"
            title="Bangladesh-Wide Presence"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {zones.map((zone, i) => (
              <ScrollReveal key={zone.name} delay={i * 0.06}>
                <div className="bg-base-200 rounded-xl p-5 card-hover">
                  <h3 className="font-semibold text-sm mb-2">{zone.name}</h3>
                  <div className="text-xs text-base-content/60 space-y-1">
                    <div>{zone.offices} offices</div>
                    <div>{zone.warehouse}</div>
                    <div className="text-primary/80">{zone.coverage}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="btn btn-outline btn-primary gap-2">
              View All Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
