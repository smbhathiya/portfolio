/**
 * Single source of truth for SEO-relevant site facts.
 * Keep SITE_URL in sync with the primary domain configured in Vercel.
 */
export const SITE_URL = "https://bhathiya.dev";
export const SITE_NAME = "Bhathiya Lakshan";

export const PERSON = {
  name: "Bhathiya Lakshan",
  jobTitle: "Software Engineer",
  email: "info@bhathiya.dev",
  telephone: "+94758041606",
  image: "/bhathiya-lakshan.jpg",
  imageWidth: 1086,
  imageHeight: 1448,
  locality: "Kadawatha",
  region: "Western Province",
  country: "LK",
  sameAs: [
    "https://github.com/smbhathiya",
    "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
    "https://x.com/smbhathiya",
    "https://www.facebook.com/smbhathiya",
  ],
};

export const OG_IMAGE = {
  url: "/og-cover.jpg",
  width: 1200,
  height: 630,
  alt: "Bhathiya Lakshan - Software Engineer & Full Stack Developer in Sri Lanka",
};

export const absoluteUrl = (path = "/") =>
  path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? "" : path}`;

/** Trim text to a search-snippet-friendly length without cutting words. */
export function truncate(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s-]+$/, "")}…`;
}

/** Serialize JSON-LD safely for inlining in a <script> tag. */
export const serializeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
