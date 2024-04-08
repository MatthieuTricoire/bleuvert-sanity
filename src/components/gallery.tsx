"use client";

import Image from "next/image";
import PhotoAlbum, { Photo, RenderPhotoProps } from "react-photo-album";

type GalleryProps = {
  photos: Photo[];
};

function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataUrllll" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}
export const Gallery = ({ photos }: GalleryProps) => {
  return (
    <PhotoAlbum
      layout="columns"
      photos={photos}
      columns={2}
      renderPhoto={NextJsImage}
    />
  );
};
