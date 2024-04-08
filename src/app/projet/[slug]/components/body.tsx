import { PortableText } from "@portabletext/react";
import React from "react";
import { TypedObject } from "sanity";

type BodyProps = {
  body: TypedObject;
};
const Body = ({ body }: BodyProps) => {
  return (
    <div className="prose text-justify border-2 border-red-50 flex-1">
      <PortableText value={body} />
    </div>
  );
};

export default Body;
