import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bhathiya Lakshan | Full Stack Developer & Software Engineer",
  description:
    "Bhathiya Lakshan is a Full Stack Developer and Software Engineer with expertise in React, Next.js, TypeScript, and modern web technologies. Lead Software Engineer at Digi Pro Solutions with experience at IMOS and Nanosoft Global.",
  keywords: [
    "Bhathiya Lakshan",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Development",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "AI Image Generator",
    "Weather App",
    "Bliss Café",
    "Digi Pro Solutions",
    "IMOS",
    "Sri Lanka Developer",
    "who is bhathiya lakshan",
    "what does bhathiya lakshan do",
    "bhathiya lakshan developer",
  ],
  authors: [{ name: "Bhathiya Lakshan" }],
  creator: "Bhathiya Lakshan",
  publisher: "Bhathiya Lakshan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bhathiya.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bhathiya Lakshan | Full Stack Developer & Software Engineer",
    description:
      "Bhathiya Lakshan is a Full Stack Developer and Software Engineer with expertise in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://bhathiya.dev",
    siteName: "Bhathiya Lakshan ",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Bhathiya Lakshan - Full Stack Developer and Software Engineer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhathiya Lakshan | Full Stack Developer & Software Engineer",
    description:
      "Bhathiya Lakshan is a Full Stack Developer and Software Engineer with expertise in React, Next.js, TypeScript, and modern web technologies.",
    site: "@smbhathiya",
    creator: "@smbhathiya",
    images: ["/cover.png"],
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
  other: {
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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
                  image: "https://bhathiya.dev/bhathiya-lakshan-2.png",
                  jobTitle: "Lead Software Engineer",
                  worksFor: [
                    {
                      "@type": "Organization",
                      name: "Ishara Madhushan Online School (IMOS)",
                    },
                    {
                      "@type": "Organization",
                      name: "Digi Pro Solutions",
                    },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kadawatha",
                    addressCountry: "LK",
                  },
                  email: "info@bhathiya.dev",
                  sameAs: [
                    "https://github.com/smbhathiya",
                    "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                    "https://x.com/smbhathiya",
                    "https://www.facebook.com/smbhathiya",
                  ],
                  description:
                    "Bhathiya Lakshan is a Lead Software Engineer based in Sri Lanka, specializing in Next.js, React, TypeScript, and cloud architecture.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bhathiya.dev/#website",
                  name: "Bhathiya Lakshan",
                  url: "https://bhathiya.dev",
                  description:
                    "Professional portfolio of Bhathiya Lakshan - Lead Software Engineer and Full Stack Developer.",
                  author: {
                    "@id": "https://bhathiya.dev/#person",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
