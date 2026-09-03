"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { teamStructure } from "@/src/data/team";
import { Users, UserCog, Layers } from "lucide-react";

export default function TeamContent() {
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
              Our People
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Approximately 100 skilled personnel across corporate, engineering, technical, and field operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Users, value: 100, label: "Total Personnel" },
              { icon: UserCog, value: 15, label: "Corporate Staff" },
              { icon: Layers, value: 8, label: "Departments/Zones" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.label} delay={i * 0.1}>
                  <div className="text-center">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <AnimatedCounter value={stat.value} className="text-3xl font-bold text-primary" />
                    <div className="text-sm text-base-content/60 mt-1">{stat.label}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workforce Distribution */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Workforce"
            title="Workforce Distribution"
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {teamStructure.workforce.map((item, i) => (
                <ScrollReveal key={item.category} delay={i * 0.04}>
                  <div className="flex items-center gap-4 bg-base-200 rounded-lg p-4">
                    <div className="w-40 sm:w-56 text-sm font-medium text-base-content/80 shrink-0">{item.category}</div>
                    <div className="flex-1 h-3 bg-base-300 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.count / 93) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                      />
                    </div>
                    <div className="text-lg font-bold text-primary w-10 text-right">{item.count}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 lg:py-28 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Structure"
            title="Organizational Structure"
          />
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary text-primary-content px-6 py-3 rounded-xl font-semibold text-lg">
                  {teamStructure.proprietor}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamStructure.departments.map((dept) => (
                  <div key={dept.name} className="bg-base-100 rounded-xl p-6 border border-base-300 card-hover">
                    <h3 className="font-semibold text-base mb-3 text-primary">{dept.name}</h3>
                    <ul className="space-y-2">
                      {dept.roles.map((role) => (
                        <li key={role} className="text-sm text-base-content/70 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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

      {/* Central Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="Central Team"
            title="Key Personnel"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {teamStructure.centralTeam.map((role, i) => (
              <ScrollReveal key={role} delay={i * 0.05}>
                <div className="bg-base-200 rounded-xl p-4 flex items-center gap-3 card-hover">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-semibold text-sm">
                    {role.charAt(0)}
                  </div>
                  <span className="text-sm font-medium">{role}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WASH Implementation Team */}
      <section className="py-20 lg:py-28 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="WASH Team"
            title="WASH Implementation Structure"
          />
          <div className="max-w-xl mx-auto">
            {teamStructure.washImplementation.map((role, i) => (
              <ScrollReveal key={role} delay={i * 0.08}>
                <div className="flex items-start gap-4 pb-4 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    {i < teamStructure.washImplementation.length - 1 && (
                      <div className="w-0.5 h-8 bg-primary mt-1" />
                    )}
                  </div>
                  <div className="pt-1">
                    <span className="text-sm font-medium">{role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
