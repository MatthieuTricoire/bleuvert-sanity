"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 40 };

const CAROUSEL_IMAGES = [
  "/carousel/bg.jpg",
  "/carousel/01-latron.jpg",
  "/carousel/10-raphael.jpg",
  "/carousel/14-raphael.jpg",
];

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 8000 }),
  ]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {CAROUSEL_IMAGES.map((image, index) => (
            <div className="embla__slide relative" key={index}>
              <Image src={image} fill alt="test" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
