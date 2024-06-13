import React from "react";
import { MaxWidthContainer } from "@/components/max-width-container";
import { FeatureSection } from "./_components/features-section";

const PrestationPage = () => {
  return (
    <MaxWidthContainer>
      <div className=" h-full flex-1 w-full flex flex-col  gap-10">
        <h1 className="text-center mt-8 md:mt-24 text-3xl md:text-5xl font-[500]">
          Nos prestation
        </h1>

        <FeatureSection />
      </div>
    </MaxWidthContainer>
  );
};

export default PrestationPage;
