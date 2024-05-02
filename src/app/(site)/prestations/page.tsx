import React from "react";
import { PrestationCard } from "./components/prestationCard";
import { prestationConfig } from "@/config/prestation-config";

const PrestationPage = () => {
  return (
    <div className=" h-full flex-1 w-full flex flex-col  gap-10">
      <h1 className="text-center mt-8 md:mt-24 text-3xl md:text-5xl font-[500]">
        Nos prestation
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        {prestationConfig.map((prestation: Prestation, idx: number) => (
          <PrestationCard key={idx} prestation={prestation} />
        ))}
      </div>
    </div>
  );
};

export default PrestationPage;
