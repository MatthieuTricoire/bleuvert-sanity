import React from "react";
import PhotoAlbum, { Photo, RenderPhotoProps } from "react-photo-album";
import { getPostBySlug } from "../../../../sanity/lib/queries";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { AreaChart, Map } from "lucide-react";
import { Gallery } from "@/components/gallery";
import Aside from "./components/aside";
import Body from "./components/body";

type SlugProjectPageProps = {
  params: {
    slug: string;
  };
};

const SlugProjectPage = async ({ params }: SlugProjectPageProps) => {
  const post = await getPostBySlug(params.slug);

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
        blurDataURL={post.mainImage.lqip}
        alt="Image de couverture du projet"
        sizes="50vw"
        width={post.mainImage.width}
        height={post.mainImage.height}
      />

      <section className="w-full flex flex-col md:flex-row md:justify-center gap-4 ">
        <Aside localisation={post.location} area={post.area} />

        <Body body={post.body} />
      </section>

      <section className="bg-red-200 w-full">
        <Gallery photos={post.imageGallery} />
      </section>
    </div>
  );
};

export default SlugProjectPage;
