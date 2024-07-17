"use client";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 40 };

const CAROUSEL_IMAGES = [
  "/carousel/n1.jpg",
  "/carousel/n2.jpg",
  "/carousel/n3.jpg",
  "/carousel/n4.jpg",
  "/carousel/n5.jpg",
  "/carousel/n6.jpg"
];

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 8000 }),
  ]);

  return (
    <section className="embla absolute inset-0 -z-20">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {CAROUSEL_IMAGES.map((image, index) => {
            return (
              <div className="embla__slide relative" key={index}>
                <Image src={image} fill alt="Décoration d'intérieur" className="object-cover object-center" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
