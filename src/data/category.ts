import { sanityFetch } from "@/sanity/lib/client";
import { getCategoriesContainingProjects } from "@/sanity/lib/queries";
import { Category } from "@/types/category";



export const getCategoriesList = async (): Promise<Category[]> => {
  return await sanityFetch({
    query: getCategoriesContainingProjects,
    qParams: {},
    tags: ["category, post"],
  })
};


