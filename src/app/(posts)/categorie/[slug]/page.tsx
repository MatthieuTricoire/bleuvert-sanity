import React from "react";
import { getCategoryWithPosts } from "../../../../../sanity/lib/queries";
import { PostCard } from "@/components/posts/post-card";

type SlugPageProps = {
  params: {
    slug: string;
  };
};

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
