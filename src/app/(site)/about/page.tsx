import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className=" h-full flex-1 w-full ">
      <div className=" grid grid-cols-12 h-full mt-10">
        <div className="col-start-2 col-span-6 row-start-1 row-span-1">
          <h1 className="text-3xl font-semibold  mt-20">À propos de nous</h1>
        </div>
        <div className="col-start-2 col-span-6 row-start-3 z-10  row-span-4 ">
          <p className="rounded-lg border border-primary  bg-gray-200/50 backdrop-blur-lg p-8 ">
            Chloé, diplômée du Studio des Arts Déco à Paris, et Laura, de
            l’école MMI Déco à Paris conçoivent des espaces intérieurs et des
            ambiances pour des particuliers et des professionnels, en veillant à
            répondre à chacune des attentes de leurs clients. Elles vous aident
            dans la rénovation et la décoration de votre intérieur afin
            d’optimiser son potentiel et le rendre à votre image. Elles vous
            accompagnent dans toutes les étapes du projet : définition du plan
            idéal d’aménagement, conception détaillée (choix des matériaux, des
            couleurs et création de meubles sur mesure), consultation des
            entreprises et suivi des travaux.
          </p>
        </div>
        <div className="col-start-7 col-span-8 row-start-1 row-span-7  relative">
          <Image
            width={500}
            height={800}
            src={"/about.png"}
            alt="Photo test"
            className="object-contain object-top rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
