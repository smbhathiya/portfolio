import projectsData, { getPublicProjects } from "@/data/projects";
import { education, workExperience } from "@/data/aboutData";
import { PERSON, SITE_URL, absoluteUrl } from "@/lib/site";

// Plain-text site summary for AI assistants and LLM-based search (llmstxt.org).
// Generated from the same data as the site, so it never goes stale.
export const dynamic = "force-static";

export function GET() {
  const publicProjects = getPublicProjects();
  const internal = projectsData.filter((p) => p.isInternal);

  const body = `# ${PERSON.name}

> ${PERSON.name} is a Full Stack Software Engineer based in ${PERSON.locality}, Sri Lanka, building web applications and internal business systems (LMS, payroll, CRM, inventory) with React, Next.js, TypeScript, Node.js, .NET and PostgreSQL, and managing cloud infrastructure on Vercel and Cloudflare.

Website: ${SITE_URL}
Email: ${PERSON.email}
Available for freelance projects, full-time roles and collaborations.

## Pages

- [Home](${SITE_URL}): profile, experience, skills, featured projects and contact form
- [Projects](${absoluteUrl("/projects")}): all public projects and professional work

## Public projects

${publicProjects
  .map(
    (p) =>
      `- [${p.title}](${absoluteUrl(`/projects/${p.slug}`)})${p.tagline ? ` - ${p.tagline}` : ""}: ${p.description}`,
  )
  .join("\n")}

## Professional work (under NDA, no public pages)

${internal.map((p) => `- ${p.title}: ${p.description}`).join("\n")}

## Experience

${workExperience.map((w) => `- ${w.title}, ${w.company} (${w.duration})`).join("\n")}

## Education

${education.map((e) => `- ${e.title}, ${e.institution} (${e.duration})`).join("\n")}

## Profiles

${PERSON.sameAs.map((u) => `- ${u}`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
