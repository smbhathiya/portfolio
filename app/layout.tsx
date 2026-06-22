import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundGlow } from "@/components/ui/background-glow";
import { PageLoader } from "@/components/ui/page-loader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhathiya.dev"),
  title: {
    default: "Bhathiya Lakshan | Software Engineer & Full Stack Developer",
    template: "%s | Bhathiya Lakshan",
  },
  description:
    "Bhathiya Lakshan is a Software Engineer from Sri Lanka specialising in React, Next.js, TypeScript and Node.js — building scalable web applications and cloud systems.",
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
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#10b981",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bhathiya Lakshan",
    "application-name": "Bhathiya Lakshan",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Theme color — adapts to light/dark */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)"  content="#0a0a0a" />
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
                    url: "https://bhathiya.dev/bhathiya-lakshan-2.png",
                    width: 800,
                    height: 800,
                  },
                  jobTitle: "Software Engineer",
                  worksFor: [
                    { "@type": "Organization", name: "Ishara Madhushan Online School (IMOS)" },
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
                    "React", "Next.js", "TypeScript", "Node.js", "AWS",
                    "Docker", "PostgreSQL", "Full Stack Web Development",
                  ],
                  description:
                    "Bhathiya Lakshan is a Software Engineer based in Sri Lanka, specialising in Next.js, React, TypeScript, and cloud architecture.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bhathiya.dev/#website",
                  name: "Bhathiya Lakshan",
                  url: "https://bhathiya.dev",
                  description:
                    "Professional portfolio of Bhathiya Lakshan — Software Engineer and Full Stack Developer.",
                  author: { "@id": "https://bhathiya.dev/#person" },
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased font-sans`}
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
