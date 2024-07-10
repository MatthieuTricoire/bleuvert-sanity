import React from "react";
import { MaxWidthContainer } from "@/components/max-width-container";
import { FeatureSection } from "./_components/features-section";
import { Typography } from "@/components/typography";
import { BreadcrumbComponent } from "@/components/breadcrumb";

const PrestationPage = () => {
  return (
    <MaxWidthContainer className="mt-10">
      <BreadcrumbComponent />
      <div className=" h-full flex-1 w-full flex flex-col  gap-10">
        <Typography variant="h1" component="h1">Nos prestations</Typography>
        <FeatureSection />
      </div>
    </MaxWidthContainer>
  );
};

export default PrestationPage;
