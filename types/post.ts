import { TypedObject } from "sanity";

export type PostThumbnail = {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  mainImageUrl: Image;
};

export type Post = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  location?: string;
  area?: string;
  body: TypedObject;
  mainImage: Image;
  imageGallery: Image[];
  photographer: Photographer;
};

type Image = {
  src: string;
  width: number;
  height: number;
  lqip: string;
  blurDataUrl: string;
};

type Photographer = {
  firstName?: string;
  lastName: string;
  socialLink?: string;
};
