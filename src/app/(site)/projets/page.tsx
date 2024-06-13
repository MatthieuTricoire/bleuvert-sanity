import {
  getCategoriesContainingProjects,
  getPostsByCategorySlug,
} from "@/sanity/lib/queries";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { Category } from "@/types/category";
import { Categories } from "@/components/categories";
import { MaxWidthContainer } from "@/components/max-width-container";
import { ProjectThumbnail } from "@/types/project";
import { ProjectCard } from "@/components/posts/post-card";
import { Typography } from "@/components/typography";

export const metadata: Metadata = {
  title: "Studio bleuvert - Agence architecture intérieur et décoration - Pau",
};

export default async function Page({
  searchParams,
}: {
  searchParams: { categorie: string };
}) {
  const categorySlug = searchParams.categorie || "";

  const categoriesList: Category[] = await sanityFetch({
    query: getCategoriesContainingProjects,
    qParams: {},
    tags: ["category, post"],
  });

  const projectsByCategory: ProjectThumbnail[] = await sanityFetch({
    query: getPostsByCategorySlug,
    qParams: { categorySlug },
    tags: ["category, post"],
  });

  return (
    <MaxWidthContainer>
      <div className=" h-full flex-1 w-full flex flex-col  gap-10">
        <Typography variant="h1" component="h1" className="font-medium">
          Nos Réalisations
        </Typography>

        <Categories
          categoriesList={categoriesList}
          projectsByCategory={projectsByCategory}
        />

        <div className="grid md:grid-cols-3 gap-10 md:gap-4">
          {projectsByCategory.map((project) => {
            return <ProjectCard key={project._id} project={project} />;
          })}
        </div>
      </div>
    </MaxWidthContainer>
  );
}

function Loading() {
  return <h2>Loading ...</h2>;
}
