import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundGlow } from "@/components/ui/background-glow";
import { PageLoader } from "@/components/ui/page-loader";
import { NavBar } from "@/components/sections/nav-bar";
import { Footer } from "@/components/sections/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhathiya.dev"),
  title: {
    default:
      "Bhathiya Lakshan | Software Engineer & Full Stack Developer Sri Lanka",
    template: "%s | Bhathiya Lakshan",
  },
  description:
    "Bhathiya Lakshan is a Software Engineer based in Sri Lanka specializing in React, Next.js, TypeScript, and Node.js - architecting custom LMS, payroll, CRM, and cloud systems.",
  authors: [{ name: "Bhathiya Lakshan", url: "https://bhathiya.dev" }],
  creator: "Bhathiya Lakshan",
  publisher: "Bhathiya Lakshan",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bhathiya Lakshan",
    "application-name": "Bhathiya Lakshan",
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://bhathiya.dev/#person",
                  name: "Bhathiya Lakshan",
                  url: "https://bhathiya.dev",
                  image: {
                    "@type": "ImageObject",
                    url: "https://bhathiya.dev/bhathiya_2.png",
                    width: 1086,
                    height: 1448,
                  },
                  jobTitle: "Software Engineer",
                  worksFor: [
                    {
                      "@type": "Organization",
                      name: "Ishara Madhushan Online School (IMOS)",
                    },
                    { "@type": "Organization", name: "Digi Pro Solutions" },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kadawatha",
                    addressRegion: "Western Province",
                    addressCountry: "LK",
                  },
                  email: "info@bhathiya.dev",
                  sameAs: [
                    "https://github.com/smbhathiya",
                    "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                    "https://x.com/smbhathiya",
                    "https://www.facebook.com/smbhathiya",
                  ],
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "AWS",
                    "Docker",
                    "PostgreSQL",
                    "Full Stack Web Development",
                  ],
                  description:
                    "Bhathiya Lakshan is a Software Engineer based in Sri Lanka, specialising in Next.js, React, TypeScript, and cloud architecture.",
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://bhathiya.dev/#professionalService",
                  name: "Bhathiya.dev - Custom Software Development",
                  image: "https://bhathiya.dev/cover.png",
                  url: "https://bhathiya.dev",
                  telephone: "+94758041606",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kadawatha",
                    addressRegion: "Western Province",
                    addressCountry: "LK",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "7.0016",
                    longitude: "79.9497",
                  },
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "09:00",
                    closes: "18:00",
                  },
                  priceRange: "$$",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bhathiya.dev/#website",
                  name: "Bhathiya Lakshan",
                  url: "https://bhathiya.dev",
                  description:
                    "Professional portfolio of Bhathiya Lakshan - Software Engineer and Full Stack Developer.",
                  author: { "@id": "https://bhathiya.dev/#person" },
                  inLanguage: "en-LK",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="antialiased font-sans"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoader />
          <BackgroundGlow />
          <div className="min-h-screen flex flex-col">
            <NavBar />
            {children}
            {/* Footer hidden on mobile - bottom nav is the primary navigation */}
            <div className="hidden md:block">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
