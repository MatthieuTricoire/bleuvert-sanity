import React from "react";
import Link from "next/link";
import { Photographer } from "@/types/project";

type PhotographerProps = {
  photographer?: Photographer;
};
const PhotographerText = ({ photographer }: PhotographerProps) => {
  if (!photographer) return null;


  if (photographer.socialLink) {
    return (
      <Link href={photographer.socialLink} className="prose md:prose-lg ">
        Photographe : <span className="underline">{photographer.name}</span>
      </Link>
    );
  }

  return (
    <div className="prose md:prose-lg">Photographe : {photographer.name}</div>
  );
};
export default PhotographerText;
