import { MaxWidthContainer } from "@/components/max-width-container";
import { Typography } from "@/components/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const FeatureSection = () => {
  return (
    <section className="bg-bleuvert-light-gray">
      <MaxWidthContainer className="flex flex-col items-center gap-4">
        <Typography variant="h2" component="h2" className="border-none">
          Nos prestations
        </Typography>

        <Typography variant="body" component="p" className="text-justify sm:text-center">Nous concevons et aménageons des espaces intérieurs en tenant compte de l'esthétique, de la fonctionnalité et du confort. Nous travaillons sur divers projets, allant de la rénovation de maisons à l'aménagement de bureaux ou de commerces. Les prestations peuvent inclure : le conseil en design avec proposition de style, de couleurs et de matériaux, l'aménagement de l'espace avec plans détaillés et modèles 3D pour visualiser le projet, la sélection de mobilier et de décorations comprenant le choix de meuble, d'éclairages et d'objets décoratifs et enfin la maîtrise d'oeuvre assurant la coordination avec d'autres professionnels comme les entrepreneurs et les artisans.</Typography>

        <Link className={buttonVariants()} href="/prestations">
          En savoir plus
        </Link>
      </MaxWidthContainer>
    </section>
  );
};
