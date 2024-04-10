import React from "react";
import { getPostBySlug } from "../../../../sanity/lib/queries";
import Image from "next/image";
import { Gallery } from "@/components/gallery";
import Aside from "./components/aside";
import Body from "./components/body";
import PhotographerText from "./components/photographer";

type SlugProjectPageProps = {
  params: {
    slug: string;
  };
};

const SlugProjectPage = async ({ params }: SlugProjectPageProps) => {
  const post = await getPostBySlug(params.slug);
  console.log(post.mainImage);

  let photographText;
  if (post.photographer && post.photographer.firstName) {
    photographText =
      post.photographer.firstName + " " + post.photographer.lastName;
  }

  return (
    <div className="flex items-center flex-col flex-1 mt-20 gap-12 md:gap-20 w-full">
      <div>
        <h1 className="text-center font-semibold text-3xl md:text-5xl">
          {post.title}
        </h1>
        <h2
          className="text-center font-normal text-xl
          md:text-3xl"
        >
          {post.subtitle}
        </h2>
      </div>

      <Image
        src={post.mainImage.src}
        placeholder="blur"
        blurDataURL={post.mainImage.blurDataUrl}
        alt="Image de couverture du projet"
        sizes="50vw"
        width={post.mainImage.width}
        className=" max-w-xs md:max-w-4xl"
        height={post.mainImage.height}
      />

      <section className="w-full flex flex-col md:flex-row md:justify-center gap-8 md:gap-16">
        <Aside localisation={post.location} area={post.area} />
        <div>
          <Body body={post.body} />
          <PhotographerText photographer={post.photographer} />
        </div>
      </section>

      <section className="w-full">
        <Gallery photos={post.imageGallery} />
      </section>
    </div>
  );
};

export default SlugProjectPage;
