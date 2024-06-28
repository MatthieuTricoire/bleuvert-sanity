import React from "react";
import { getPostBySlugQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import { Gallery } from "@/components/gallery";
import Aside from "./components/aside";
import Body from "./components/body";
import PhotographerText from "./components/photographer";
import { BreadcrumbComponent } from "./components/breadcrumb";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import { Project } from "@/types/project";
import { MaxWidthContainer } from "@/components/max-width-container";

type SlugProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const project: Project = await sanityFetch({
    query: getPostBySlugQuery,
    qParams: { postSlug: slug },
    tags: ["post", "category"],
  });

  const imageUrl = `${project.mainImage.src}?w=630&h=630`;

  return {
    title: `Studio bleuvert - Projet ${project.title}`,
    description: project.subtitle,
    openGraph: {
      images: { url: `${imageUrl}`, width: 630, height: 630 },
    },
  };
}
const SlugProjectPage = async ({ params }: SlugProjectPageProps) => {
  const project: Project = await sanityFetch({
    query: getPostBySlugQuery,
    qParams: { postSlug: params.slug },
    tags: ["post", "category"],
  });

  let photographText;
  if (project.photographer && project.photographer.firstName) {
    photographText =
      project.photographer.firstName + " " + project.photographer.lastName;
  }

  return (
    <div className="flex items-center flex-col flex-1 mt-20 gap-12 md:gap-20 w-full">
      <MaxWidthContainer>
        <div>
          <h1 className="text-center font-semibold text-3xl md:text-5xl">
            {project.title}
          </h1>
          <h2
            className="text-center font-normal text-xl
          md:text-3xl"
          >
            {project.subtitle}
          </h2>
        </div>

        <BreadcrumbComponent project={project} />

        <Image
          src={project.mainImage.src}
          priority
          placeholder="blur"
          blurDataURL={project.mainImage.blurDataUrl}
          alt="Image de couverture du projet"
          sizes="(max-width:768px) 320px, 896px )"
          width={896}
          className=" max-w-xs md:max-w-4xl"
          height={597}
        />

        <section className="w-full  flex flex-col px-4 md:flex-row md:justify-center gap-8 md:gap-16">
          <Aside localisation={project.location} area={project.area} />
          <div className="w-full">
            <Body body={project.body} />
            <PhotographerText photographer={project.photographer} />
          </div>
        </section>
      </MaxWidthContainer>

      <section className="w-full">
        <Gallery photos={project.imageGallery} />
      </section>
    </div>
  );
};

export default SlugProjectPage;
