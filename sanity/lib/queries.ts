import { groq } from "next-sanity";
import { client } from "./client";
import { Category } from "@/types/category";
import { Post } from "@/types/post";

export const getPostBySlugQuery = groq`*[_type=="post" && slug.current==$postSlug][0] {
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

export function getPostBySlug(postSlug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type=="post" && slug.current==$postSlug][0] {
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
    }`,
    { postSlug },
  );
}

export const getCategoriesWithPostsQuery = groq`*[_type=="category" && count(*[_type=="post" && references(^._id)]) > 0] | order(title asc){
  title, 
"slug": slug.current,
  "posts": *[_type=="post" && references(^._id)] | order(_createdAt desc) { 
    _id, 
    title, 
    subtitle,
    "slug": slug.current, 
    "mainImageUrl": {
          "src": mainImage.asset->url,
          "width": mainImage.asset->metadata.dimensions.width,
          "height": mainImage.asset->metadata.dimensions.height,
          "lqip": mainImage.asset ->metadata.lqip,
          "blurDataUrl": mainImage.asset ->metadata.lqip
      }
  } 
}`;

export function getCategoriesWithPosts(): Promise<Category[]> {
  return client.fetch(
    groq`*[_type=="category" && count(*[_type=="post" && references(^._id)]) > 0] | order(title asc){
  title, 
"slug": slug.current,
  "posts": *[_type=="post" && references(^._id)] | order(_createdAt desc) { 
    _id, 
    title, 
    subtitle,
    "slug": slug.current, 
    "mainImageUrl": {
          "src": mainImage.asset->url,
          "width": mainImage.asset->metadata.dimensions.width,
          "height": mainImage.asset->metadata.dimensions.height,
          "lqip": mainImage.asset ->metadata.lqip,
          "blurDataUrl": mainImage.asset ->metadata.lqip
      }
  } 
}`,
  );
}

export const getCategoryWithPostsQuery = groq`*[_type=="category" && slug.current==$categorySlug && count(*[_type=="post" && references(^._id)]) > 0] | order(title asc) {
      title,
      "slug": slug.current,
      "posts": *[_type=="post" && references(^._id)] | order(_createdAt desc) {
        _id, 
        title, 
        subtitle,
        "slug": slug.current, 
        "mainImageUrl": {
              "src": mainImage.asset->url,
              "width": mainImage.asset->metadata.dimensions.width,
              "height": mainImage.asset->metadata.dimensions.height,
              "lqip": mainImage.asset ->metadata.lqip,
              "blurDataUrl": mainImage.asset ->metadata.lqip
          }
      }
    }`;

export function getCategoryWithPosts(
  categorySlug: string,
): Promise<Category[]> {
  return client.fetch(
    groq`*[_type=="category" && slug.current==$categorySlug && count(*[_type=="post" && references(^._id)]) > 0] | order(title asc) {
      title,
      "slug": slug.current,
      "posts": *[_type=="post" && references(^._id)] | order(_createdAt desc) {
        _id, 
        title, 
        subtitle,
        "slug": slug.current, 
        "mainImageUrl": {
              "src": mainImage.asset->url,
              "width": mainImage.asset->metadata.dimensions.width,
              "height": mainImage.asset->metadata.dimensions.height,
              "lqip": mainImage.asset ->metadata.lqip,
              "blurDataUrl": mainImage.asset ->metadata.lqip
          }
      }
    }`,
    { categorySlug },
  );
}
