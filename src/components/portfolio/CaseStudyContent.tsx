"use client";

import { CaseStudyNav } from "./CaseStudyNav";
import type { CaseStudySlug } from "./caseStudySlugs";

const acc = { color: "var(--acc)" } as const;

type Props = {
  slug: CaseStudySlug;
};

export function CaseStudyContent({ slug }: Props) {
  return (
    <>
      {slug === "joberos" && (
        <>
          <div className="cs-hero">
            <div className="cs-tag">Case Study</div>
            <h1>
              Joberos — AI-Powered
              <br />
              Job Matching Platform
            </h1>
            <p className="cs-sub">
              Built the full-stack web and mobile platform for a Greek startup
              that uses AI algorithms to match candidates with hospitality,
              tourism, and retail opportunities — eliminating the need for resumes
              and job searching.
            </p>
            <div className="cs-meta-grid">
              <div className="cs-meta-item">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">Joberos (Greece)</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Industry</div>
                <div className="cs-meta-val">HR Tech / SaaS</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Role</div>
                <div className="cs-meta-val">Full-Stack Developer</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Timeline</div>
                <div className="cs-meta-val">6+ Months</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Website</div>
                <div className="cs-meta-val">
                  <a
                    href="https://joberos.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={acc}
                  >
                    joberos.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-screenshot">
            <div className="cs-browser">
              <div className="cs-browser-bar">
                <div className="mock-dot d1" />
                <div className="mock-dot d2" />
                <div className="mock-dot d3" />
                <span className="cs-browser-url">https://joberos.com</span>
              </div>
              <div className="cs-browser-body">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://joberos.com/_next/image?url=%2Fassets%2Fhero-image.png&w=1920&q=90"
                  alt="Joberos Hero"
                  onError={(e) => {
                    e.currentTarget.style.height = "300px";
                    e.currentTarget.style.background = "var(--bg3)";
                    e.currentTarget.alt =
                      "Screenshot unavailable — visit joberos.com";
                  }}
                />
              </div>
            </div>
          </div>
          <div className="cs-section">
            <h2>The Challenge</h2>
            <p>
              The Greek hospitality and retail sectors were struggling with
              traditional hiring — candidates flooded job boards with resumes,
              employers wasted hours sifting through unqualified applicants, and
              the matching process was slow and inefficient. Joberos needed a
              platform that could intelligently connect the right candidates with
              the right roles automatically.
            </p>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Technical Architecture</h2>
            <p>
              Built as a modern full-stack application with a focus on
              performance, SEO, and cross-platform availability:
            </p>
            <ul>
              <li>
                <strong>Frontend:</strong> Next.js with server-side rendering
                for SEO-optimized landing pages and fast initial loads.
                Component-driven architecture with reusable UI library.
              </li>
              <li>
                <strong>Mobile:</strong> React Native application deployed to both
                iOS App Store and Google Play Store as a TWA (Trusted Web Activity)
                and native app, ensuring seamless cross-platform experience.
              </li>
              <li>
                <strong>Backend:</strong> Node.js/Express RESTful API with MongoDB
                for flexible document storage. Custom AI matching algorithm that
                scores candidate-job compatibility based on skills, experience,
                and preferences.
              </li>
              <li>
                <strong>Real-time:</strong> Socket.io integration for instant
                notifications when employers express interest in candidates — the
                platform sees candidates receive approaches within minutes of
                profile creation.
              </li>
              <li>
                <strong>Infrastructure:</strong> Deployed on scalable cloud
                infrastructure with CDN optimization for Greek market performance.
              </li>
            </ul>
            <div className="cs-tech-grid">
              {[
                "Next.js",
                "React Native",
                "Node.js",
                "Express",
                "MongoDB",
                "Socket.io",
                "AI/ML Matching",
                "PWA",
                "TypeScript",
                "Tailwind CSS",
              ].map((t) => (
                <span key={t} className="cs-tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>My Contribution</h2>
            <ul>
              <li>
                Architected and built the full Next.js web application from the
                ground up, including SSR pages, dynamic routing, and SEO
                optimization for Greek-language content
              </li>
              <li>
                Developed the React Native mobile experience with push
                notifications, profile creation flows, and real-time job matching
                updates
              </li>
              <li>
                Built the RESTful API layer handling candidate profiles, job
                listings, matching algorithms, and employer-candidate communication
              </li>
              <li>
                Implemented the AI-powered matching system that analyzes candidate
                skills and experience to surface relevant opportunities with 98%
                matching accuracy
              </li>
              <li>
                Integrated payment processing for employer subscriptions and
                premium candidate features
              </li>
              <li>
                Optimized application performance resulting in sub-2-second page
                loads across the platform
              </li>
            </ul>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Impact & Results</h2>
            <div className="cs-impact">
              <div className="cs-impact-card">
                <div className="cs-impact-n">3,800+</div>
                <div className="cs-impact-l">Active Listings</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">98%</div>
                <div className="cs-impact-l">Match Accuracy</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">2</div>
                <div className="cs-impact-l">App Stores</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">6+</div>
                <div className="cs-impact-l">Media Features</div>
              </div>
            </div>
            <p>
              The platform has been featured across multiple Greek media outlets as
              a startup changing the employment landscape. Joberos successfully
              connected thousands of businesses with candidates and continues to
              grow across the Greek hospitality sector.
            </p>
          </div>
          <CaseStudyNav nextSlug="dukan" nextLabel="Next: Dukan.pk →" />
        </>
      )}
      {slug === "dukan" && (
        <>
          <div className="cs-hero">
            <div className="cs-tag">Case Study</div>
            <h1>
              Dukan.pk — E-Commerce
              <br />
              Infrastructure Platform
            </h1>
            <p className="cs-sub">
              Contributed to Pakistan&apos;s leading e-commerce infrastructure
              company — building digital banking software and commerce tools that
              connect retailers, distributors, and manufacturers with embedded
              financial services.
            </p>
            <div className="cs-meta-grid">
              <div className="cs-meta-item">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">Dukan.pk</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Industry</div>
                <div className="cs-meta-val">Fintech / E-Commerce</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Role</div>
                <div className="cs-meta-val">MERN Stack Developer</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Scale</div>
                <div className="cs-meta-val">Thousands of Sellers</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Website</div>
                <div className="cs-meta-val">
                  <a
                    href="https://www.dukan.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={acc}
                  >
                    dukan.pk
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-screenshot">
            <div className="cs-browser">
              <div className="cs-browser-bar">
                <div className="mock-dot d1" />
                <div className="mock-dot d2" />
                <div className="mock-dot d3" />
                <span className="cs-browser-url">https://www.dukan.pk</span>
              </div>
              <div className="cs-browser-body">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://assets.dukan.pk/assets/wnassets/new/images/onlineseller.png"
                  alt="Dukan.pk"
                  style={{
                    background: "linear-gradient(135deg,#1a1040,#0d0d2b)",
                    padding: 40,
                  }}
                  onError={(e) => {
                    e.currentTarget.style.height = "300px";
                    e.currentTarget.style.background = "var(--bg3)";
                  }}
                />
              </div>
            </div>
          </div>
          <div className="cs-section">
            <h2>The Challenge</h2>
            <p>
              Pakistan&apos;s retail ecosystem was heavily fragmented. Small
              sellers needed online storefronts, payment processing, and logistics
              — but building each of these independently was cost-prohibitive.
              Dukan.pk set out to create an all-in-one infrastructure that would
              digitize the entire retail supply chain with embedded financial
              services.
            </p>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Technical Architecture</h2>
            <p>
              A massive multi-service ecosystem requiring robust, scalable
              architecture:
            </p>
            <ul>
              <li>
                <strong>Dukan Shops:</strong> Dynamic storefront generator allowing
                sellers to create branded online stores with catalog management,
                order tracking, and customer CRM
              </li>
              <li>
                <strong>Dukan Payments:</strong> Payment orchestration layer
                integrating JazzCash, Easypaisa, HBL, Visa, Mastercard, and COD —
                with real-time reconciliation
              </li>
              <li>
                <strong>Dukan Logistics:</strong> Integration hub connecting 13+
                delivery partners (TCS, Leopards, Bykea, Daewoo, etc.) with embedded
                COD collection
              </li>
              <li>
                <strong>Dukan DMS:</strong> Distribution Management System digitizing
                end-to-end distribution flows including retail ordering, fleet
                management, inventory tracking, and reporting
              </li>
              <li>
                <strong>Dukan Marketplace:</strong> B2B marketplace enabling direct
                wholesaler-to-retailer purchasing
              </li>
              <li>
                <strong>Dukan Advertising:</strong> Digital marketing suite
                including CRM, SMS marketing, Facebook/Instagram adtech engine, and
                ad designer
              </li>
            </ul>
            <div className="cs-tech-grid">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Redis",
                "AWS",
                "Payment APIs",
                "Microservices",
                "Docker",
                "REST APIs",
              ].map((t) => (
                <span key={t} className="cs-tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>My Contribution</h2>
            <ul>
              <li>
                Developed and maintained key frontend modules across the seller
                dashboard including order management, inventory tracking, and
                analytics views
              </li>
              <li>
                Built RESTful API endpoints for product catalog management, order
                processing, and seller onboarding workflows
              </li>
              <li>
                Implemented payment gateway integrations ensuring seamless
                transaction processing across multiple payment providers
              </li>
              <li>
                Worked on the logistics integration layer connecting the platform with
                delivery partners&apos; APIs for real-time shipment tracking
              </li>
              <li>
                Optimized database queries and implemented caching strategies to
                handle high-traffic loads during sale events
              </li>
              <li>
                Collaborated with cross-functional teams on feature planning, code
                reviews, and production deployments
              </li>
            </ul>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Impact & Results</h2>
            <div className="cs-impact">
              <div className="cs-impact-card">
                <div className="cs-impact-n">1000s</div>
                <div className="cs-impact-l">Active Sellers</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">13+</div>
                <div className="cs-impact-l">Logistics Partners</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">8</div>
                <div className="cs-impact-l">Product Lines</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">6+</div>
                <div className="cs-impact-l">Payment Channels</div>
              </div>
            </div>
            <p>
              Dukan.pk has become a critical part of Pakistan&apos;s digital
              commerce ecosystem, empowering thousands of small businesses to go
              digital. The platform processes significant transaction volume daily
              and continues to expand its service offerings across the retail
              supply chain.
            </p>
          </div>
          <CaseStudyNav nextSlug="apkamuaalij" nextLabel="Next: Apka Muaalij →" />
        </>
      )}
      {slug === "apkamuaalij" && (
        <>
          <div className="cs-hero">
            <div className="cs-tag">Case Study</div>
            <h1>
              Apka Muaalij —
              <br />
              Doctor Booking Platform
            </h1>
            <p className="cs-sub">
              Helped build Pakistan&apos;s growing healthcare platform that
              connects patients with 10,000+ doctors across 25+ specialties —
              featuring video consultations, clinic bookings, lab tests, surgeries,
              and a mobile app.
            </p>
            <div className="cs-meta-grid">
              <div className="cs-meta-item">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">Apka Muaalij</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Industry</div>
                <div className="cs-meta-val">HealthTech</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Role</div>
                <div className="cs-meta-val">Full-Stack Developer</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Doctors</div>
                <div className="cs-meta-val">10,000+</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Website</div>
                <div className="cs-meta-val">
                  <a
                    href="https://apkamuaalij.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={acc}
                  >
                    apkamuaalij.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-screenshot">
            <div className="cs-browser">
              <div className="cs-browser-bar">
                <div className="mock-dot d1" />
                <div className="mock-dot d2" />
                <div className="mock-dot d3" />
                <span className="cs-browser-url">https://apkamuaalij.com</span>
              </div>
              <div className="cs-browser-body">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.apkamuaalij.com/AKM-New-Homepage/Clinic_Consult.png"
                  alt="Apka Muaalij"
                  style={{
                    background: "linear-gradient(135deg,#e8f5e9,#fff)",
                    padding: 40,
                  }}
                  onError={(e) => {
                    e.currentTarget.style.height = "300px";
                    e.currentTarget.style.background = "var(--bg3)";
                  }}
                />
              </div>
            </div>
          </div>
          <div className="cs-section">
            <h2>The Challenge</h2>
            <p>
              Access to quality healthcare in Pakistan remains a challenge —
              patients struggle to find verified specialists, booking processes are
              phone-based and inefficient, and telemedicine infrastructure was
              nearly nonexistent. Apka Muaalij needed a robust digital platform
              that could serve patients across major cities with features ranging
              from online video consultations to in-person clinic bookings, lab
              tests, and surgery coordination.
            </p>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Technical Architecture</h2>
            <ul>
              <li>
                <strong>Frontend:</strong> Next.js with server-side rendering for
                SEO — critical for healthcare search visibility. Dynamic pages for
                every doctor, specialty, city, and hospital combination ensuring
                comprehensive indexing.
              </li>
              <li>
                <strong>Video Consultation:</strong> Integrated real-time video SDK
                enabling doctor-patient video calls with in-session prescription
                writing and file sharing.
              </li>
              <li>
                <strong>Booking Engine:</strong> Complex scheduling system managing
                multiple doctor schedules, clinic locations, time slots, and
                appointment types (video vs. in-person).
              </li>
              <li>
                <strong>Payment Integration:</strong> Wallet system with
                promotional top-ups, integrated payment gateway for consultation
                fees.
              </li>
              <li>
                <strong>Mobile App:</strong> Android app on Google Play Store with
                wallet integration and appointment management.
              </li>
              <li>
                <strong>Content Platform:</strong> Health blog, community forum, and
                medicine directory for patient education.
              </li>
            </ul>
            <div className="cs-tech-grid">
              {[
                "Next.js",
                "React",
                "Node.js",
                "MongoDB",
                "Video SDK",
                "Payment Gateway",
                "SEO",
                "Google Play",
                "REST API",
              ].map((t) => (
                <span key={t} className="cs-tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>My Contribution</h2>
            <ul>
              <li>
                Built dynamic SEO-optimized pages for doctors, specialties, and
                city combinations — generating thousands of indexed pages that
                drive organic search traffic
              </li>
              <li>
                Developed the video consultation flow including room creation,
                waiting rooms, and in-session UI components
              </li>
              <li>
                Implemented the booking and scheduling engine handling complex
                multi-location doctor availability
              </li>
              <li>
                Built the patient-facing appointment management dashboard with
                history, prescriptions, and follow-up tracking
              </li>
              <li>
                Integrated payment gateway and wallet system with promotional
                credit functionality
              </li>
              <li>
                Optimized Core Web Vitals for healthcare SEO competitiveness across
                city and specialty pages
              </li>
            </ul>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Impact & Results</h2>
            <div className="cs-impact">
              <div className="cs-impact-card">
                <div className="cs-impact-n">10K+</div>
                <div className="cs-impact-l">Doctors Listed</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">25+</div>
                <div className="cs-impact-l">Specialties</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">15+</div>
                <div className="cs-impact-l">Cities Covered</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">4</div>
                <div className="cs-impact-l">Service Types</div>
              </div>
            </div>
            <p>
              Apka Muaalij has grown to become a significant player in
              Pakistan&apos;s digital health space, enabling patients in 15+ cities
              to access verified doctors online and offline. The platform handles
              video consultations, lab test bookings, surgery coordination, and
              medicine information — creating a comprehensive healthcare ecosystem.
            </p>
          </div>
          <CaseStudyNav nextSlug="greenorum" nextLabel="Next: Greenorum →" />
        </>
      )}
      {slug === "greenorum" && (
        <>
          <div className="cs-hero">
            <div className="cs-tag">Case Study</div>
            <h1>
              Greenorum — Environmental
              <br />
              Social Network
            </h1>
            <p className="cs-sub">
              Built a purpose-driven social network connecting climate activists,
              environmental organizations, and sustainability advocates worldwide —
              with full social media features including feeds, articles, groups,
              events, and organization profiles.
            </p>
            <div className="cs-meta-grid">
              <div className="cs-meta-item">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">Greenorum</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Industry</div>
                <div className="cs-meta-val">Climate Tech / Social</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Role</div>
                <div className="cs-meta-val">Full-Stack Developer</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Reach</div>
                <div className="cs-meta-val">Global</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Website</div>
                <div className="cs-meta-val">
                  <a
                    href="https://www.greenorum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={acc}
                  >
                    greenorum.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-section">
            <h2>The Challenge</h2>
            <p>
              Environmental activists and organizations lacked a dedicated social
              platform. Mainstream social media algorithms de-prioritized climate
              content, and there was no purpose-built space for environmental
              communities to organize, share research, coordinate events, and build
              organizations. Greenorum needed a full-featured social network built
              from scratch — with the depth of features users expect from modern
              social platforms.
            </p>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Technical Architecture</h2>
            <ul>
              <li>
                <strong>Social Feed:</strong> Real-time community feed with media
                posts (images, polls), likes, comments, and sharing functionality.
                Content delivery optimized for global users.
              </li>
              <li>
                <strong>Articles Platform:</strong> Long-form article publishing
                system with rich text editing, categories, and SEO optimization for
                environmental content.
              </li>
              <li>
                <strong>Groups & Spaces:</strong> Community group functionality with
                moderation tools, member management, and topic-specific discussion
                spaces.
              </li>
              <li>
                <strong>Organizations:</strong> Dedicated organization profiles
                with member directories, verification badges, and content
                publishing capabilities.
              </li>
              <li>
                <strong>Events:</strong> Event creation and discovery system for
                environmental conferences, cleanups, and advocacy campaigns.
              </li>
              <li>
                <strong>Cloud Infrastructure:</strong> Cloud-based media storage for
                user-uploaded images and content with CDN distribution.
              </li>
            </ul>
            <div className="cs-tech-grid">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Socket.io",
                "Cloud Storage",
                "REST API",
                "JWT Auth",
                "Media Processing",
              ].map((t) => (
                <span key={t} className="cs-tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>My Contribution</h2>
            <ul>
              <li>
                Built the complete social feed system including post creation, media
                uploads, likes, comments, and sharing with real-time updates via
                Socket.io
              </li>
              <li>
                Developed the articles publishing platform with rich text editor,
                draft management, and SEO-optimized rendering
              </li>
              <li>
                Implemented Groups and Spaces features with role-based access
                control, moderation tools, and member management
              </li>
              <li>
                Built the Organization profiles system with verification workflows,
                member directories, and content publishing
              </li>
              <li>
                Developed user authentication and authorization with friend requests,
                follow systems, and privacy controls
              </li>
              <li>
                Implemented cloud-based media storage pipeline for images with
                optimization, compression, and CDN distribution
              </li>
              <li>
                Built the events system with creation, discovery, RSVP tracking, and
                calendar integration
              </li>
            </ul>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Impact & Results</h2>
            <div className="cs-impact">
              <div className="cs-impact-card">
                <div className="cs-impact-n">7+</div>
                <div className="cs-impact-l">Core Features</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">Global</div>
                <div className="cs-impact-l">User Base</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">Full</div>
                <div className="cs-impact-l">Social Platform</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">5+</div>
                <div className="cs-impact-l">Organizations</div>
              </div>
            </div>
            <p>
              Greenorum has established itself as a niche social network for the
              environmental community, with active organizations from Climate Live
              South Africa, Climate Reality Tanzania, and individual advocates
              worldwide using the platform to share climate research, coordinate
              events, and build community around sustainability initiatives.
            </p>
          </div>
          <CaseStudyNav nextSlug="dental" nextLabel="Next: Dental Platform →" />
        </>
      )}
      {slug === "dental" && (
        <>
          <div className="cs-hero">
            <div className="cs-tag">Case Study</div>
            <h1>
              Dental Clinic Platform
              <br />
              + AI Front Desk Agent
            </h1>
            <p className="cs-sub">
              Designed and built custom dental clinic websites with integrated admin
              dashboards and an AI-powered front desk agent that autonomously
              handles patient intake, appointment scheduling, and clinic inquiries
              for US and UK dental practices.
            </p>
            <div className="cs-meta-grid">
              <div className="cs-meta-item">
                <div className="cs-meta-label">Client</div>
                <div className="cs-meta-val">Fexart Studios</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Industry</div>
                <div className="cs-meta-val">Healthcare / AI</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Role</div>
                <div className="cs-meta-val">Technical Lead</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Market</div>
                <div className="cs-meta-val">US & UK</div>
              </div>
            </div>
          </div>
          <div className="cs-section">
            <h2>The Challenge</h2>
            <p>
              Dental clinics in the US and UK spend significant resources on front
              desk staff handling repetitive tasks: answering phone calls,
              scheduling appointments, processing new patient intake forms, and
              responding to common inquiries. The goal was to build a premium dental
              web presence with an intelligent AI agent that could handle these
              interactions autonomously — reducing overhead while improving patient
              experience.
            </p>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Technical Architecture</h2>
            <ul>
              <li>
                <strong>Website:</strong> Next.js with a &quot;Luxury Medical
                Precision&quot; design system — Framer Motion page transitions,
                GSAP scroll animations, and Lenis smooth scrolling creating a
                premium clinic experience
              </li>
              <li>
                <strong>Admin Dashboard:</strong> Custom-built clinic management panel
                with appointment calendar, patient records, treatment planning, and
                analytics
              </li>
              <li>
                <strong>AI Front Desk Agent:</strong> OpenAI-powered conversational
                agent trained on clinic-specific data — handles appointment
                booking, insurance questions, treatment inquiries, and new patient
                registration
              </li>
              <li>
                <strong>Content Management:</strong> Custom CMS allowing clinics to
                update services, doctor profiles, testimonials, and blog posts
                without developer intervention
              </li>
            </ul>
            <div className="cs-tech-grid">
              {[
                "Next.js 14",
                "OpenAI API",
                "Node.js",
                "MongoDB",
                "Framer Motion",
                "GSAP",
                "Lenis",
                "Tailwind CSS",
              ].map((t) => (
                <span key={t} className="cs-tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>My Contribution</h2>
            <ul>
              <li>
                Led the full technical design and implementation of the dental
                platform architecture
              </li>
              <li>
                Developed the AI front desk agent with custom prompt engineering,
                clinic-specific training data, and conversation flow management
              </li>
              <li>
                Built the admin dashboard with appointment management, patient
                records, and real-time analytics
              </li>
              <li>
                Implemented the &quot;Luxury Medical Precision&quot; design system
                with GSAP, Framer Motion, and Lenis
              </li>
              <li>
                Created automated lead capture and nurturing flows integrated with
                Google Ads campaigns
              </li>
              <li>
                Built the website migration tool to rapidly onboard new clinic
                clients by extracting and repopulating their existing site content
              </li>
            </ul>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Impact & Results</h2>
            <div className="cs-impact">
              <div className="cs-impact-card">
                <div className="cs-impact-n">70%</div>
                <div className="cs-impact-l">Reduced Intake Time</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">24/7</div>
                <div className="cs-impact-l">AI Availability</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">3x</div>
                <div className="cs-impact-l">Faster Onboarding</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">2</div>
                <div className="cs-impact-l">Markets Served</div>
              </div>
            </div>
          </div>
          <CaseStudyNav nextSlug="migration" nextLabel="Next: Migration Engine →" />
        </>
      )}
      {slug === "migration" && (
        <>
          <div className="cs-hero">
            <div className="cs-tag">Case Study</div>
            <h1>
              Website Migration
              <br />
              Engine
            </h1>
            <p className="cs-sub">
              Built an AI-powered developer tool that automates the entire website
              migration process — crawling existing sites, extracting content into
              structured data, and rebuilding them as modern Next.js applications
              with luxury design aesthetics.
            </p>
            <div className="cs-meta-grid">
              <div className="cs-meta-item">
                <div className="cs-meta-label">Type</div>
                <div className="cs-meta-val">Internal Tool</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Industry</div>
                <div className="cs-meta-val">Developer Tools</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Role</div>
                <div className="cs-meta-val">Architect & Builder</div>
              </div>
              <div className="cs-meta-item">
                <div className="cs-meta-label">Approach</div>
                <div className="cs-meta-val">AI-Assisted</div>
              </div>
            </div>
          </div>
          <div className="cs-section">
            <h2>The Challenge</h2>
            <p>
              When onboarding new dental clinic clients, migrating their existing
              website content to a modern stack was a painful, manual process taking
              2-3 weeks per site. Content had to be manually copied, images
              downloaded and re-optimized, layouts recreated, and SEO metadata
              preserved. This bottleneck was limiting the agency&apos;s ability to
              scale.
            </p>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Technical Architecture</h2>
            <ul>
              <li>
                <strong>Crawl Phase:</strong> Puppeteer-based crawler that navigates
                the entire existing site, capturing page structures, text content,
                images, and metadata into a master <code>site-content.json</code>{" "}
                file
              </li>
              <li>
                <strong>Transform Phase:</strong> AI-powered content transformation
                using Cursor and custom prompts that maps extracted content into
                typed TypeScript interfaces matching the target Next.js theme
                structure
              </li>
              <li>
                <strong>Build Phase:</strong> Automated population of the &quot;Clara
                Dentist&quot; Next.js theme with extracted content, including image
                optimization, component mapping, and route generation
              </li>
              <li>
                <strong>QA Phase:</strong> Automated visual regression testing
                comparing source and target pages for content parity
              </li>
            </ul>
            <div className="cs-tech-grid">
              {[
                "Next.js 14",
                "Cursor AI",
                "Puppeteer",
                "TypeScript",
                "GSAP",
                "Framer Motion",
                "Lenis",
                "Prompt Engineering",
              ].map((t) => (
                <span key={t} className="cs-tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>My Contribution</h2>
            <ul>
              <li>
                Designed the entire crawl-to-QA pipeline architecture and
                implemented each phase
              </li>
              <li>
                Built the Puppeteer crawler with intelligent page detection, content
                extraction, and structured output generation
              </li>
              <li>
                Engineered multiple iterations of AI prompts for content
                transformation — optimizing for accuracy, type safety, and
                consistent output structure
              </li>
              <li>
                Developed the automated build system that maps extracted JSON to
                Next.js components
              </li>
              <li>
                Created typed TypeScript interfaces ensuring type-safe content
                population across all template components
              </li>
              <li>
                Implemented the &quot;Luxury Medical Precision&quot; redesign
                aesthetic applied during migration
              </li>
            </ul>
          </div>
          <hr className="cs-divider" />
          <div className="cs-section">
            <h2>Impact & Results</h2>
            <div className="cs-impact">
              <div className="cs-impact-card">
                <div className="cs-impact-n">80%</div>
                <div className="cs-impact-l">Time Saved</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">4</div>
                <div className="cs-impact-l">Pipeline Phases</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">Days</div>
                <div className="cs-impact-l">vs Weeks</div>
              </div>
              <div className="cs-impact-card">
                <div className="cs-impact-n">100%</div>
                <div className="cs-impact-l">Content Parity</div>
              </div>
            </div>
            <p>
              The migration engine reduced client onboarding time from 2-3 weeks
              to 2-3 days, enabling the agency to scale its clinic client acquisition
              significantly. The tool has been used across multiple dental clinic
              migrations, maintaining consistent design quality while preserving
              all original content and SEO value.
            </p>
          </div>
          <CaseStudyNav />
        </>
      )}
    </>
  );
}
