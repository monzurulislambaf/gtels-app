"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/src/data/projects";

export default function ProjectPreview() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Project Experience"
          title="Documented Track Record"
          description="Proven WASH and engineering projects delivered for international organizations, NGOs, and development partners."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <div className="card bg-base-100 shadow-sm border border-base-300 card-hover h-full group">
                  <figure className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
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
                  </figure>
                  <div className="card-body p-5">
                    <h3 className="card-title text-sm leading-snug">{project.title}</h3>
                    <p className="text-xs text-base-content/60 mt-1 line-clamp-2">{project.client}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs font-medium text-primary">{project.year}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-base-content/30 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects" className="btn btn-primary gap-2">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
