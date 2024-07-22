import { sanityFetch } from "@/sanity/lib/client";
import { Project, ProjectThumbnail } from "@/types/project";
import { getLastProjectsQuery, getProjectBySlugQuery, getProjectsByCategorySlugQuery } from "@/sanity/lib/queries";

export const getProjectsByCategory = async (categorySlug: string): Promise<ProjectThumbnail[]> => {
  return await sanityFetch({
    query: getProjectsByCategorySlugQuery,
    qParams: { categorySlug },
    tags: ["category, post"],
  });
}

export const getProjectBySlug = async (projectSlug: string) => {
  const project: Project = await sanityFetch({
    query: getProjectBySlugQuery,
    qParams: { postSlug: projectSlug },
    tags: ["post", "category"],
  })

  if (project && project.photographer && project.photographer.firstName && project.photographer.lastName) {
    project.photographer.name = project.photographer.firstName + " " + project.photographer.lastName
  }

  return project
};


const postsNumber = 3;

export const getLastXProject = async (projectNumber: number): Promise<ProjectThumbnail[]> => {
  return await sanityFetch({
    query: getLastProjectsQuery,
    qParams: { postsNumber },
    tags: ["post", "category"],
  });
}




