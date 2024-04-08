import { cn } from "@/lib/utils";
import { urlForBlurImage, urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

type CoverImageProps = {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  className?: string;
};

export const CoverImage = ({
  image,
  alt = "Cover image",
  width = 500,
  height = 10,
  size = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
}: CoverImageProps) => {
  const imageUrl = image && urlForImage(image);
  const imageBlurUrl = image && urlForBlurImage(image);

  return (
    <div
      className={cn(
        "relative h-60  w-full overflow-hidden rounded-md",
        className,
      )}
    >
      {imageUrl && (
        <Image
          placeholder="blur"
          fill
          alt={alt}
          sizes={size}
          blurDataURL={imageBlurUrl}
          src={imageUrl}
          className="object-cover object-center"
        />
      )}
    </div>
  );
};
