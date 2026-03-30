import type { CSSProperties } from "react";

export type ProjectIconKey =
  | "target"
  | "store"
  | "heartPulse"
  | "globe"
  | "smile";

export type ProjectImageMock = {
  kind: "image";
  src: string;
  alt: string;
  style?: CSSProperties;
  /** Shown if the image fails to load */
  fallbackIcon?: ProjectIconKey;
};

export type ProjectPlaceholderMock = {
  kind: "placeholder";
  icon: ProjectIconKey;
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
  caseStudy?: CaseStudy;
};

export type CaseStudySection = {
  title: string;
  paragraph?: string;
  intro?: string;
  listItems?: Array<{ label?: string; text: string }>;
  techTags?: string[];
  impactCards?: Array<{ value: string; label: string }>;
};

export type CaseStudy = {
  hero: {
    titleLines: string[];
    subtitle: string;
    meta: Array<{ label: string; value: string; href?: string }>;
  };
  screenshot?: {
    url: string;
    imageSrc: string;
    imageAlt: string;
    imageStyle?: CSSProperties;
  };
  sections: CaseStudySection[];
};

export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════════════
  // PROJECT CASE STUDIES — MenuQ, RealmXR, CanonPK
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "menuq",
    num: "02",
    urlBar: "menuq.app",
    meta: "SaaS / AR & 3D — Dubai (UAE)",
    title: "MenuQ",
    description:
      "AI-powered 3D & AR digital menu platform for restaurants and lounges. Guests scan a QR code to explore dishes in stunning 3D, place them on their table via AR, and get AI-driven upsell recommendations — no app download required. SaaS model with tiered pricing.",
    tags: ["Next.js", "Three.js", "WebXR", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://menuq.app",
    featured: true,
    mock: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
      alt: "MenuQ — 3D AR digital menu platform",
    },
    caseStudy: {
      hero: {
        titleLines: ["MenuQ — AI-Powered 3D", "Digital Menu Platform"],
        subtitle:
          "Built a full SaaS platform that lets restaurants display their dishes in interactive 3D and AR — guests scan a QR code, explore food from every angle, place it virtually on their table, and order with confidence. No app needed.",
        meta: [
          { label: "Client", value: "Eureka Studios (Dubai)" },
          { label: "Industry", value: "FoodTech / SaaS" },
          { label: "Role", value: "Full-Stack Developer" },
          { label: "Timeline", value: "4+ Months" },
          { label: "Website", value: "menuq.app", href: "https://menuq.app" },
        ],
      },
      screenshot: {
        url: "https://menuq.app",
        imageSrc: "https://menuq.app/_next/image?url=%2Fdemo-QR.png&w=384&q=75",
        imageAlt: "MenuQ Demo",
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "Traditional restaurant menus — whether printed or PDF-based — fail to convey portion sizes, presentation quality, or ingredient details. Diners frequently suffer from 'order regret' after receiving something that looks nothing like what they expected. Restaurants lose revenue from underperforming dishes and waste money reprinting menus for every seasonal change. MenuQ needed a platform where restaurants could showcase dishes in photorealistic 3D, enable AR table placement, and drive higher average order values through AI-powered upselling — all accessible via a simple QR code scan with zero friction.",
        },
        {
          title: "Technical Architecture",
          intro:
            "Built as a multi-tenant SaaS application with real-time 3D rendering in the browser:",
          listItems: [
            {
              label: "Frontend",
              text: "Next.js application with server-side rendering for SEO, dynamic restaurant pages, and a responsive menu viewer optimized for mobile-first usage.",
            },
            {
              label: "3D Engine",
              text: "Three.js and WebGL-based 3D viewer allowing full 360° rotation, zoom, and inspection of dish models. GLB/GLTF format support for photorealistic food models rendered in real-time.",
            },
            {
              label: "AR Module",
              text: "WebXR-powered augmented reality that lets diners place true-to-scale dish models directly on their table using their phone camera — no app download required. Supports both ARKit (iOS) and ARCore (Android).",
            },
            {
              label: "AI Upsell Engine",
              text: "AI-powered recommendation system that suggests add-ons, pairings, and premium upgrades based on the dish being viewed — driving a reported +24% increase in average order value.",
            },
            {
              label: "Dashboard",
              text: "Full restaurant admin dashboard for menu management, 3D model uploads, analytics (views, interactions, conversion heatmaps), and custom branding (logo, colors, typography).",
            },
            {
              label: "Payments & Billing",
              text: "Stripe-integrated SaaS billing with tiered plans (Basic $10/mo, Pro $25/mo, Enterprise custom), free trials, and add-on pricing for 3D model creation.",
            },
          ],
          techTags: [
            "Next.js",
            "Three.js",
            "WebGL",
            "WebXR",
            "ARKit",
            "ARCore",
            "Node.js",
            "Express",
            "MongoDB",
            "Stripe",
            "Tailwind CSS",
            "TypeScript",
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Architected and developed the full Next.js web application including the public-facing menu viewer, restaurant landing pages, and SEO-optimized blog system",
            },
            {
              text: "Built the Three.js-based 3D dish viewer with smooth rotation, zoom controls, lighting configuration, and model loading optimization for mobile devices",
            },
            {
              text: "Implemented WebXR AR functionality enabling real-time dish placement on physical surfaces using device camera — tested across iOS Safari and Android Chrome",
            },
            {
              text: "Developed the restaurant admin dashboard with menu CRUD operations, 3D model management, analytics views, and custom branding controls",
            },
            {
              text: "Integrated Stripe for SaaS subscription billing with tiered plans, free trial management, and usage-based add-on charges for 3D model creation",
            },
            {
              text: "Built the AI recommendation engine that analyzes dish metadata and user interaction patterns to surface contextual upsell suggestions in real-time",
            },
            {
              text: "Implemented QR code generation system that dynamically creates unique scannable codes linked to each restaurant's branded menu experience",
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "+24%", label: "Avg Order Value" },
            { value: "93%", label: "Customer Satisfaction" },
            { value: "0", label: "App Downloads Needed" },
            { value: "3", label: "SaaS Tiers" },
          ],
          paragraph:
            "MenuQ is now actively used by restaurants and cafés, delivering measurable increases in order value through 3D dish visualization and AI-powered upselling. The platform's zero-friction QR code access has achieved 93% customer satisfaction scores, and the 3D + AR approach has virtually eliminated order regret among diners.",
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════

  {
    slug: "realmxr",
    num: "03",
    urlBar: "realmxr.eurekafz.online",
    meta: "PropTech / AR & 3D — Dubai (UAE)",
    title: "RealmXR",
    description:
      "Immersive 3D real estate visualization platform enabling buyers to explore full building models, walk through apartments in AR, switch between floor plans, and measure distances — all in the browser. Supports 1-BHK through Penthouse configurations.",
    tags: ["Three.js", "WebXR", "React", "GLB/GLTF", "Node.js", "USDZ"],
    liveUrl: "https://realmxr.eurekafz.online",
    featured: true,
    mock: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
      alt: "RealmXR — 3D real estate platform",
    },
    caseStudy: {
      hero: {
        titleLines: ["RealmXR — Immersive 3D", "Real Estate Platform"],
        subtitle:
          "Built a browser-based 3D real estate visualization tool that lets prospective buyers explore entire buildings, walk through individual apartments in AR, compare floor plans, and measure room dimensions — replacing costly physical showroom visits.",
        meta: [
          { label: "Client", value: "Eureka Studios (Dubai)" },
          { label: "Industry", value: "PropTech / Real Estate" },
          { label: "Role", value: "Full-Stack Developer" },
          { label: "Timeline", value: "3+ Months" },
          {
            label: "Website",
            value: "realmxr.eurekafz.online",
            href: "https://realmxr.eurekafz.online",
          },
        ],
      },
      screenshot: {
        url: "https://realmxr.eurekafz.online",
        imageSrc: "https://realmxr.eurekafz.online/assets/images/logo.png",
        imageAlt: "RealmXR Building Viewer",
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "Real estate developers in the Gulf region spend millions on physical showrooms and scale models to sell off-plan properties. Prospective buyers needed to travel to the site, wait for construction, or rely on static floor plans and renderings that fail to convey spatial relationships. The industry needed a web-based solution where buyers could interactively explore an entire building, select specific apartment types, walk through them in 3D, view detailed floor plans, and even place the building model in their real-world environment via AR — all without installing an app.",
        },
        {
          title: "Technical Architecture",
          intro:
            "A complex 3D web application built for real-time architectural visualization:",
          listItems: [
            {
              label: "3D Building Viewer",
              text: "Three.js-powered interactive 3D model viewer that renders the full building structure with selectable floors, apartment units, and Sky Villa / Penthouse configurations. Supports perspective and orthographic camera modes.",
            },
            {
              label: "Apartment Explorer",
              text: "Individual apartment walkthroughs for 8 unit types (1-BHK, 2-BHK, 2-BHK Modified, 3-BHK, 4-BHK, Sky Villa, Penthouse A, Penthouse B) with material inspection, bounding box visualization, and node tree navigation.",
            },
            {
              label: "AR Integration",
              text: "WebXR for Android devices and USDZ export for iOS AR Quick Look — buyers can place the entire building or individual apartments in their real environment at true scale.",
            },
            {
              label: "Floor Plan System",
              text: "Dynamic floor plan viewer with apartment type overlays, square footage data, and interactive hotspots linking 2D plans to 3D walkthroughs.",
            },
            {
              label: "Measurement Tool",
              text: "Built-in distance measurement tool allowing buyers to click-to-measure room dimensions, doorways, and spatial relationships in real-time within the 3D model.",
            },
            {
              label: "City View",
              text: "Separate 'Live View' city context page showing the building within its urban surroundings for location and neighborhood context.",
            },
          ],
          techTags: [
            "Three.js",
            "WebGL",
            "WebXR",
            "USDZ",
            "ARKit",
            "ARCore",
            "GLB/GLTF",
            "React",
            "Node.js",
            "CSS3",
            "Responsive Design",
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Built the core Three.js 3D viewer from scratch including camera controls, lighting systems, model loading pipeline, and performance optimization for large architectural GLB files",
            },
            {
              text: "Developed the apartment type switching system that dynamically loads and renders different unit configurations (1-BHK through Penthouse) with smooth transitions",
            },
            {
              text: "Implemented the AR functionality — WebXR hit-testing for Android Chrome and USDZ file generation for iOS AR Quick Look, enabling true-to-scale building placement",
            },
            {
              text: "Built the floor plan overlay system connecting 2D floor plan views to interactive 3D walkthroughs with synchronized navigation",
            },
            {
              text: "Developed the real-time distance measurement tool using raycasting and 3D point picking within the Three.js scene",
            },
            {
              text: "Implemented the model node tree inspector allowing developers and clients to examine individual mesh materials, geometry, and scene hierarchy",
            },
            {
              text: "Created the guided tour onboarding system that walks first-time users through the interface with step-by-step overlays",
            },
            {
              text: "Optimized 3D rendering performance for mobile devices including progressive loading, texture compression, and level-of-detail management",
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "8", label: "Apartment Types" },
            { value: "2", label: "AR Platforms" },
            { value: "0", label: "App Downloads" },
            { value: "60%", label: "Fewer Site Visits" },
          ],
          paragraph:
            "RealmXR has enabled the real estate developer to significantly reduce dependency on physical showrooms. Prospective buyers can now explore the full property from anywhere in the world, reducing the need for in-person site visits by an estimated 60%. The platform supports the entire sales funnel — from initial discovery through detailed apartment comparison to AR-powered 'feel the space' experiences.",
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════

  {
    slug: "canonpk",
    num: "04",
    urlBar: "canonpk.com",
    meta: "E-Commerce / Home Appliances — Pakistan",
    title: "Canon PK",
    description:
      "Full e-commerce platform for Canon Home Appliances — Pakistan's pioneer home appliance manufacturer since 1972. Features product catalog with 100+ SKUs across cooling, kitchen, heating, and water appliances, a store locator spanning 15+ cities, and integrated payment processing.",
    tags: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Custom Theme",
      "SEO",
      "Analytics",
    ],
    liveUrl: "https://canonpk.com",
    featured: true,
    mock: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
      alt: "Canon PK — home appliance e-commerce",
    },
    caseStudy: {
      hero: {
        titleLines: ["Canon PK — E-Commerce", "for Home Appliances"],
        subtitle:
          "Built and customized the e-commerce platform for Canon Home Appliances — Pakistan's legacy home appliance manufacturer since 1972 — powering online sales across room coolers, kitchen appliances, geysers, water heaters, and more, with 15+ display stores nationwide.",
        meta: [
          { label: "Client", value: "Canon Home Appliances" },
          { label: "Industry", value: "E-Commerce / Manufacturing" },
          { label: "Role", value: "Frontend Developer" },
          { label: "Scale", value: "100+ Products" },
          {
            label: "Website",
            value: "canonpk.com",
            href: "https://canonpk.com",
          },
        ],
      },
      screenshot: {
        url: "https://canonpk.com",
        imageSrc:
          "https://assets.dukan.pk/assets/wnassets/new/images/onlineseller.png",
        imageAlt: "Canon PK Homepage",
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "Canon Home Appliances had a 50+ year legacy in Pakistan's home appliance market with 15+ physical display stores across Lahore, Karachi, Islamabad, Faisalabad, Multan, Peshawar, Gujranwala, and Sialkot — but lacked a modern e-commerce presence. Customers had no way to browse the full product catalog online, compare specifications, check availability, or purchase directly. The brand needed a digital storefront that matched the quality and trust of their physical retail while opening up nationwide reach beyond their existing store footprint.",
        },
        {
          title: "Technical Architecture",
          intro:
            "A customized e-commerce solution built for a legacy manufacturing brand entering digital commerce:",
          listItems: [
            {
              label: "Storefront",
              text: "Custom Shopify theme with responsive design optimized for Pakistan's mobile-first audience. Collection pages for Room Coolers, Kitchen Appliances, Geysers, Water Heaters, Water Dispensers, and seasonal Summer/Winter collections.",
            },
            {
              label: "Product System",
              text: "100+ product SKUs with detailed specifications (tank capacity, motor wattage, blade size, material type), variant management, and high-resolution product imagery with quick-view and compare functionality.",
            },
            {
              label: "Store Locator",
              text: "Interactive store locator page with 15+ physical display store addresses across 8 Pakistani cities, phone numbers, and directions — bridging online discovery to offline purchase.",
            },
            {
              label: "SEO & Content",
              text: "SEO-optimized category and product pages targeting high-intent local search queries (e.g., 'best room cooler in Pakistan', 'Canon geyser price'). Company profile, About Us, and blog content for authority building.",
            },
            {
              label: "Payments & Logistics",
              text: "Integrated payment processing with Cash on Delivery support for Pakistani market, advance payment flow for high-value items, and a returns/exchange policy framework.",
            },
            {
              label: "Bilingual Support",
              text: "English and Urdu language toggle for the Pakistani market, ensuring accessibility across demographics.",
            },
          ],
          techTags: [
            "Shopify",
            "Liquid",
            "JavaScript",
            "CSS3",
            "Custom Theme",
            "SEO",
            "Google Analytics",
            "Facebook Pixel",
            "Responsive Design",
            "COD Integration",
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Built and customized the Shopify theme with bespoke layouts for collection pages, product detail pages, and the homepage hero carousel showcasing seasonal campaigns",
            },
            {
              text: "Developed the product specification display system that renders detailed technical specs (tank capacity, motor type, blade size, material, dimensions) in a clean, scannable format",
            },
            {
              text: "Implemented the store locator page with city-grouped display store listings, contact numbers, and address formatting for 15+ locations across Pakistan",
            },
            {
              text: "Built the product comparison and quick-view functionality enabling customers to side-by-side compare specifications across cooler, geyser, and kitchen appliance models",
            },
            {
              text: "Optimized all collection and product pages for SEO — including structured data markup, meta descriptions, and image alt tags targeting Pakistani home appliance search queries",
            },
            {
              text: "Integrated Facebook Pixel and Google Analytics for conversion tracking, enabling the marketing team to measure ad campaign ROI across their digital spending",
            },
            {
              text: "Implemented the bilingual English/Urdu interface ensuring the brand reaches both urban and semi-urban Pakistani demographics",
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "100+", label: "Products Listed" },
            { value: "15+", label: "Store Locations" },
            { value: "8", label: "Cities Covered" },
            { value: "50+", label: "Years of Brand Trust" },
          ],
          paragraph:
            "The Canon PK e-commerce platform has successfully bridged the gap between the brand's strong offline presence and the growing demand for digital commerce in Pakistan. The site now serves as the primary product discovery channel, driving foot traffic to physical stores while enabling direct online purchases for customers in cities without a Canon display store. The seasonal collection system allows the marketing team to promote relevant products (coolers in summer, geysers in winter) with zero developer dependency.",
        },
      ],
    },
  },
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
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
      alt: "Joberos — AI job platform",
    },
    caseStudy: {
      hero: {
        titleLines: ["Joberos — AI-Powered", "Job Matching Platform"],
        subtitle:
          "Built the full-stack web and mobile platform for a Greek startup that uses AI algorithms to match candidates with hospitality, tourism, and retail opportunities — eliminating the need for resumes and job searching.",
        meta: [
          { label: "Client", value: "Joberos (Greece)" },
          { label: "Industry", value: "HR Tech / SaaS" },
          { label: "Role", value: "Full-Stack Developer" },
          { label: "Timeline", value: "6+ Months" },
          {
            label: "Website",
            value: "joberos.com",
            href: "https://joberos.com",
          },
        ],
      },
      screenshot: {
        url: "https://joberos.com",
        imageSrc:
          "https://joberos.com/_next/image?url=%2Fassets%2Fhero-image.png&w=1920&q=90",
        imageAlt: "Joberos Hero",
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "The Greek hospitality and retail sectors were struggling with traditional hiring — candidates flooded job boards with resumes, employers wasted hours sifting through unqualified applicants, and the matching process was slow and inefficient. Joberos needed a platform that could intelligently connect the right candidates with the right roles automatically.",
        },
        {
          title: "Technical Architecture",
          intro:
            "Built as a modern full-stack application with a focus on performance, SEO, and cross-platform availability:",
          listItems: [
            {
              label: "Frontend",
              text: "Next.js with server-side rendering for SEO-optimized landing pages and fast initial loads. Component-driven architecture with reusable UI library.",
            },
            {
              label: "Mobile",
              text: "React Native application deployed to both iOS App Store and Google Play Store as a TWA (Trusted Web Activity) and native app, ensuring seamless cross-platform experience.",
            },
            {
              label: "Backend",
              text: "Node.js/Express RESTful API with MongoDB for flexible document storage. Custom AI matching algorithm that scores candidate-job compatibility based on skills, experience, and preferences.",
            },
            {
              label: "Real-time",
              text: "Socket.io integration for instant notifications when employers express interest in candidates — the platform sees candidates receive approaches within minutes of profile creation.",
            },
            {
              label: "Infrastructure",
              text: "Deployed on scalable cloud infrastructure with CDN optimization for Greek market performance.",
            },
          ],
          techTags: [
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
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Architected and built the full Next.js web application from the ground up, including SSR pages, dynamic routing, and SEO optimization for Greek-language content",
            },
            {
              text: "Developed the React Native mobile experience with push notifications, profile creation flows, and real-time job matching updates",
            },
            {
              text: "Built the RESTful API layer handling candidate profiles, job listings, matching algorithms, and employer-candidate communication",
            },
            {
              text: "Implemented the AI-powered matching system that analyzes candidate skills and experience to surface relevant opportunities with 98% matching accuracy",
            },
            {
              text: "Integrated payment processing for employer subscriptions and premium candidate features",
            },
            {
              text: "Optimized application performance resulting in sub-2-second page loads across the platform",
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "3,800+", label: "Active Listings" },
            { value: "98%", label: "Match Accuracy" },
            { value: "2", label: "App Stores" },
            { value: "6+", label: "Media Features" },
          ],
          paragraph:
            "The platform has been featured across multiple Greek media outlets as a startup changing the employment landscape. Joberos successfully connected thousands of businesses with candidates and continues to grow across the Greek hospitality sector.",
        },
      ],
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
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      alt: "Dukan.pk — e-commerce platform",
    },
    caseStudy: {
      hero: {
        titleLines: ["Dukan.pk — E-Commerce", "Infrastructure Platform"],
        subtitle:
          "Contributed to Pakistan's leading e-commerce infrastructure company — building digital banking software and commerce tools that connect retailers, distributors, and manufacturers with embedded financial services.",
        meta: [
          { label: "Client", value: "Dukan.pk" },
          { label: "Industry", value: "Fintech / E-Commerce" },
          { label: "Role", value: "MERN Stack Developer" },
          { label: "Scale", value: "Thousands of Sellers" },
          {
            label: "Website",
            value: "dukan.pk",
            href: "https://www.dukan.pk",
          },
        ],
      },
      screenshot: {
        url: "https://www.dukan.pk",
        imageSrc:
          "https://assets.dukan.pk/assets/wnassets/new/images/onlineseller.png",
        imageAlt: "Dukan.pk",
        imageStyle: {
          background: "linear-gradient(135deg,#1a1040,#0d0d2b)",
          padding: 40,
        },
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "Pakistan's retail ecosystem was heavily fragmented. Small sellers needed online storefronts, payment processing, and logistics — but building each of these independently was cost-prohibitive. Dukan.pk set out to create an all-in-one infrastructure that would digitize the entire retail supply chain with embedded financial services.",
        },
        {
          title: "Technical Architecture",
          intro:
            "A massive multi-service ecosystem requiring robust, scalable architecture:",
          listItems: [
            {
              label: "Dukan Shops",
              text: "Dynamic storefront generator allowing sellers to create branded online stores with catalog management, order tracking, and customer CRM",
            },
            {
              label: "Dukan Payments",
              text: "Payment orchestration layer integrating JazzCash, Easypaisa, HBL, Visa, Mastercard, and COD — with real-time reconciliation",
            },
            {
              label: "Dukan Logistics",
              text: "Integration hub connecting 13+ delivery partners (TCS, Leopards, Bykea, Daewoo, etc.) with embedded COD collection",
            },
            {
              label: "Dukan DMS",
              text: "Distribution Management System digitizing end-to-end distribution flows including retail ordering, fleet management, inventory tracking, and reporting",
            },
            {
              label: "Dukan Marketplace",
              text: "B2B marketplace enabling direct wholesaler-to-retailer purchasing",
            },
            {
              label: "Dukan Advertising",
              text: "Digital marketing suite including CRM, SMS marketing, Facebook/Instagram adtech engine, and ad designer",
            },
          ],
          techTags: [
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
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Developed and maintained key frontend modules across the seller dashboard including order management, inventory tracking, and analytics views",
            },
            {
              text: "Built RESTful API endpoints for product catalog management, order processing, and seller onboarding workflows",
            },
            {
              text: "Implemented payment gateway integrations ensuring seamless transaction processing across multiple payment providers",
            },
            {
              text: "Worked on the logistics integration layer connecting the platform with delivery partners' APIs for real-time shipment tracking",
            },
            {
              text: "Optimized database queries and implemented caching strategies to handle high-traffic loads during sale events",
            },
            {
              text: "Collaborated with cross-functional teams on feature planning, code reviews, and production deployments",
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "1000s", label: "Active Sellers" },
            { value: "13+", label: "Logistics Partners" },
            { value: "8", label: "Product Lines" },
            { value: "6+", label: "Payment Channels" },
          ],
          paragraph:
            "Dukan.pk has become a critical part of Pakistan's digital commerce ecosystem, empowering thousands of small businesses to go digital. The platform processes significant transaction volume daily and continues to expand its service offerings across the retail supply chain.",
        },
      ],
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
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
      alt: "Apka Muaalij — healthcare platform",
    },
    caseStudy: {
      hero: {
        titleLines: ["Apka Muaalij —", "Doctor Booking Platform"],
        subtitle:
          "Helped build Pakistan's growing healthcare platform that connects patients with 10,000+ doctors across 25+ specialties — featuring video consultations, clinic bookings, lab tests, surgeries, and a mobile app.",
        meta: [
          { label: "Client", value: "Apka Muaalij" },
          { label: "Industry", value: "HealthTech" },
          { label: "Role", value: "Full-Stack Developer" },
          { label: "Doctors", value: "10,000+" },
          {
            label: "Website",
            value: "apkamuaalij.com",
            href: "https://apkamuaalij.com",
          },
        ],
      },
      screenshot: {
        url: "https://apkamuaalij.com",
        imageSrc:
          "https://cdn.apkamuaalij.com/AKM-New-Homepage/Clinic_Consult.png",
        imageAlt: "Apka Muaalij",
        imageStyle: {
          background: "linear-gradient(135deg,#e8f5e9,#fff)",
          padding: 40,
        },
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "Access to quality healthcare in Pakistan remains a challenge — patients struggle to find verified specialists, booking processes are phone-based and inefficient, and telemedicine infrastructure was nearly nonexistent. Apka Muaalij needed a robust digital platform that could serve patients across major cities with features ranging from online video consultations to in-person clinic bookings, lab tests, and surgery coordination.",
        },
        {
          title: "Technical Architecture",
          listItems: [
            {
              label: "Frontend",
              text: "Next.js with server-side rendering for SEO — critical for healthcare search visibility. Dynamic pages for every doctor, specialty, city, and hospital combination ensuring comprehensive indexing.",
            },
            {
              label: "Video Consultation",
              text: "Integrated real-time video SDK enabling doctor-patient video calls with in-session prescription writing and file sharing.",
            },
            {
              label: "Booking Engine",
              text: "Complex scheduling system managing multiple doctor schedules, clinic locations, time slots, and appointment types (video vs. in-person).",
            },
            {
              label: "Payment Integration",
              text: "Wallet system with promotional top-ups, integrated payment gateway for consultation fees.",
            },
            {
              label: "Mobile App",
              text: "Android app on Google Play Store with wallet integration and appointment management.",
            },
            {
              label: "Content Platform",
              text: "Health blog, community forum, and medicine directory for patient education.",
            },
          ],
          techTags: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "Video SDK",
            "Payment Gateway",
            "SEO",
            "Google Play",
            "REST API",
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Built dynamic SEO-optimized pages for doctors, specialties, and city combinations — generating thousands of indexed pages that drive organic search traffic",
            },
            {
              text: "Developed the video consultation flow including room creation, waiting rooms, and in-session UI components",
            },
            {
              text: "Implemented the booking and scheduling engine handling complex multi-location doctor availability",
            },
            {
              text: "Built the patient-facing appointment management dashboard with history, prescriptions, and follow-up tracking",
            },
            {
              text: "Integrated payment gateway and wallet system with promotional credit functionality",
            },
            {
              text: "Optimized Core Web Vitals for healthcare SEO competitiveness across city and specialty pages",
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "10K+", label: "Doctors Listed" },
            { value: "25+", label: "Specialties" },
            { value: "15+", label: "Cities Covered" },
            { value: "4", label: "Service Types" },
          ],
          paragraph:
            "Apka Muaalij has grown to become a significant player in Pakistan's digital health space, enabling patients in 15+ cities to access verified doctors online and offline. The platform handles video consultations, lab test bookings, surgery coordination, and medicine information — creating a comprehensive healthcare ecosystem.",
        },
      ],
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
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
      alt: "Greenorum — climate social network",
    },
    caseStudy: {
      hero: {
        titleLines: ["Greenorum — Environmental", "Social Network"],
        subtitle:
          "Built a purpose-driven social network connecting climate activists, environmental organizations, and sustainability advocates worldwide — with full social media features including feeds, articles, groups, events, and organization profiles.",
        meta: [
          { label: "Client", value: "Greenorum" },
          { label: "Industry", value: "Climate Tech / Social" },
          { label: "Role", value: "Full-Stack Developer" },
          { label: "Reach", value: "Global" },
          {
            label: "Website",
            value: "greenorum.com",
            href: "https://www.greenorum.com",
          },
        ],
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "Environmental activists and organizations lacked a dedicated social platform. Mainstream social media algorithms de-prioritized climate content, and there was no purpose-built space for environmental communities to organize, share research, coordinate events, and build organizations. Greenorum needed a full-featured social network built from scratch — with the depth of features users expect from modern social platforms.",
        },
        {
          title: "Technical Architecture",
          listItems: [
            {
              label: "Social Feed",
              text: "Real-time community feed with media posts (images, polls), likes, comments, and sharing functionality. Content delivery optimized for global users.",
            },
            {
              label: "Articles Platform",
              text: "Long-form article publishing system with rich text editing, categories, and SEO optimization for environmental content.",
            },
            {
              label: "Groups & Spaces",
              text: "Community group functionality with moderation tools, member management, and topic-specific discussion spaces.",
            },
            {
              label: "Organizations",
              text: "Dedicated organization profiles with member directories, verification badges, and content publishing capabilities.",
            },
            {
              label: "Events",
              text: "Event creation and discovery system for environmental conferences, cleanups, and advocacy campaigns.",
            },
            {
              label: "Cloud Infrastructure",
              text: "Cloud-based media storage for user-uploaded images and content with CDN distribution.",
            },
          ],
          techTags: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.io",
            "Cloud Storage",
            "REST API",
            "JWT Auth",
            "Media Processing",
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Built the complete social feed system including post creation, media uploads, likes, comments, and sharing with real-time updates via Socket.io",
            },
            {
              text: "Developed the articles publishing platform with rich text editor, draft management, and SEO-optimized rendering",
            },
            {
              text: "Implemented Groups and Spaces features with role-based access control, moderation tools, and member management",
            },
            {
              text: "Built the Organization profiles system with verification workflows, member directories, and content publishing",
            },
            {
              text: "Developed user authentication and authorization with friend requests, follow systems, and privacy controls",
            },
            {
              text: "Implemented cloud-based media storage pipeline for images with optimization, compression, and CDN distribution",
            },
            {
              text: "Built the events system with creation, discovery, RSVP tracking, and calendar integration",
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "7+", label: "Core Features" },
            { value: "Global", label: "User Base" },
            { value: "Full", label: "Social Platform" },
            { value: "5+", label: "Organizations" },
          ],
          paragraph:
            "Greenorum has established itself as a niche social network for the environmental community, with active organizations from Climate Live South Africa, Climate Reality Tanzania, and individual advocates worldwide using the platform to share climate research, coordinate events, and build community around sustainability initiatives.",
        },
      ],
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
      kind: "image",
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80",
      alt: "Dental Clinic Platform",
    },
    caseStudy: {
      hero: {
        titleLines: ["Dental Clinic Platform", "+ AI Front Desk Agent"],
        subtitle:
          "Designed and built custom dental clinic websites with integrated admin dashboards and an AI-powered front desk agent that autonomously handles patient intake, appointment scheduling, and clinic inquiries for US and UK dental practices.",
        meta: [
          { label: "Client", value: "Fexart Studios" },
          { label: "Industry", value: "Healthcare / AI" },
          { label: "Role", value: "Technical Lead" },
          { label: "Market", value: "US & UK" },
        ],
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "Dental clinics in the US and UK spend significant resources on front desk staff handling repetitive tasks: answering phone calls, scheduling appointments, processing new patient intake forms, and responding to common inquiries. The goal was to build a premium dental web presence with an intelligent AI agent that could handle these interactions autonomously — reducing overhead while improving patient experience.",
        },
        {
          title: "Technical Architecture",
          listItems: [
            {
              label: "Website",
              text: 'Next.js with a "Luxury Medical Precision" design system — Framer Motion page transitions, GSAP scroll animations, and Lenis smooth scrolling creating a premium clinic experience',
            },
            {
              label: "Admin Dashboard",
              text: "Custom-built clinic management panel with appointment calendar, patient records, treatment planning, and analytics",
            },
            {
              label: "AI Front Desk Agent",
              text: "OpenAI-powered conversational agent trained on clinic-specific data — handles appointment booking, insurance questions, treatment inquiries, and new patient registration",
            },
            {
              label: "Content Management",
              text: "Custom CMS allowing clinics to update services, doctor profiles, testimonials, and blog posts without developer intervention",
            },
          ],
          techTags: [
            "Next.js 14",
            "OpenAI API",
            "Node.js",
            "MongoDB",
            "Framer Motion",
            "GSAP",
            "Lenis",
            "Tailwind CSS",
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Led the full technical design and implementation of the dental platform architecture",
            },
            {
              text: "Developed the AI front desk agent with custom prompt engineering, clinic-specific training data, and conversation flow management",
            },
            {
              text: "Built the admin dashboard with appointment management, patient records, and real-time analytics",
            },
            {
              text: 'Implemented the "Luxury Medical Precision" design system with GSAP, Framer Motion, and Lenis',
            },
            {
              text: "Created automated lead capture and nurturing flows integrated with Google Ads campaigns",
            },
            {
              text: "Built the website migration tool to rapidly onboard new clinic clients by extracting and repopulating their existing site content",
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "70%", label: "Reduced Intake Time" },
            { value: "24/7", label: "AI Availability" },
            { value: "3x", label: "Faster Onboarding" },
            { value: "2", label: "Markets Served" },
          ],
        },
      ],
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
    mock: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
      alt: "Website Migration Engine — developer tool",
    },
    caseStudy: {
      hero: {
        titleLines: ["Website Migration", "Engine"],
        subtitle:
          "Built an AI-powered developer tool that automates the entire website migration process — crawling existing sites, extracting content into structured data, and rebuilding them as modern Next.js applications with luxury design aesthetics.",
        meta: [
          { label: "Type", value: "Internal Tool" },
          { label: "Industry", value: "Developer Tools" },
          { label: "Role", value: "Architect & Builder" },
          { label: "Approach", value: "AI-Assisted" },
        ],
      },
      sections: [
        {
          title: "The Challenge",
          paragraph:
            "When onboarding new dental clinic clients, migrating their existing website content to a modern stack was a painful, manual process taking 2-3 weeks per site. Content had to be manually copied, images downloaded and re-optimized, layouts recreated, and SEO metadata preserved. This bottleneck was limiting the agency's ability to scale.",
        },
        {
          title: "Technical Architecture",
          listItems: [
            {
              label: "Crawl Phase",
              text: "Puppeteer-based crawler that navigates the entire existing site, capturing page structures, text content, images, and metadata into a master site-content.json file",
            },
            {
              label: "Transform Phase",
              text: "AI-powered content transformation using Cursor and custom prompts that maps extracted content into typed TypeScript interfaces matching the target Next.js theme structure",
            },
            {
              label: "Build Phase",
              text: "Automated population of the Clara Dentist Next.js theme with extracted content, including image optimization, component mapping, and route generation",
            },
            {
              label: "QA Phase",
              text: "Automated visual regression testing comparing source and target pages for content parity",
            },
          ],
          techTags: [
            "Next.js 14",
            "Cursor AI",
            "Puppeteer",
            "TypeScript",
            "GSAP",
            "Framer Motion",
            "Lenis",
            "Prompt Engineering",
          ],
        },
        {
          title: "My Contribution",
          listItems: [
            {
              text: "Designed the entire crawl-to-QA pipeline architecture and implemented each phase",
            },
            {
              text: "Built the Puppeteer crawler with intelligent page detection, content extraction, and structured output generation",
            },
            {
              text: "Engineered multiple iterations of AI prompts for content transformation — optimizing for accuracy, type safety, and consistent output structure",
            },
            {
              text: "Developed the automated build system that maps extracted JSON to Next.js components",
            },
            {
              text: "Created typed TypeScript interfaces ensuring type-safe content population across all template components",
            },
            {
              text: 'Implemented the "Luxury Medical Precision" redesign aesthetic applied during migration',
            },
          ],
        },
        {
          title: "Impact & Results",
          impactCards: [
            { value: "80%", label: "Time Saved" },
            { value: "4", label: "Pipeline Phases" },
            { value: "Days", label: "vs Weeks" },
            { value: "100%", label: "Content Parity" },
          ],
          paragraph:
            "The migration engine reduced client onboarding time from 2-3 weeks to 2-3 days, enabling the agency to scale its clinic client acquisition significantly. The tool has been used across multiple dental clinic migrations, maintaining consistent design quality while preserving all original content and SEO value.",
        },
      ],
    },
  },
];
