import React from "react";

type AsideProps = {
  localisation?: string;
  area?: string;
};
export const Aside = ({ localisation, area }: AsideProps) => {
  return <div className="max-w-28">Aside</div>;
};

export default Aside;
