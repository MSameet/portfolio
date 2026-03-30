"use client";

/* eslint-disable @next/next/no-img-element */
import { Bot, GitBranch, Link2, Mail, Palette, Smartphone, Zap } from "lucide-react";
import type { ReactNode } from "react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

import { ProjectsCarousel } from "./ProjectsCarousel";

type MainSectionsProps = {
  heroBackground?: ReactNode;
};

const marqueeTech = [
  { label: "React", icon: "react" },
  { label: "Node.js", icon: "nodedotjs" },
  { label: "MongoDB", icon: "mongodb" },
  { label: "Express", icon: "express" },
  { label: "React Native", icon: "react" },
  { label: "Next.js", icon: "nextdotjs" },
  { label: "TypeScript", icon: "typescript" },
  { label: "Python", icon: "python" },
  { label: "PostgreSQL", icon: "postgresql" },
  { label: "Docker", icon: "docker" },
  { label: "Firebase", icon: "firebase" },
  { label: "RAG", icon: "langchain" },
  { label: "LLM Agents", icon: "anthropic" },
  { label: "AI Automation", icon: "ollama" },
  { label: "Hugging Face", icon: "huggingface" },
  { label: "PyTorch", icon: "pytorch" },
  { label: "TensorFlow", icon: "tensorflow" },
  { label: "ONNX", icon: "onnx" },
  { label: "Vector DBs", icon: "milvus" },
  { label: "Tailwind CSS", icon: "tailwindcss" },
  { label: "Supabase", icon: "supabase" },
  { label: "REST APIs", icon: "openapiinitiative" },
  { label: "Socket.io", icon: "socketdotio" },
] as const;

