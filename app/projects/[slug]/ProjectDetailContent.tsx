"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2, MapPin, FileText, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Project } from "@/src/data/projects";
import { projects } from "@/src/data/projects";

export default function ProjectDetailContent({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral text-neutral-content py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`https://picsum.photos/seed/gtels-pd-${project.id}/1920/600`}
            alt={project.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-primary-content/60 hover:text-primary-content transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className={`badge mb-4 ${
              project.status === "completed" ? "badge-success" :
              project.status === "ongoing" ? "badge-warning" : "badge-info"
            }`}>
              {project.status}
            </span>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-content/70">
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" />{project.client}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{project.year}</span>
              {project.location && <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{project.location}</span>}
              {project.contractValue && <span className="font-semibold text-accent">{project.contractValue}</span>}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-base-content/70 leading-relaxed text-lg">{project.description}</p>
            </div>
          </ScrollReveal>

          {project.scope && project.scope.length > 0 && (
            <ScrollReveal delay={0.1}>
              <div className="bg-base-200 rounded-2xl p-8 mb-12">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Project Scope
                </h3>
                <div className="space-y-3">
                  {project.scope.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-base-content/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <div className="bg-base-200 rounded-xl p-5 text-center">
                <div className="text-sm text-base-content/60">Project Type</div>
                <div className="font-semibold mt-1">{project.projectType}</div>
              </div>
              <div className="bg-base-200 rounded-xl p-5 text-center">
                <div className="text-sm text-base-content/60">Year</div>
                <div className="font-semibold mt-1">{project.year}</div>
              </div>
              <div className="bg-base-200 rounded-xl p-5 text-center">
                <div className="text-sm text-base-content/60">Contract Value</div>
                <div className="font-semibold mt-1 text-primary">{project.contractValue || "Information to be updated"}</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Related Projects */}
          <ScrollReveal delay={0.2}>
            <h3 className="font-semibold text-lg mb-6">Related Projects</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`} className="block">
                  <div className="bg-base-200 rounded-xl p-4 card-hover">
                    <h4 className="font-semibold text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-base-content/50">{p.client} • {p.year}</p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
