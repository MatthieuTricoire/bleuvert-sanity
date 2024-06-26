import React from "react";
import Link from "next/link";
import { Photographer } from "@/types/project";

type PhotographerProps = {
  photographer?: Photographer;
};
const PhotographerText = ({ photographer }: PhotographerProps) => {
  if (!photographer) return null;

  const photographerName = photographer.firstName
    ? photographer.firstName + " " + photographer.lastName
    : photographer.lastName;

  if (photographer.socialLink) {
    return (
      <Link href={photographer.socialLink} className="prose md:prose-lg ">
        Photographe : <span className="underline">{photographerName}</span>
      </Link>
    );
  }

  return (
    <div className="prose md:prose-lg">Photographe : {photographerName}</div>
  );
};
export default PhotographerText;
