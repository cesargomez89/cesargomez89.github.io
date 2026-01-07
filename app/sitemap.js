import { posts } from './data/posts'

export const dynamic = 'force-static'

export default function sitemap() {
  const baseUrl = 'https://cesargomez89.github.io'

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...routes, ...blogPosts]
}
