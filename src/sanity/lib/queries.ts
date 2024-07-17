import { groq } from "next-sanity";

export const getProjectBySlugQuery = groq`*[_type=="post" && slug.current==$postSlug][0] {
      _id,
      "slug": slug.current,
      title,
      subtitle,
      location,
      area,
      body,
      "mainImage": {
          "src": mainImage.asset->url,
          "width": mainImage.asset->metadata.dimensions.width,
          "height": mainImage.asset->metadata.dimensions.height,
          "lqip": mainImage.asset ->metadata.lqip,
          "blurDataUrl": mainImage.asset ->metadata.lqip
      },
      "imageGallery": imageGallery[]{
          "src": asset->url,
          "width": asset->metadata.dimensions.width,
          "height": asset->metadata.dimensions.height,
          "lqip": asset ->metadata.lqip,
          "blurDataUrl": asset ->metadata.lqip
        },
      photographer ->{firstName, lastName, socialLink}
    }`;

export const getCategoriesContainingProjects = groq`*[_type=="category" && count(*[_type=="post" && references(^._id)]) > 0]  | order(title asc){
title,
"slug": slug.current
}`;

export const getProjectsByCategorySlugQuery = groq`*[_type == "post" && ($categorySlug == '' || references(*[_type == "category" && slug.current == $categorySlug]._id))] | order(project_date desc) {
    title,
    subtitle,
    project_date,
    "slug": slug.current,
    "mainImageUrl": {
          "src": mainImage.asset->url,
          "width": mainImage.asset->metadata.dimensions.width,
          "height": mainImage.asset->metadata.dimensions.height,
          "lqip": mainImage.asset ->metadata.lqip,
          "blurDataUrl": mainImage.asset ->metadata.lqip
      }
  }`;

export const getLastProjectsQuery = groq`*[_type == "post"] | order(project_date desc) {
    title,
    subtitle,
    project_date,
    "slug": slug.current,
    "mainImageUrl": {
          "src": mainImage.asset->url,
          "width": mainImage.asset->metadata.dimensions.width,
          "height": mainImage.asset->metadata.dimensions.height,
          "lqip": mainImage.asset ->metadata.lqip,
          "blurDataUrl": mainImage.asset ->metadata.lqip
      }
  }[0...$postsNumber]`;
