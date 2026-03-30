"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <Link href="/" className="nav-logo">
        sameet<span>.</span>
      </Link>
      <ul className={`nav-links${navOpen ? " nav-open" : ""}`}>
        <li>
          <Link
            href="/#about"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#stack"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Stack
          </Link>
        </li>
        <li>
          <Link
            href="/#projects"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href="/#experience"
            onClick={() => {
              setNavOpen(false);
            }}
          >
            Experience
          </Link>
        </li>
      </ul>
      <Link
        href="/#contact"
        className="nav-cta magnetic"
        onClick={() => {
          setNavOpen(false);
        }}
      >
        Let&apos;s Talk
      </Link>
      <button
        type="button"
        className="mob-toggle"
        aria-expanded={navOpen}
        aria-label="Menu"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
