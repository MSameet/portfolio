"use client";

import Link from "next/link";
import { CaseStudyContent } from "./CaseStudyContent";
import type { CaseStudySlug } from "./caseStudySlugs";

export function CaseStudyPage({ slug }: { slug: CaseStudySlug }) {
  return (
    <div className="case-study-page">
      <nav className="case-study-topnav">
        <Link href="/" className="case-study-back">
          ← Back to Portfolio
        </Link>
      </nav>
      <main className="case-study-main">
        <CaseStudyContent slug={slug} />
      </main>
    </div>
  );
}
