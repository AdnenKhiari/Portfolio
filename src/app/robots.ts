import { MetadataRoute } from 'next'
 
const uri = process.env.SITE_URL
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: uri,
    sitemap: uri+'/sitemap.xml',
  }
}