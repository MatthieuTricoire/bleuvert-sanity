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

        <Typography variant="body" component="p" className="text-justify sm:text-center">
          Il faut faire un petite paragraphe avec les mots clés de vos
          prestations : Architecture intérieur, Décoration intérieur, etc...{" "}
          <br />
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </Typography>

        <Link className={buttonVariants()} href="/prestations">
          En savoir plus
        </Link>
      </MaxWidthContainer>
    </section>
  );
};
