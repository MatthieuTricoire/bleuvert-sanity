import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { PostThumbnail } from "../../../types/post";

type PostProps = {
  post: PostThumbnail;
};

export const PostCard = ({ post }: PostProps) => {
  return (
    <Link href={`/projet/${post.slug}`}>
      <Card className="max-w-2xl group h-full w-full ">
        <CardContent className="p-0 relative w-full h-60">
          {post.mainImageUrl && post.mainImageUrl.src && (
            <Image
              className="object-cover object-center"
              src={post.mainImageUrl.src}
              placeholder="blur"
              blurDataURL={post.mainImageUrl.lqip}
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
