import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Typography } from "./typography";

type FeaturedCardProps = {
  title: string;
  description: string;
  href: string;
};

export const FeatureCard = ({
  title,
  href,
  description,
}: FeaturedCardProps) => {
  return (
    <div className=" border-t-2 flex flex-col pt-4  gap-4">
      <div className="flex items-center gap-4">
        {/* <div className=" p-2 rounded-full" aria-hidden="true"> */}
        {/*   <Image */}
        {/*     src={"/shop.png"} */}
        {/*     width={64} */}
        {/*     height={64} */}
        {/*     className="size-5" */}
        {/*     alt={`Icône pour ${title}`} */}
        {/*   /> */}
        {/* </div> */}
        {/* <h3 className="highlight highlight-container">{title}</h3> */}
        <Typography
          variant="h3"
          component="h3"
          className="mt-0 font-medium highlight highlight-container"
        >
          {title}
        </Typography>
      </div>
      <div>{description}</div>
      <Link href={href} className="flex items-center">
        En savoir plus <ArrowRight className="size-4 ml-2 text-primary" />
      </Link>
    </div>
  );
};
