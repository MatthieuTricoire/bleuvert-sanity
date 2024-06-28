import { defineField, defineType } from "sanity";
import { EditIcon, ImagesIcon } from "@sanity/icons";

export default defineType({
  name: "post",
  title: "Projet",
  type: "document",
  groups: [
    {
      name: "generalInformation",
      title: "Informations génerales",
      icon: EditIcon,
    },
    {
      name: "images",
      title: "Photos",
      icon: ImagesIcon,
    },
  ],
  fields: [
    defineField({
      group: "generalInformation",
      name: "title",
      title: "Titre du projet",
      description: "Exemple : Marcello",
      type: "string",
      validation: (rule) =>
        rule.required().error("Le titre d'un article est obligatoire."),
    }),

    defineField({
      group: "generalInformation",
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
      description: "Exemple : Rénovation d'une salle de bain",
    }),

    defineField({
      group: "generalInformation",
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description:
        "Utilisé dans l'url pour accéder au projet. Exemple : www.nomdusite/projet/slug. \n Cliquer sur générer pour créer le slug automatiquement en se basant sur le titre du projet.",
      validation: (rule) =>
        rule.required().error("Un slug doit obligatoirement être généré."),
    }),

    defineField({
      group: "generalInformation",
      name: "category",
      title: "Categorie",
      type: "reference",
      to: { type: "category" },
      validation: (rule) =>
        rule
          .required()
          .error("Une catégorie doit obligatoirement être sélectionnée."),
    }),
    defineField({
      group: "generalInformation",
      name: "location",
      title: "Localisation",
      type: "string",
    }),
    defineField({
      group: "generalInformation",
      name: "area",
      title: "Surface",
      type: "number",
    }),
    // defineField({
    //   group: "generalInformation",
    //   name: "body",
    //   title: "Corps",
    //   type: "blockContent",
    //   validation: (rule) => rule.required().error("Obligatoire"),
    // }),
    defineField({
      group: "generalInformation",
      name: "body",
      title: "Corps",
      type: "array",
      of: [
        {
          type: "block",
          // Only allow these block styles
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Gras comme John", value: "strong" },
              { title: "Italique", value: "em" },
            ],
          },
        },
      ],
      validation: (rule) => rule.required().error("Obligatoire"),
    }),
    defineField({
      group: "images",
      name: "mainImage",
      title: "Image de couverture",
      type: "image",

      options: {
        hotspot: true,
        accept: "image/*",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Text alternatif",
          description: "Nécessaire pour une meilleure accessibilité du site",
        },
      ],
      validation: (rule) =>
        rule
          .required()
          .error(
            "L'image de couverture est obligatoire pour la création d'un nouveau projet.",
          ),
    }),
    defineField({
      group: "images",
      name: "imageGallery",
      title: "Galerie d'images",
      type: "array",
      of: [{
        type: "image", options: {
          accept: 'image/jpeg, image/png'
        }
      }],
    }),
    defineField({
      group: "images",
      name: "photographer",
      title: "Photographe",
      type: "reference",
      to: { type: "photographer" },
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
