import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import { generatePageMetadata } from "@/src/lib/seo";
import { ProjectSchema } from "@/components/seo/JsonLd";
import ProjectDetailContent from "./ProjectDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return generatePageMetadata({
    title: project.title,
    description: project.description || `${project.title} — GTELS project for ${project.client}`,
    path: `/projects/${project.slug}`,
    keywords: ["project", project.client, "WASH", "engineering", project.title],
  });
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <ProjectSchema
        title={project.title}
        description={project.description || `${project.title} — GTELS project`}
        client={project.client}
        datePublished={String(project.year)}
        path={`/projects/${project.slug}`}
      />
      <ProjectDetailContent project={project} />
    </>
  );
}
