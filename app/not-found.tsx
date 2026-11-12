import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowLeft, IconLayoutGrid, IconMail } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/", label: "Home", icon: IconArrowLeft },
  { href: "/projects", label: "Projects", icon: IconLayoutGrid },
  { href: "/#contact", label: "Contact", icon: IconMail },
];

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-32">
      <div className="glass rounded-lg p-8 md:p-12 max-w-lg w-full text-center">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of
          these instead:
        </p>
        <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-2 text-sm font-semibold glass-subtle px-4 py-2 rounded-lg hover:border-primary/30 hover:text-primary transition-colors"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
