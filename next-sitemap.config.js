/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bhathiya.dev",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
  },
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*', '/private/*'],
};