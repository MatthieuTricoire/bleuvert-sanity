import { TypedObject } from "sanity";

export type ProjectThumbnail = {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  mainImageUrl: Image;
};

export type Project = {
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

export type Photographer = {
  firstName?: string;
  lastName: string;
  socialLink?: string;
};
