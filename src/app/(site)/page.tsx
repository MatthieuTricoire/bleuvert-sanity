import { MaxWidthContainer } from "@/components/max-width-container";
import { FeatureSection } from "./_components/sections/features-section";
import { sanityFetch } from "@/sanity/lib/client";
import { getLastPosts } from "@/sanity/lib/queries";
import React from "react";
import { ProjectThumbnail } from "@/types/project";
import { LastProjects } from "./_components/sections/last-projects-section";
import Image from "next/image";
import { Typography } from "@/components/typography";
import { EmblaCarousel } from "./_components/carousel";

const HomePage = async () => {
  const postsNumber = 3;

  const projects: ProjectThumbnail[] = await sanityFetch({
    query: getLastPosts,
    qParams: { postsNumber },
    tags: ["post", "category"],
  });

  return (
    <>
      <MaxWidthContainer className="h-[calc(100vh-80px)]">
        <Typography
          component="h1"
          variant="h1"
          className="font-[500] my-20 font-title"
        >
          Studio bleuvert <br /> Architecture, décoration, maître d&apos;oeuvre
        </Typography>

        <EmblaCarousel />
      </MaxWidthContainer>

      <FeatureSection />

      <MaxWidthContainer>
        <LastProjects projects={projects} />
      </MaxWidthContainer>
    </>
  );
  {
    /* <div */
  }
  {
    /*   className="h-[calc(100vh-80px)] bg-cover bg-center" */
  }
  {
    /*   style={{ backgroundImage: "url('/bg.jpg')" }} */
  }
  {
    /* > */
  }
  {
    /*   <MaxWidthContainer className="h-full flex flex-col justify-between"> */
  }
  {
    /*     <h1 className="text-white font-bold text-5xl pt-20 w-fit"> */
  }
  {
    /*       Architecture d&apos;intérieur <br /> */
  }
  {
    /*       Maitrise d&apos;oeuvre <br /> */
  }
  {
    /*       Décoration */
  }
  {
    /*     </h1> */
  }
  {
    /**/
  }
  {
    /*     <Link */
  }
  {
    /*       href="#tomate" */
  }
  {
    /*       className="mb-10 w-fit text-3xl self-center text-black px-6 py-2 rounded-full opacity-80 backdrop-blur bg-slate-50" */
  }
  {
    /*     > */
  }
  {
    /*       Explorer */
  }
  {
    /*     </Link> */
  }
  {
    /*     <FeatureSection /> */
  }
  {
    /*   </MaxWidthContainer> */
  }
  {
    /**/
  }
  {
    /* </div> */
  }
};

export default HomePage;
