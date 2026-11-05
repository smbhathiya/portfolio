import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundGlow } from "@/components/ui/background-glow";
import { NavBar } from "@/components/sections/nav-bar";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/json-ld";
import { education } from "@/data/aboutData";
import { OG_IMAGE, PERSON, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const DEFAULT_TITLE = "Bhathiya Lakshan | Full Stack Software Engineer, Sri Lanka";
const DEFAULT_DESCRIPTION =
  "Software Engineer in Sri Lanka specializing in React, Next.js, TypeScript and Node.js. I build custom LMS, payroll, CRM and cloud systems for businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Defaults inherited by every page; pages override with their own values.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [{ ...OG_IMAGE, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@smbhathiya",
    creator: "@smbhathiya",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  // Set these env vars in Vercel after adding the site to Search Console / Bing.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: SITE_NAME, statusBarStyle: "default" },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6e4dc" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

const address = {
  "@type": "PostalAddress",
  addressLocality: PERSON.locality,
  addressRegion: PERSON.region,
  addressCountry: PERSON.country,
};

const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        url: absoluteUrl(PERSON.image),
        width: PERSON.imageWidth,
        height: PERSON.imageHeight,
      },
      jobTitle: PERSON.jobTitle,
      worksFor: [
        { "@type": "Organization", name: "Ishara Madhushan Online School (IMOS)" },
        { "@type": "Organization", name: "Digi Pro Solutions" },
      ],
      alumniOf: [
        ...new Set(education.map((e) => e.institution)),
      ].map((name) => ({ "@type": "CollegeOrUniversity", name })),
      address,
      email: PERSON.email,
      sameAs: PERSON.sameAs,
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        ".NET",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Full Stack Web Development",
      ],
      description:
        "Bhathiya Lakshan is a Software Engineer based in Sri Lanka, specialising in Next.js, React, TypeScript, and cloud architecture.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#professionalService`,
      name: "Bhathiya.dev - Custom Software Development",
      image: absoluteUrl(OG_IMAGE.url),
      url: SITE_URL,
      telephone: PERSON.telephone,
      email: PERSON.email,
      founder: { "@id": `${SITE_URL}/#person` },
      address,
      geo: { "@type": "GeoCoordinates", latitude: "7.0016", longitude: "79.9497" },
      areaServed: ["LK", "Worldwide"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Professional portfolio of Bhathiya Lakshan - Software Engineer and Full Stack Developer.",
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <JsonLd data={siteGraph} />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundGlow />
          <div className="min-h-screen flex flex-col">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
