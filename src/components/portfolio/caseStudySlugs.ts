export const CASE_STUDY_SLUGS = [
  "joberos",
  "dukan",
  "apkamuaalij",
  "greenorum",
  "dental",
  "migration",
] as const;

export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number];

export function isCaseStudySlug(s: string): s is CaseStudySlug {
  return (CASE_STUDY_SLUGS as readonly string[]).includes(s);
}