export function MainSections({ heroBackground }: MainSectionsProps = {}) {
  return (
    <>
      <div id="mainPage">
        <section className="hero" id="hero">
          <div className="hero-grid" />
          <div className="hero-orb orb1" />
          <div className="hero-orb orb2" />
          {heroBackground}
          <div className="hero-content">
            <BlurFade duration={0.5} delay={0}>
              <div className="hero-tag">
                Full-Stack Engineer
                <span className="badge">
                  <span className="dot" />
                  Open to work
                </span>
              </div>
            </BlurFade>
            <BlurFade duration={0.55} delay={0.06}>
              <h1>
                <span className="word">
                  <span className="char">I</span>
                </span>{" "}
                <span className="word">
                  <span className="char">build</span>
                </span>{" "}
                <span className="grad word">
                  <span className="char">digital</span>
                </span>{" "}
                <span className="grad word">
                  <span className="char">products</span>
                </span>{" "}
                <span className="word">
                  <span className="char">that</span>
                </span>{" "}
                <span className="word">
                  <span className="char">scale.</span>
                </span>
                <br />
                <span className="word">
                  <span className="char">With</span>
                </span>{" "}
                <span className="word">
                  <span className="char">code,</span>
                </span>{" "}
                <span className="word">
                  <span className="char">AI</span>
                </span>{" "}
                <span className="word">
                  <span className="char">&</span>
                </span>{" "}
                <span className="word">
                  <span className="char">intent.</span>
                </span>
              </h1>
            </BlurFade>
            <BlurFade duration={0.5} delay={0.12}>
              <p className="hero-desc">
                MERN stack engineer specializing in React Native mobile apps,
                Next.js platforms, and AI-powered automation. I&apos;ve shipped
                production apps used by thousands — from job platforms in Greece to
                healthcare systems serving 10,000+ doctors across Pakistan.
              </p>
            </BlurFade>
            <BlurFade duration={0.5} delay={0.18}>
              <div className="hero-actions">
                <a href="#projects" className="btn-p magnetic">
                  View My Work ↓
                </a>
                <a href="#contact" className="btn-s magnetic">
                  Get In Touch →
                </a>
              </div>
            </BlurFade>
          </div>
          <BlurFade duration={0.45} delay={0.22} className="scroll-ind">
            <span>Scroll</span>
            <div className="scroll-line" />
          </BlurFade>
        </section>

        <div className="marquee" aria-hidden>
          <Marquee
            className="border-0 bg-transparent p-0 [--duration:30s] [--gap:0px]"
            pauseOnHover
            repeat={4}
          >
            <span className="marquee-item">
              {marqueeTech.map((t) => (
                <span key={t.label} className="marquee-tech">
                  <img
                    className="marquee-tech-icon"
                    src={`https://cdn.simpleicons.org/${t.icon}`}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="text-2xl leading-none">{t.label}</span>
                </span>
              ))}
            </span>
          </Marquee>
        </div>

        <section id="about" className="bg-alt">
          <div className="about-grid">
            <BlurFade inView duration={0.55} className="about-text">
              <div className="slbl">About</div>
              <div className="stitle">
                Engineer who ships.
                <br />
                Builder who cares.
              </div>
              <p>
                I&apos;m <strong>Muhammad Sameet Ul Hassan</strong>, a
                full-stack software engineer based in{" "}
                <strong>Lahore, Pakistan</strong> with deep expertise across the
                MERN stack, React Native mobile development, and AI-powered
                automation workflows.
              </p>
              <p>
                I&apos;ve shipped production platforms used across{" "}
                <strong>Greece, Pakistan, and international markets</strong> —
                from AI-powered job matching platforms to e-commerce
                infrastructure serving thousands of sellers, and healthcare
                systems connecting patients with 10,000+ doctors.
              </p>
              <p>
                Currently building at <strong>Fexart Studios</strong>, a
                Dubai-based digital agency where I lead development of custom
                websites, AI integrations, and ERP systems for healthcare
                clients in the US and UK markets.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.08} duration={0.55}>
              <div className="stats-row">
                <div className="stat">
                  <div className="stat-n">4+</div>
                  <div className="stat-l">Years Exp</div>
                </div>
                <div className="stat">
                  <div className="stat-n">25+</div>
                  <div className="stat-l">Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-n">15+</div>
                  <div className="stat-l">Clients</div>
                </div>
              </div>
              <div className="facts">
                <div className="facts-title">Quick Facts</div>
                <div className="fact-row">
                  <span>Location</span>
                  <span>Lahore, PK</span>
                </div>
                <div className="fact-row">
                  <span>Timezone</span>
                  <span>UTC+5 (PKT)</span>
                </div>
                <div className="fact-row">
                  <span>Languages</span>
                  <span>English, Urdu</span>
                </div>
                <div className="fact-row">
                  <span>Work Style</span>
                  <span>Remote / Hybrid</span>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="stack">
          <BlurFade inView className="slbl">
            Tech Stack
          </BlurFade>
          <BlurFade inView delay={0.04} className="stitle">
            Tools I build with daily.
          </BlurFade>
          <div className="stack-grid">
            <BlurFade inView delay={0} duration={0.5} className="stack-grp">
              <div className="stack-grp-t">Frontend</div>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Next.js 14</span>
                <span className="tag">React Native</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">Framer Motion</span>
                <span className="tag">GSAP</span>
                <span className="tag">Redux</span>
                <span className="tag">Expo</span>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.06} duration={0.5} className="stack-grp">
              <div className="stack-grp-t">Backend</div>
              <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Mongoose</span>
                <span className="tag">Supabase</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">REST APIs</span>
                <span className="tag">JWT Auth</span>
                <span className="tag">Socket.io</span>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.12} duration={0.5} className="stack-grp">
              <div className="stack-grp-t">AI & Automation</div>
              <div className="tags">
                <span className="tag">OpenAI API</span>
                <span className="tag">AI Agents</span>
                <span className="tag">Cursor IDE</span>
                <span className="tag">Prompt Engineering</span>
                <span className="tag">Web Scraping</span>
                <span className="tag">Workflow Automation</span>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.18} duration={0.5} className="stack-grp">
              <div className="stack-grp-t">DevOps & Tools</div>
              <div className="tags">
                <span className="tag">Git & GitHub</span>
                <span className="tag">Vercel</span>
                <span className="tag">AWS</span>
                <span className="tag">Docker</span>
                <span className="tag">CI/CD</span>
                <span className="tag">Figma</span>
                <span className="tag">Postman</span>
              </div>
            </BlurFade>
          </div>
        </section>

        <ProjectsCarousel />

        <section id="services">
          <BlurFade inView className="slbl">
            What I Do
          </BlurFade>
          <BlurFade inView delay={0.04} className="stitle">
            End-to-end engineering.
          </BlurFade>
          <div className="svc-grid">
            <BlurFade inView delay={0} duration={0.5} className="svc" data-num="01">
              <div className="svc-icon" aria-hidden>
                <Zap />
              </div>
              <h3>Full-Stack Web Apps</h3>
              <p>
                Production-grade web applications built with Next.js, React,
                Node.js, and MongoDB. From SaaS dashboards to multi-tenant
                platforms — architected for scale.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.06} duration={0.5} className="svc" data-num="02">
              <div className="svc-icon" aria-hidden>
                <Smartphone />
              </div>
              <h3>Mobile App Development</h3>
              <p>
                Cross-platform mobile apps with React Native & Expo. Native
                performance, single codebase. From splash screens to App Store
                deployment.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.12} duration={0.5} className="svc" data-num="03">
              <div className="svc-icon" aria-hidden>
                <Bot />
              </div>
              <h3>AI Automation & Agents</h3>
              <p>
                AI-powered agents, automated content pipelines, migration bots,
                and intelligent systems that replace manual workflows with smart
                automation.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.18} duration={0.5} className="svc" data-num="04">
              <div className="svc-icon" aria-hidden>
                <Palette />
              </div>
              <h3>Design & Migration</h3>
              <p>
                Custom website design with modern stacks. Automated migration
                tools that extract, transform, and rebuild sites with precision.
              </p>
            </BlurFade>
          </div>
        </section>

        <section id="experience" className="bg-alt">
          <BlurFade inView className="slbl">
            Experience
          </BlurFade>
          <BlurFade inView delay={0.04} className="stitle">
            Where I&apos;ve contributed.
          </BlurFade>
          <div className="timeline">
            <BlurFade inView delay={0} duration={0.55} className="tl-item">
              <div className="tl-date">2023 — Present</div>
              <div className="tl-role">
                Full-Stack Developer & Technical Lead
              </div>
              <div className="tl-co">Fexart Studios — Dubai, UAE (Remote)</div>
              <ul className="tl-desc">
                <li>
                  Leading development of dental clinic platforms for US/UK
                  market clients
                </li>
                <li>
                  Built AI-powered front desk agent and automated appointment
                  systems
                </li>
                <li>
                  Architected website migration engine using Cursor AI and
                  Next.js
                </li>
                <li>
                  Developed custom ERP systems, SEO tooling, and Google Ads
                  integrations
                </li>
              </ul>
            </BlurFade>
            <BlurFade inView delay={0.08} duration={0.55} className="tl-item">
              <div className="tl-date">2022 — 2023</div>
              <div className="tl-role">MERN Stack Developer</div>
              <div className="tl-co">Contract & Product Work — Lahore</div>
              <ul className="tl-desc">
                <li>
                  Developed Joberos AI job matching platform serving Greek
                  market
                </li>
                <li>
                  Contributed to Dukan.pk e-commerce infrastructure and seller
                  dashboard
                </li>
                <li>
                  Built Greenorum environmental social network from ground up
                </li>
                <li>
                  Worked on Apka Muaalij healthcare platform features and
                  integrations
                </li>
              </ul>
            </BlurFade>
            <BlurFade inView delay={0.16} duration={0.55} className="tl-item">
              <div className="tl-date">2021 — 2022</div>
              <div className="tl-role">Junior Full-Stack Developer</div>
              <div className="tl-co">Freelance & Open Source</div>
              <ul className="tl-desc">
                <li>
                  Built React Native mobile applications with Expo for iOS and
                  Android
                </li>
                <li>
                  Created boilerplate templates for rapid MERN and Next.js
                  projects
                </li>
                <li>
                  Developed REST APIs with authentication and comprehensive error
                  handling
                </li>
              </ul>
            </BlurFade>
          </div>
        </section>

        <section id="contact">
          <BlurFade
            inView
            className="slbl"
            style={{ justifyContent: "center" }}
          >
            Get In Touch
          </BlurFade>
          <BlurFade inView delay={0.05} className="ct-big">
            Let&apos;s build something
            <br />
            <span className="grad">extraordinary</span> together.
          </BlurFade>
          <BlurFade inView delay={0.1} className="ct-sub">
            I&apos;m open to full-time remote roles, freelance projects, or
            interesting collaborations. Let&apos;s talk.
          </BlurFade>
          <BlurFade inView delay={0.14} className="ct-actions">
            <a href="mailto:sameet@email.com" className="btn-p magnetic">
              Send an Email →
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sameet-ul-hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-s magnetic"
            >
              LinkedIn Profile →
            </a>
          </BlurFade>
          <BlurFade inView delay={0.18} className="ct-socials">
            <a
              href="https://github.com/MSameet"
              target="_blank"
              rel="noopener noreferrer"
              className="soc"
            >
              <GitBranch aria-hidden />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sameet-ul-hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="soc"
            >
              <Link2 aria-hidden />
              LinkedIn
            </a>
            <a href="mailto:sameet@email.com" className="soc">
              <Mail aria-hidden />
              Email
            </a>
          </BlurFade>
        </section>

        <footer>
          <p>© 2026 Muhammad Sameet Ul Hassan. Built with intent.</p>
          <p>Lahore, Pakistan · UTC+5</p>
        </footer>
      </div>
    </>
  );
}
