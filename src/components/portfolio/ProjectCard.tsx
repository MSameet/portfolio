"use client";

import type { MouseEvent } from "react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onGoCase: (slug: string) => void;
  onStopCard: (e: MouseEvent) => void;
};

function MockContent({
  project,
}: {
  project: Project;
}) {
  const { mock } = project;

  if (mock.kind === "image") {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={mock.src}
        alt={mock.alt}
        style={mock.style}
        onError={(e) => {
          const p = e.currentTarget.parentElement;
          const icon = mock.fallbackEmoji ?? "🎯";
          if (p)
            p.innerHTML = `<div class="mock-placeholder"><span class="icon">${icon}</span><span class="label">${project.title}</span></div>`;
        }}
      />
    );
  }

  if (mock.kind === "placeholder") {
    return (
      <div className="mock-placeholder">
        <span className="icon">{mock.emoji}</span>
        <span className="label">{mock.label}</span>
      </div>
    );
  }

  return (
    <div className="mock-placeholder mock-placeholder--code">
      <span className="mock-code-line">
        <span className="tok-kw">const</span> engine ={" "}
        <span className="tok-fn">crawl</span>(url);
      </span>
      <span className="mock-code-line">
        <span className="tok-kw">const</span> data ={" "}
        <span className="tok-kw">await</span> engine.
        <span className="tok-fn">extract</span>();
      </span>
      <span className="mock-code-line">
        <span className="tok-fn">rebuild</span>(data,{" "}
        <span className="tok-str">&quot;next.js&quot;</span>);
      </span>
      <span className="mock-code-line tok-dim">{"// weeks → hours ✓"}</span>
    </div>
  );
}

export function ProjectCard({ project, onGoCase, onStopCard }: ProjectCardProps) {
  const cardClass = project.featured ? "p-card p-card--featured" : "p-card";

  return (
    <div className={cardClass} onClick={() => onGoCase(project.slug)}>
      <div className="p-visual">
        <div className="p-mockup">
          <div className="mock-bar">
            <div className="mock-dot d1" />
            <div className="mock-dot d2" />
            <div className="mock-dot d3" />
            <span className="mock-url">{project.urlBar}</span>
          </div>
          <div className="mock-content">
            <MockContent project={project} />
          </div>
        </div>
      </div>
      <div className="p-info">
        <div className="p-num">{project.num}</div>
        <div className="p-meta">{project.meta}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="p-tags">
          {project.tags.map((t) => (
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
