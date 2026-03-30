"use client";

import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect } from "react";

import { BlurFade } from "@/components/ui/blur-fade";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";

export function ProjectsCarousel() {
  const router = useRouter();
  const stopCard = (e: MouseEvent) => e.stopPropagation();
  const goCase = (slug: string) => {
    router.push(`/case-study/${slug}`);
  };

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("#projectsTrack .p-card");
    const onMove = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      const me = e as globalThis.MouseEvent;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${me.clientX - rect.left}px`);
      card.style.setProperty("--my", `${me.clientY - rect.top}px`);
    };
    cards.forEach((c) => c.addEventListener("mousemove", onMove));
    return () => {
      cards.forEach((c) => c.removeEventListener("mousemove", onMove));
    };
  }, []);

  return (
    <section id="projects" className="bg-alt">
      <BlurFade inView className="slbl">
        Selected Work
      </BlurFade>
      <BlurFade inView delay={0.04} className="stitle">
        Projects I&apos;ve shipped.
      </BlurFade>

      <BlurFade inView delay={0.06} duration={0.55} className="w-full">
        <div
          id="projectsTrack"
          className="projects-carousel-wrap"
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
            aria-label="Project carousel"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem
                  key={project.slug}
                  className="basis-1/2 pl-2 md:pl-4"
                >
                  <div className="pb-1 pt-1">
                    <ProjectCard
                      project={project}
                      onGoCase={goCase}
                      onStopCard={stopCard}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="mt-7" />
          </Carousel>
        </div>
      </BlurFade>
    </section>
  );
}
