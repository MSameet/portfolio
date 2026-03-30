import type { CSSProperties } from "react";

export type ProjectImageMock = {
  kind: "image";
  src: string;
  alt: string;
  style?: CSSProperties;
  /** Shown if the image fails to load */
  fallbackEmoji?: string;
};

export type ProjectPlaceholderMock = {
  kind: "placeholder";
  emoji: string;
  label: string;
};

export type ProjectCodeMock = {
  kind: "code";
};

export type ProjectMock =
  | ProjectImageMock
  | ProjectPlaceholderMock
  | ProjectCodeMock;

export type Project = {
  slug: string;
  num: string;
  urlBar: string;
  meta: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  featured: boolean;
  mock: ProjectMock;
};

export const projects: Project[] = [
  {
    slug: "joberos",
    num: "01",
    urlBar: "joberos.com",
    meta: "SaaS / AI Job Platform — Greece",
    title: "Joberos",
    description:
      "AI-powered job platform that matches candidates with opportunities using smart algorithms. Features mobile apps on both iOS and Android, serving the Greek hospitality and retail market with 3,800+ active job listings.",
    tags: [
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "AI Matching",
      "PWA",
    ],
    liveUrl: "https://joberos.com",
    featured: true,
    mock: {
      kind: "image",
      src: "https://joberos.com/_next/image?url=%2Fassets%2Fhero-image.png&w=1920&q=80",
      alt: "Joberos",
      fallbackEmoji: "🎯",
    },
  },
  {
    slug: "dukan",
    num: "02",
    urlBar: "dukan.pk",
    meta: "Fintech / E-Commerce — Pakistan",
    title: "Dukan.pk",
    description:
      "Digital banking and e-commerce infrastructure connecting retailers and manufacturers with embedded financial services, payments, logistics, and marketplace.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Payment APIs",
      "Microservices",
      "AWS",
    ],
    liveUrl: "https://www.dukan.pk",
    featured: false,
    mock: {
      kind: "image",
      src: "https://assets.dukan.pk/assets/wnassets/new/images/onlineseller.png",
      alt: "Dukan.pk",
      fallbackEmoji: "🏪",
    },
  },
  {
    slug: "apkamuaalij",
    num: "03",
    urlBar: "apkamuaalij.com",
    meta: "HealthTech / Telemedicine — Pakistan",
    title: "Apka Muaalij",
    description:
      "Pakistan\u2019s healthcare platform connecting patients with 10,000+ doctors across 25+ specialties. Video consultations, clinic bookings, lab tests, and surgeries.",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Video SDK",
      "Payment Gateway",
      "SEO",
    ],
    liveUrl: "https://apkamuaalij.com",
    featured: false,
    mock: {
      kind: "image",
      src: "https://cdn.apkamuaalij.com/AKM-New-Homepage/Clinic_Consult.png",
      alt: "Apka Muaalij",
      fallbackEmoji: "🏥",
    },
  },
  {
    slug: "greenorum",
    num: "04",
    urlBar: "greenorum.com",
    meta: "Social Network / Climate Tech — Global",
    title: "Greenorum",
    description:
      "A purpose-driven social network for climate activists worldwide. Full platform with feeds, articles, groups, events, and organization profiles.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Cloud Storage",
      "REST API",
    ],
    liveUrl: "https://www.greenorum.com",
    featured: false,
    mock: {
      kind: "image",
      src: "https://www.greenorum.com/assets/svgs/logo.svg",
      alt: "Greenorum",
      fallbackEmoji: "🌍",
      style: {
        width: "60%",
        height: "auto",
        objectFit: "contain",
        padding: 40,
        opacity: 0.6,
      },
    },
  },
  {
    slug: "dental",
    num: "05",
    urlBar: "brilliantsmiles.com",
    meta: "Healthcare / AI Agent — US & UK",
    title: "Dental Clinic Platform",
    description:
      "Full-service dental clinic websites with admin dashboards, patient booking, and an AI front desk agent that handles patient intake autonomously.",
    tags: [
      "Next.js",
      "OpenAI API",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "AI Agent",
    ],
    featured: false,
    mock: {
      kind: "placeholder",
      emoji: "🦷",
      label: "Dental Platform",
    },
  },
  {
    slug: "migration",
    num: "06",
    urlBar: "migration-engine",
    meta: "Developer Tool / AI Automation",
    title: "Website Migration Engine",
    description:
      "AI-driven site migration tool that crawls existing websites, extracts content into structured JSON, and rebuilds them in Next.js with luxury medical aesthetics — automating weeks of manual redesign work.",
    tags: [
      "Next.js 14",
      "Cursor AI",
      "GSAP",
      "Framer Motion",
      "Lenis",
      "Puppeteer",
    ],
    featured: true,
    mock: { kind: "code" },
  },
];
