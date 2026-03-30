import { CaseStudyPage } from "@/components/portfolio/CaseStudyPage";
import {
  CASE_STUDY_SLUGS,
  isCaseStudySlug,
} from "@/components/portfolio/caseStudySlugs";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export default function CaseStudyRoutePage({
  params,
}: {
  params: { slug: string };
}) {
  if (!isCaseStudySlug(params.slug)) notFound();
  return <CaseStudyPage slug={params.slug} />;
}
