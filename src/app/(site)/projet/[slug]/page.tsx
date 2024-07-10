import React from "react";
import Image from "next/image";
import { Gallery } from "@/components/gallery";
import Aside from "./components/aside";
import PhotographerText from "./components/photographer";
import { Metadata } from "next";
import { getProjectBySlug } from "@/data/project";
import { Typography } from "@/components/typography";
import { MaxWidthContainer } from "@/components/max-width-container";
import ProjectDescription from "./components/project-description";
import { cn } from "@/lib/utils";
import { BreadcrumbComponent } from "@/components/breadcrumb";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const projectSlug = params.slug;

  const project = await getProjectBySlug(projectSlug)

  const imageUrl = `${project.mainImage.src}?w=630&h=630`;

  return {
    title: `Studio bleuvert - Projet ${project.title}`,
    description: project.subtitle,
    openGraph: {
      images: { url: `${imageUrl}`, width: 630, height: 630 },
    },
  };
}
const ProjectPage = async ({ params }: ProjectPageProps) => {

  const project = await getProjectBySlug(params.slug)

  console.log(project)
  return (
    <MaxWidthContainer className="flex flex-col items-center mt-10">
      <BreadcrumbComponent classname="self-start" />

      <Typography variant="h1" component="h1" className="">{project.title}</Typography>
      <Typography variant="h3" component="h3" className="border-b-0 lg:mb-8 text-center">{project.subtitle}</Typography>


      <Image
        src={project.mainImage.src}
        priority
        placeholder="blur"
        blurDataURL={project.mainImage.blurDataUrl}
        alt="Image de couverture du projet"
        sizes="(max-width:768px) 320px, 896px )"
        width={project.mainImage.width}
        height={project.mainImage.height}
        // className=" max-w-xs md:max-w-lg"
        className={cn({
          "w-full": project.mainImage.width > project.mainImage.height,
          " object-cover sm:max-h-screen object-center w-fit": project.mainImage.width <= project.mainImage.height
        })}
      />

      <section className="w-full my-8  flex flex-col py-4 px-4 md:flex-row md:justify-center gap-8 md:gap-16">
        <Aside localisation={project.location} area={project.area} />
        <div className="flex flex-col gap-4">
          <ProjectDescription body={project.body} />
          <PhotographerText photographer={project.photographer} />
        </div>
      </section>


      <section className="w-full">
        <Gallery photos={project.imageGallery} />
      </section>
    </MaxWidthContainer>);
};

export default ProjectPage;
