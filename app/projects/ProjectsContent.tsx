"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, projectStats } from "@/src/data/projects";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const years = ["All", ...projectStats.years.map(String)];
const types = ["All", "WASH Infrastructure", "Solar WASH", "Water Treatment"];

export default function ProjectsContent() {
  const [yearFilter, setYearFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered = projects.filter((p) => {
    if (yearFilter !== "All" && String(p.year) !== yearFilter) return false;
    if (typeFilter !== "All" && p.projectType !== typeFilter) return false;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral text-neutral-content py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/gtels-proj-hero/1920/600"
            alt="GTELS project implementation"
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
              Our Work
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Project <span className="text-primary">Experience</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Documented WASH, construction, and engineering projects delivered for international organizations and development partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-12 bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { value: 112, suffix: ".18M", label: "BDT Total Value" },
              { value: 8, suffix: "", label: "Projects" },
              { value: 150, suffix: "+", label: "Deep Tubewells" },
              { value: 30, suffix: "+", label: "Hand Tubewells" },
              { value: 3, suffix: "", label: "DEWATS Facilities" },
              { value: 5, suffix: "", label: "Project Years" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div className="text-center p-3 bg-base-100 rounded-lg">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-xl font-bold text-primary" />
                  <div className="text-xs text-base-content/60 mt-1">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-base-100 border-b border-base-300 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label className="text-xs font-semibold text-base-content/60 mr-2">Year:</label>
              <div className="join">
                {years.map((y) => (
                  <button
                    key={y}
                    className={`join-item btn btn-sm ${yearFilter === y ? "btn-primary" : "btn-ghost"}`}
                    onClick={() => setYearFilter(y)}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-base-content/60 mr-2">Type:</label>
              <div className="join">
                {types.map((t) => (
                  <button
                    key={t}
                    className={`join-item btn btn-sm ${typeFilter === t ? "btn-primary" : "btn-ghost"}`}
                    onClick={() => setTypeFilter(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.08}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div className="card bg-base-100 shadow-sm border border-base-300/50 card-hover h-full group">
                    <figure className="relative h-48 overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/gtels-p-${project.id}/500/300`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`badge badge-sm ${
                          project.status === "completed" ? "badge-success" :
                          project.status === "ongoing" ? "badge-warning" :
                          "badge-info"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="badge badge-sm badge-ghost bg-black/50 text-white border-none">
                          {project.projectType}
                        </span>
                      </div>
                    </figure>
                    <div className="card-body p-5">
                      <h3 className="card-title text-base leading-snug">{project.title}</h3>
                      <p className="text-sm text-base-content/60">{project.client}</p>
                      <p className="text-xs text-base-content/50 mt-1 line-clamp-2">{project.description}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-base-300/50">
                        <div className="flex items-center gap-3 text-xs text-base-content/50">
                          <span>{project.year}</span>
                          {project.contractValue && (
                            <>
                              <span>•</span>
                              <span className="font-medium text-primary">{project.contractValue}</span>
                            </>
                          )}
                        </div>
                        <ExternalLink className="w-4 h-4 text-base-content/30 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-base-content/50">
              No projects match the current filters.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
