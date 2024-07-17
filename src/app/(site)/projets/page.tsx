import { Metadata } from "next";
import { Categories } from "@/components/categories";
import { MaxWidthContainer } from "@/components/max-width-container";
import { ProjectCard } from "@/components/project/project-card";
import { Typography } from "@/components/typography";
import { getCategoriesList } from "@/data/category";
import { getProjectsByCategory } from "@/data/project";
import { BreadcrumbComponent } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Studio bleuvert - Agence architecture intérieur et décoration - Pau",
};

export default async function Page({
  searchParams,
}: {
  searchParams: { categorie: string };
}) {

  const categories = await getCategoriesList()

  const categorySlug = searchParams.categorie || "";
  const projectsByCategory = await getProjectsByCategory(categorySlug)


  return (
    <MaxWidthContainer className="mt-10">

      <BreadcrumbComponent />

      <div className="w-full flex flex-col">
        <Typography variant="h1" component="h1" >
          Nos Réalisations
        </Typography>

        <Categories
          categoriesList={categories}
          projectsByCategory={projectsByCategory}
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
          {projectsByCategory.map((project) => {
            return <ProjectCard key={project._id} project={project} />;
          })}
        </div>
      </div>
    </MaxWidthContainer>
  );
}

