import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};

export const urlForBlurImage = (source: Image) => {
  return imageBuilder
    .image(source)
    .auto("format")
    .fit("max")
    .width(24)
    .height(24)
    .url();
};
