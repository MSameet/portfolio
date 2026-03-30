"use client";

import { Ripple } from "@/components/ui/ripple";

import { MainSections } from "./MainSections";

export function PortfolioClient() {
  return (
    <>
      <MainSections
        heroBackground={
          <Ripple
            className="z-[1]"
            mainCircleSize={200}
            mainCircleOpacity={0.2}
            numCircles={8}
          />
        }
      />
      <div className="avail">
        <span className="dot" />
        Available for hire
      </div>
    </>
  );
}
