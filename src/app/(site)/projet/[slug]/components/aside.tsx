import { Separator } from "@/components/ui/separator";
import { Grid3X3, MapPin } from "lucide-react";
import React from "react";

type AsideProps = {
  localisation?: string;
  area?: string;
};
export const Aside = ({ localisation, area }: AsideProps) => {
  return (
    <div className="self-center md:self-start flex md:flex-col  gap-4 text-gray-600">
      {localisation && (
        <div className="flex">
          <MapPin className="mr-2" /> {localisation}
        </div>
      )}
      {area && localisation && <Separator className="hidden md:block" />}
      {area && (
        <div className="flex">
          <Grid3X3 className="mr-2" />
          <span>
            {area}m<sup>2</sup>
          </span>
        </div>
      )}
    </div>
  );
};

export default Aside;
