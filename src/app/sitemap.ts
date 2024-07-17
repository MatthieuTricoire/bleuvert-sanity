import { getProjectsByCategory } from "@/data/project"
import { url } from "inspector"

const BASE_URL = "https://studio-bleuvert.com/"

export default async function sitemap() {
  const projects = await getProjectsByCategory("")

  const projects_sitemap = projects.map(({ slug, project_date }) => ({
    url: `${BASE_URL}projet/${slug}`,
    lastModified: project_date
  }))

  const routes = ['', "/projets", "/le-studio", "/contact", "/prestations", "prestations/architecture-interieur", "/prestations/architecture-commerciale", "/prestations/decoration-interieur", "/prestations/conseil-avant-achat", "/prestations/conseil-achat-vefa"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString()
  }))


  return [...routes, ...projects_sitemap]

}
