import { MaxWidthContainer } from "@/components/max-width-container";
import { Typography } from "@/components/typography";
import Image from "next/image";

const StudioPage = () => {
  return (
    <MaxWidthContainer className="flex flex-col items-center gap-6">
      <section className="flex flex-col items-center gap-2">
        <Typography variant="h1" component="h1" className="font-medium">
          Qui sommes nous ?
        </Typography>

        <Typography component="p" variant="body" className="prose">
          Nous concevons des aménagements intérieurs et des ambiances pour des
          particuliers et des professionnels en veillant à répondre à chacune
          de vos attentes. Nous vous accompagnons dans toutes les étapes du
          projet de la conception des plans à la livraison : définition du
          plan idéal d’aménagement, conception détaillée (choix des matériaux,
          des couleurs et création de meubles sur mesure), obligations
          administratives, consultation des entreprises et coordination des
          travaux.
        </Typography>
      </section>

      <Image src='/about.png' width={1297} height={1622} className="h-[250] w-fit" alt="Portrait de Chloé et Laura" />

      <section className="flex flex-col md:flex-row items-center gap-8">
        <div>
          <h2 className="text-xl highlight-container highlight">Laura,</h2>
          <p className="prose text-justify">
            Formée en design d’espace à l’école MMI Déco à Paris , je vous
            accompagne dans la rénovation et la décoration de votre intérieur
            afin d’optimiser son potentiel et le rendre à votre image. A
            l’écoute de vos besoins, je vous accompagne dans votre projet afin
            de vous apporter des solutions fonctionnelles et techniques les
            plus adaptées à vos souhaits et à votre budget. Je vous guide dans
            le choix des matières, des couleurs et des lumières et vous
            propose des vues 3D et des planches d’ambiance qui vous
            permettront de vous projeter dans votre nouvel aménagement.
            J’apporte une attention particulière à la phase de réalisation
            pour garantir une exécution soignée de votre projet comme il a été
            dessiné.
          </p>
        </div>
        <div className="">
          <h2 className="text-xl highlight-container highlight">Chloé,</h2>
          <p className="prose text-justify">
            Ma formation juridique initiale et mes 8 années passées dans une
            étude notariale m’ont apporté rigueur et discipline dans la
            gestion des projets que je réalise aujourd’hui dans ma carrière
            d’architecte d’intérieur. Diplômée du Studio des Arts Déco à Paris
            et formée dans une agence parisienne, j’aime imaginer une
            architecture qui améliore votre quotidien. Je porte un intérêt
            particulier à l’espace, la circulation, la lumière et les
            matériaux choisis. Je veille ainsi à optimiser l’aménagement
            intérieur tout en respectant l’identité du lieu. Soucieuse d’agir
            pour l’environnement, j’aime repenser l’espace en utilisant des
            matériaux naturels tout en conservant certains éléments du lieu
            pour leur donner une seconde vie.
          </p>
        </div>
      </section>
    </MaxWidthContainer>
  );
};

export default StudioPage;
