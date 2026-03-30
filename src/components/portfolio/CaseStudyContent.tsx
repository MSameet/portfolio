"use client";

import { projects } from "@/data/projects";
import { CaseStudyNav } from "./CaseStudyNav";
import { CASE_STUDY_SLUGS, type CaseStudySlug } from "./caseStudySlugs";

const acc = { color: "var(--acc)" } as const;

type Props = {
  slug: CaseStudySlug;
};

export function CaseStudyContent({ slug }: Props) {
  const project = projects.find((item) => item.slug === slug);
  const caseStudy = project?.caseStudy;
  if (!project || !caseStudy) return null;

  const currentIndex = CASE_STUDY_SLUGS.indexOf(slug);
  const nextSlug =
    currentIndex >= 0 && currentIndex < CASE_STUDY_SLUGS.length - 1
      ? CASE_STUDY_SLUGS[currentIndex + 1]
      : undefined;
  const nextProject = nextSlug
    ? projects.find((item) => item.slug === nextSlug)
    : undefined;

  return (
    <>
      <div className="cs-hero">
        <div className="cs-tag">Case Study</div>
        <h1>
          {caseStudy.hero.titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < caseStudy.hero.titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="cs-sub">{caseStudy.hero.subtitle}</p>
        <div className="cs-meta-grid">
          {caseStudy.hero.meta.map((metaItem) => (
            <div className="cs-meta-item" key={`${metaItem.label}-${metaItem.value}`}>
              <div className="cs-meta-label">{metaItem.label}</div>
              <div className="cs-meta-val">
                {metaItem.href ? (
                  <a
                    href={metaItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={acc}
                  >
                    {metaItem.value}
                  </a>
                ) : (
                  metaItem.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {caseStudy.screenshot && (
        <div className="cs-screenshot">
          <div className="cs-browser">
            <div className="cs-browser-bar">
              <div className="mock-dot d1" />
              <div className="mock-dot d2" />
              <div className="mock-dot d3" />
              <span className="cs-browser-url">{caseStudy.screenshot.url}</span>
            </div>
            <div className="cs-browser-body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={caseStudy.screenshot.imageSrc}
                alt={caseStudy.screenshot.imageAlt}
                style={caseStudy.screenshot.imageStyle}
                onError={(e) => {
                  e.currentTarget.style.height = "300px";
                  e.currentTarget.style.background = "var(--bg3)";
                  e.currentTarget.alt = `Screenshot unavailable — visit ${caseStudy.screenshot?.url}`;
                }}
              />
            </div>
          </div>
        </div>
      )}

      {caseStudy.sections.map((section, sectionIndex) => (
        <div key={section.title}>
          <div className="cs-section">
            <h2>{section.title}</h2>
            {section.paragraph && <p>{section.paragraph}</p>}
            {section.intro && <p>{section.intro}</p>}

            {section.listItems && (
              <ul>
                {section.listItems.map((item, itemIndex) => (
                  <li key={`${item.label ?? "item"}-${itemIndex}`}>
                    {item.label ? (
                      <>
                        <strong>{item.label}:</strong> {item.text}
                      </>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            )}

            {section.techTags && (
              <div className="cs-tech-grid">
                {section.techTags.map((tag) => (
                  <span key={tag} className="cs-tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {section.impactCards && (
              <div className="cs-impact">
                {section.impactCards.map((impactCard) => (
                  <div
                    className="cs-impact-card"
                    key={`${impactCard.value}-${impactCard.label}`}
                  >
                    <div className="cs-impact-n">{impactCard.value}</div>
                    <div className="cs-impact-l">{impactCard.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {sectionIndex < caseStudy.sections.length - 1 && (
            <hr className="cs-divider" />
          )}
        </div>
      ))}

      <CaseStudyNav
        nextSlug={nextSlug}
        nextLabel={nextProject ? `Next: ${nextProject.title} →` : undefined}
      />
    </>
  );
}
