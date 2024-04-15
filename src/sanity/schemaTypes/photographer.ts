import { defineField, defineType } from "sanity";

export default defineType({
  name: "photographer",
  title: "Photographe",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "Prénom",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Nom",
      type: "string",
      validation: (value) =>
        value
          .required()
          .error("Au moins le nom du photographe doit être renseigné."),
    }),
    defineField({
      name: "socialLink",
      title: "Réseau social",
      description: "Lien vers un site / réseau social",
      type: "url",
    }),
  ],
});
