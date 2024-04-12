import React from "react";
import {
  getPostBySlug,
  getPostBySlugQuery,
} from "../../../../sanity/lib/queries";
import Image from "next/image";
import { Gallery } from "@/components/gallery";
import Aside from "./components/aside";
import Body from "./components/body";
import PhotographerText from "./components/photographer";
import { BreadcrumbComponent } from "./components/breadcrumb";
import { sanityFetch } from "../../../../sanity/lib/client";
import { Post } from "@/types/post";
import { Metadata } from "next";

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

  const post: Post = await sanityFetch({
    query: getPostBySlugQuery,
    qParams: { postSlug: slug },
    tags: ["post", "category"],
  });

  console.log(post.mainImage.src);

  return {
    title: `Studio bleuvert - Projet ${post.title}`,
    description: post.subtitle,
    // openGraph: {
    //   images: [
    //     {
    //       // url: post.mainImage.src,
    //     },
    //   ],
    // },
  };
}
const SlugProjectPage = async ({ params }: SlugProjectPageProps) => {
  const post: Post = await sanityFetch({
    query: getPostBySlugQuery,
    qParams: { postSlug: params.slug },
    tags: ["post", "category"],
  });

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

      <BreadcrumbComponent post={post} />

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

      <section className="w-full  flex flex-col md:flex-row md:justify-center gap-8 md:gap-16">
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
