import { projects } from "@/data/projects";

export type CaseStudySlug = (typeof projects)[number]["slug"];

export const CASE_STUDY_SLUGS = projects
  .filter((project) => Boolean(project.caseStudy))
  .map((project) => project.slug as CaseStudySlug);

export function isCaseStudySlug(s: string): s is CaseStudySlug {
  return CASE_STUDY_SLUGS.includes(s as CaseStudySlug);
}
