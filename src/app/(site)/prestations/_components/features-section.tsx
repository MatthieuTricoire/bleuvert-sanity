import { FeatureCard } from "@/components/feature-card";
import { Typography } from "@/components/typography";
import { featuresConfig } from "@/config/features-config";
import React from "react";

export const FeatureSection = () => {
  return (
    <section className="grid grid-cols-2 gap-12">
      {featuresConfig.map((feature) => (
        <FeatureCard {...feature} key={feature.title} />
      ))}
    </section>
  );
};
