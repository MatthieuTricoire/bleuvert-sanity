"use client";

import Image from "next/image";
import { useState } from "react";
import PhotoAlbum, { Photo, RenderPhotoProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
        placeholder={"blurDataUrl" in photo ? "blur" : undefined}
        quality={50}
        {...{ alt, sizes, title, className, onClick }}
      />
    </div>
  );
}

export const Gallery = ({ photos }: GalleryProps) => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <PhotoAlbum
        sizes={{ size: "50vw" }}
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
