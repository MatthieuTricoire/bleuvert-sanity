import { PostThumbnail } from "./post";

export type Category = {
  slug: string;
  title: string;
  posts: PostThumbnail[];
};
