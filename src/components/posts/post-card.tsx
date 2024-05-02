import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { PostThumbnail } from "@/types/post";

type PostProps = {
  post: PostThumbnail;
};

export const PostCard = ({ post }: PostProps) => {
  return (
    <Link href={`/projet/${post.slug}`}>
      <Card className="max-w-2xl group h-full w-full border-0 overflow-hidden">
        <CardContent className="p-0 relative w-full aspect-[1.33]">
          {post.mainImageUrl && post.mainImageUrl.src && (
            <Image
              className="object-cover object-center group-hover:scale-[1.01] group-hover:opacity-95 transition"
              src={post.mainImageUrl.src}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 20vw"
              priority
              blurDataURL={post.mainImageUrl.blurDataUrl}
              alt={`Image de couverture du projet ${post.title}`}
              fill
            />
          )}
        </CardContent>
        <CardHeader className="p-0">
          <CardTitle className="font-normal text-lg">
            <div className="text-center font-semibold">{post.title}</div>
            <div className="text-center font-light">{post.subtitle}</div>
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
};
