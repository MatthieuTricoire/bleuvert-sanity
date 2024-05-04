import { BuildingIcon, CameraIcon, HomeIcon, HospitalIcon } from "lucide-react";
import React from "react";

export const PhotographersInitials = (data: {
  title: string;
  subtitle: string;
}) => {
  const { title, subtitle } = data;
  return (
    <span className="w-full h-full flex items-center justify-center font-extrabold text-[#B05138]">
      {title.at(0)?.toUpperCase()}
      {subtitle.at(0)?.toUpperCase()}
    </span>
  );
};

export const CategoriesIcons = (data: { title: string }) => {
  const { title } = data;
  return (
    <span className="w-full h-full flex items-center text-2xl justify-center font-extrabold ">
      {title.toLowerCase() === "maison" && "🏠"}
      {title.toLowerCase() === "appartement" && "🏢"}
      {title.toLowerCase() === "lieu public" && "🏛️"}
    </span>
  );
};
