import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})

export async function getPostBySlug (slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }
    })
    return post.contents[0]
  } catch (e) {
    console.log('--getPostBySlug--')
    console.log(e)
  }
}

export async function getAllSlugs (limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit }
    })
    return slugs.contents
  } catch (e) {
    console.log('-- getAllSlugs --')
    console.log(e)
  }
}
