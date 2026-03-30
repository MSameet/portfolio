"use client";

import Image from "next/image";
import type { MouseEvent } from "react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onGoCase: (slug: string) => void;
  onStopCard: (e: MouseEvent) => void;
};

export function ProjectCard({ project, onGoCase, onStopCard }: ProjectCardProps) {
  const imgSrc = project.mock.kind === "image" ? project.mock.src : null;

  return (
    <div
      className={`p-card${project.featured ? " p-card--featured" : ""}`}
      onClick={() => onGoCase(project.slug)}
    >
      <div className="p-img-wrap">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            className="p-img"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={project.featured}
          />
        )}
        <div className="p-img-overlay" />
        <div className="p-num">{project.num}</div>
        {project.featured && (
          <div className="p-featured-badge">Featured</div>
        )}
      </div>

      <div className="p-info">
        <div className="p-meta">{project.meta}</div>
        <h3 className="p-title">{project.title}</h3>
        <p className="p-desc">{project.description}</p>
        <div className="p-tags">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="p-links">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onStopCard}
            >
              Live Site ↗
            </a>
          ) : null}
          <a
            role="button"
            tabIndex={0}
            onClick={(e) => {
              onStopCard(e);
              onGoCase(project.slug);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onGoCase(project.slug);
              }
            }}
          >
            Case Study →
          </a>
        </div>
      </div>
    </div>
  );
}
