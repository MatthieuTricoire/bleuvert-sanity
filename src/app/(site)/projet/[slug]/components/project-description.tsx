import { Typography } from "@/components/typography";
import { PortableText } from "@portabletext/react";
import React from "react";
import { TypedObject } from "sanity";

type ProjectDescriptionProps = {
  body: TypedObject;
};
const ProjectDescription = ({ body }: ProjectDescriptionProps) => {
  return (
    <Typography component="div" variant="body" className="max-w-[65ch] text-justify"><PortableText value={body} /></Typography>
  );
};

export default ProjectDescription;
