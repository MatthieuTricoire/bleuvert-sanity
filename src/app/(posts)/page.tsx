import { PostCard } from "@/components/posts/post-card";
import { getCategoriesWithPosts } from "../../../sanity/lib/queries";

export default async function Page() {
  const categoriesWithPosts = await getCategoriesWithPosts();

  return (
    <div className="grid md:grid-cols-3 gap-10 md:gap-4">
      {categoriesWithPosts.map((category) => {
        return category.posts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        });
      })}
    </div>
  );
}
