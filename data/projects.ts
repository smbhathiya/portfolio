export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  images: string[];
  tag: string[];
  /** Short descriptive phrase used in page titles, e.g. "Coffee Shop Website". */
  tagline?: string;
  /** Search-result description (max ~155 chars). Falls back to a truncated description. */
  metaDescription?: string;
  /** Technologies used - shown on the case study page. */
  stack?: string[];
  /** Key features - shown on the case study page. */
  features?: string[];
  previewUrl?: string;
  gitUrl?: string;
  isInternal?: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    slug: "enterprise-expense-management-system",
    title: "Enterprise Expense Management System",
    description:
      "A proprietary full-stack application designed to track and manage organizational expenditures. Features include real-time expense logging, category-based reporting, and approval workflows, engineered with Next.js and Neon PostgreSQL for robust data integrity.",
    images: [],
    tag: ["All", "Professional", "Full Stack"],
    previewUrl: "#",
    isInternal: true,
  },
  {
    id: 2,
    slug: "hr-automated-payroll-platform",
    title: "HR & Automated Payroll Platform",
    description:
      "A specialized internal system for managing 50+ employees' lifecycles. Automates complex salary calculations, attendance tracking, and leave management, significantly streamlining HR operations at Ishara Madhushan Online School.",
    images: [],
    tag: ["All", "Professional", "Full Stack"],
    previewUrl: "#",
    isInternal: true,
  },
  {
    id: 3,
    slug: "student-payment-enrollment-system",
    title: "Student Payment & Enrollment System",
    description:
      "A high-traffic system built to manage student class enrollments and payment tracking. Ensures secure handling of financial transactions and real-time access management for digital classes.",
    images: [],
    tag: ["All", "Professional", "Web"],
    previewUrl: "#",
    isInternal: true,
  },
  {
    id: 10,
    slug: "call-crm-management-system",
    title: "Call & CRM Management System",
    description:
      "An internal communication tool engineered to manage customer inquiries and call logs. Integrates with existing databases to provide staff with real-time student insights during calls.",
    images: [],
    tag: ["All", "Professional", "Web"],
    previewUrl: "#",
    isInternal: true,
  },
  {
    id: 11,
    slug: "inventory-store-logistics-system",
    title: "Inventory & Store Logistics System",
    description:
      "A tailored inventory management app for tracking physical educational materials, including tutes and books. Optimized for warehouse operations and distribution tracking.",
    images: [],
    tag: ["All", "Professional", "Web"],
    previewUrl: "#",
    isInternal: true,
  },
  {
    id: 14,
    slug: "utilbee",
    metaDescription:
      "UtilBee is a free collection of simple, fast online utility tools that run right in your browser, made for everyday developer and general tasks.",
    title: "UtilBee",
    description:
      "Simple, fast, and free tools for your everyday tasks right in your browser. Features a collection of useful utilities crafted for daily developer and general workflows.",
    images: ["/projects/toolkit.jpg"],
    tagline: "Free Online Utility Tools",
    tag: ["All", "Web"],
    previewUrl: "https://utilbee.bhathiya.dev",
  },
  {
    id: 12,
    slug: "green-planet",
    metaDescription:
      "Green Planet is an eco awareness website on climate change, pollution, wildlife conservation and sustainable living, with cinematic visuals.",
    title: "Green Planet",
    description:
      "A modern environmental awareness website focused on protecting nature and promoting eco-friendly living. Educates users about climate change, pollution, wildlife conservation, and sustainable habits through cinematic visuals and interactive content.",
    images: ["/projects/greenplanet.jpg"],
    tagline: "Eco Awareness Website",
    features: [
      "Educational content on climate change, pollution and wildlife conservation",
      "Cinematic visuals and interactive sections",
      "Practical tips for sustainable, eco-friendly living",
    ],
    tag: ["All", "Web"],
    previewUrl: "https://greenplanet.bhathiya.dev",
  },
  {
    id: 13,
    slug: "life-plus",
    metaDescription:
      "Life Plus is a personal wellness web app with a BMI calculator, water intake tracker, calorie counter, habit tracking and nutrition guidance.",
    title: "Life Plus",
    description:
      "A premium, interactive personal wellness companion designed to empower users to take control of their health. Features custom-built utility tools including a BMI calculator, water intake tracker, and calorie counter, integrated with daily habit tracking and nutrition guidance, all presented through a sleek, motion-driven dashboard.",
    images: ["/projects/lifeplus.jpg"],
    tagline: "Personal Wellness Web App",
    features: [
      "BMI calculator",
      "Water intake tracker",
      "Calorie counter",
      "Daily habit tracking and nutrition guidance",
      "Motion-driven dashboard UI",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/smbhathiya/life-plus-web.git",
    previewUrl: "https://lifeplus.bhathiya.dev",
  },
  {
    id: 9,
    slug: "vantagecar-car-dealership",
    metaDescription:
      "VantageCar is a modern car dealership website with advanced vehicle search and filtering, built for performance and SEO in automotive e-commerce.",
    title: "VantageCar - Car Dealership",
    description:
      "A modern car dealership platform with advanced vehicle search and filtering capabilities. Focused on performance and SEO for automotive e-commerce.",
    images: ["/projects/vantagecar.jpg"],
    tagline: "Car Dealership Website",
    features: [
      "Advanced vehicle search and filtering",
      "Performance- and SEO-focused build for automotive e-commerce",
    ],
    tag: ["All", "Web"],
    previewUrl: "https://vantagecar.bhathiya.dev",
  },
  {
    id: 8,
    slug: "business-landing-page-template",
    metaDescription:
      "Free, open-source business landing page template built with Next.js and Tailwind CSS. Clean, fully responsive single-page layout, ready to deploy.",
    title: "Business Landing Page - Open Source Template",
    description:
      "A clean, modern, and fully responsive single-page website template designed for businesses. Built using Next.js and Tailwind CSS, perfect for rapid deployment.",
    images: ["/projects/landingpage.jpg"],
    tagline: "Next.js Template",
    stack: ["Next.js", "Tailwind CSS"],
    features: [
      "Clean, modern single-page layout for businesses",
      "Fully responsive across devices",
      "Ready for rapid deployment",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/smbhathiya/landing-page-2025.git",
    previewUrl: "https://landing.bhathiya.dev",
  },
  {
    id: 5,
    slug: "bliss-cafe-coffee-shop",
    metaDescription:
      "Bliss Café is a modern, responsive coffee shop website built with Next.js and Tailwind CSS, featuring a sleek layout and premium design.",
    title: "Bliss Café - Coffee Shop",
    description:
      "A modern and responsive coffee shop website built using Next.js and Tailwind CSS. Showcases sleek UI alignment and premium design aesthetics.",
    images: ["/projects/blisscafe.jpg"],
    tagline: "Coffee Shop Website",
    stack: ["Next.js", "Tailwind CSS"],
    tag: ["All", "Web"],
    previewUrl: "https://blisscafe.bhathiya.dev",
  },
];

export default projectsData;

/** Projects with a public case study page (not under NDA, has a screenshot). */
export function getPublicProjects() {
  return projectsData.filter((p) => !p.isInternal && p.images.length > 0);
}

export function getProject(slug: string) {
  return getPublicProjects().find((p) => p.slug === slug);
}
