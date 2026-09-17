import { MetadataRoute } from 'next'
import projectsData from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projectsData
    .filter((p) => !p.isInternal && p.images && p.images.length > 0)
    .map((p) => ({
      url: `https://bhathiya.dev/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [
    {
      url: 'https://bhathiya.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bhathiya.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectRoutes,
  ]
}
