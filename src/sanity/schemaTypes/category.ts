import { defineField, defineType } from "sanity";
import { CategoriesIcons } from "./custom-previews";

export default defineType({
  name: "category",
  title: "Catégorie",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => {
      const data = {
        title,
      };
      return {
        title,
        media: CategoriesIcons(data),
      };
    },
  },
});
