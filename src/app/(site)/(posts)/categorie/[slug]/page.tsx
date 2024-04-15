import React from "react";
import {
  getCategoryWithPosts,
  getCategoryWithPostsQuery,
} from "@/sanity/lib/queries";
import { PostCard } from "@/components/posts/post-card";
import { sanityFetch } from "@/sanity/lib/client";
import { Metadata } from "next";
import { Category } from "@/types/category";

type SlugPageProps = {
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

  const categoryWithPosts: Category[] = await sanityFetch({
    query: getCategoryWithPostsQuery,
    qParams: { categorySlug: slug },
    tags: ["post", "category"],
  });
  console.log("cate", categoryWithPosts);

  return {
    description: `Liste des projets pour la catégorie : ${categoryWithPosts.at(0)?.title} `,
  };
}

const SlugPage = async ({ params }: SlugPageProps) => {
  const categoryWithPosts = await getCategoryWithPosts(params.slug);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {categoryWithPosts[0].posts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </div>
  );
};

export default SlugPage;
