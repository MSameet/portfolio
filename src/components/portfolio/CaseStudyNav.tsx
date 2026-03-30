"use client";

import Link from "next/link";
import type { CaseStudySlug } from "./caseStudySlugs";

type Props = {
  nextSlug?: CaseStudySlug;
  nextLabel?: string;
};

export function CaseStudyNav({ nextSlug, nextLabel }: Props) {
  return (
    <div className="cs-nav">
      <Link href="/#projects">← Back to All Projects</Link>
      {nextSlug && nextLabel ? (
        <Link href={`/case-study/${nextSlug}`}>{nextLabel}</Link>
      ) : null}
    </div>
  );
}
