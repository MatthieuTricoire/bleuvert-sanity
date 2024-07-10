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
    <Link href={href} className=" border-t-2 flex flex-col pt-4  gap-4 group hover:border-t-gray-600 transition-all">
      <div className="flex items-center gap-4">
        <Typography
          variant="h3"
          component="h3"
          // className="mt-0 font-medium highlight highlight-container"
          className="mt-0 font-medium "
        >
          {title}
        </Typography>
      </div>
      <div>{description}</div>
      <div className="flex items-center group-hover:font-medium transition-all">
        En savoir plus <ArrowRight className="size-4 ml-2 text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
};
