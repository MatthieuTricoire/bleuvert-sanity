// react-photo-album.d.ts

import * as React from "react";

declare module "react-photo-album" {
  interface Photo extends Photo {
    blurDataUrl?: string;
  }
}

export {};
