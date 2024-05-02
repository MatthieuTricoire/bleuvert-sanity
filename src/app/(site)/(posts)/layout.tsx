import { Categories } from "@/components/categories";
import { getCategoriesWithPosts } from "@/sanity/lib/queries";
type PostLayoutProps = {
  children: React.ReactNode;
};
const PostsLayout = async ({ children }: PostLayoutProps) => {
  const categoriesWithPosts = await getCategoriesWithPosts();

  return (
    <div className=" h-full flex-1 w-full flex flex-col  gap-10">
      <h1 className="text-center mt-8 md:mt-24 text-3xl md:text-5xl font-[500]">
        Nos Réalisations
      </h1>

      <Categories categoriesWithPosts={categoriesWithPosts} />

      {children}
    </div>
  );
};

export default PostsLayout;
