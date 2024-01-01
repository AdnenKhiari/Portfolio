import { MetadataRoute } from 'next'
import { getFromFirestore } from './utils'
import { Project } from './projects/(components)/ProjectCard'
 


const url = process.env.SITE_URL
export const dynamic =  'force-dynamic'

export default async function sitemap() : Promise<MetadataRoute.Sitemap> {
    const data = (await getFromFirestore("projects","order")) as Project[]
    const sitemaps : MetadataRoute.Sitemap = [
        {
          url: `${url}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 1,
        },
        ...data.map((d)=>({
            url: `${url}/projects/${d.id}`,
            lastModified: (d.lastUpdateDate?.toDate() ?? new Date()) as Date,
            changeFrequency: 'weekly',
            priority: 0.7,
        } as any))
      ]
    return sitemaps
}