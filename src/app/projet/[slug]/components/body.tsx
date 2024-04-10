import { PortableText } from "@portabletext/react";
import React from "react";
import { TypedObject } from "sanity";

type BodyProps = {
  body: TypedObject;
};
const Body = ({ body }: BodyProps) => {
  return (
    <div className="prose md:prose-lg text-justify flex-1 mb-6">
      <PortableText value={body} />
    </div>
  );
};

export default Body;
