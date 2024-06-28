"use client";

import Image from "next/image";
import { useState } from "react";
import PhotoAlbum, { Photo, RenderPhotoProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
        placeholder={"blurDataUrl" in photo ? "blur" : undefined}
        blurDataURL={photo.blurDataUrl}
        sizes="(max-width:768px) 50vw, 50vw"
        {...{ alt, title, className, onClick }}
      />
    </div>
  );
}

type GalleryProps = {
  photos: Photo[];
};
export const Gallery = ({ photos }: GalleryProps) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={2}
        renderPhoto={NextJsImage}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        toolbar={{ buttons: ["close"] }}
        styles={{
          container: { backgroundColor: "white" },
          button: { color: "black" },
        }}
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};
