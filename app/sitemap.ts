import { MetadataRoute } from 'next';

const BASE_URL = 'https://mewgenics.gguidehub.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    'cat-breeds',
    'team-builds',
    'battle-tactics',
    'breeding-guide',
    'items',
    'beginner-guide',
    'cat-tier-list',
    'faq',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route ? `/${route}` : ''}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
