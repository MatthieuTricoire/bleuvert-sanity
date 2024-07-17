import { MaxWidthContainer } from "@/components/max-width-container";
import { FeatureSection } from "./_components/sections/features-section";
import React from "react";
import { LastProjects } from "./_components/sections/last-projects-section";
import { Typography } from "@/components/typography";
import { EmblaCarousel } from "./_components/carousel";
import { getLastXProject } from "@/data/project";
import Image from "next/image";

const HomePage = async () => {
  const postsNumber = 3;

  const projects = await getLastXProject(postsNumber)

  return (
    <>
      <div className="w-full h-screen  relative">
        {/* <Image src={"/carousel/n1.jpg"} fill className="object-cover object-center -z-10" quality={100} alt="Bibliothèque aménagée et décorée" /> */}
        <EmblaCarousel />
        <div className="flex items-center justify-center h-full"><Typography
          component="h1"
          variant="h1"
          className="bg-white/70 rounded-md p-4 flex items-center justify-center md:p-8"
        >
          Architecture d&apos;intérieur <br /> Décoration - Maîtrise d&apos;oeuvre
        </Typography></div>
      </div>

      {/* <MaxWidthContainer className="h-[calc(100vh-80px)] relative flex justify-center items-center "> */}
      {/*   <Typography */}
      {/*     component="h1" */}
      {/*     variant="h1" */}
      {/*     className="bg-white/70 rounded-md p-4 h-fit" */}
      {/*   > */}
      {/*     Architecture d&apos;intérieur <br /> Décoration - Maîtrise d&apos;oeuvre */}
      {/*   </Typography> */}
      {/**/}
      {/*   <EmblaCarousel /> */}
      {/* </MaxWidthContainer > */}

      <FeatureSection />

      <MaxWidthContainer>
        <LastProjects projects={projects} />
      </MaxWidthContainer>
    </>
  );
}
export default HomePage;
