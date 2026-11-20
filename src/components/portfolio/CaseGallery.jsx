"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function CaseGallery({
  project,
}) {
  /*
   * If the project has an `images` array,
   * use that.
   *
   * Otherwise fall back to the
   * existing `project.image`.
   */
  const images =
    project.images?.length > 0
      ? project.images
      : [project.image];

  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);


  /* =========================
     PREVIOUS IMAGE
  ========================= */

  const goToPrevious = () => {
    setCurrentIndex((previous) => {
      if (previous === 0) {
        return images.length - 1;
      }

      return previous - 1;
    });
  };


  /* =========================
     NEXT IMAGE
  ========================= */

  const goToNext = () => {
    setCurrentIndex((previous) => {
      if (
        previous === images.length - 1
      ) {
        return 0;
      }

      return previous + 1;
    });
  };


  /* =========================
     CURRENT IMAGE
  ========================= */

  const currentImage =
    images[currentIndex];


  return (
    <figure className="case-gallery">

      {/* =========================
          IMAGE
      ========================= */}

      <div className="case-gallery__frame">

        <Image
          key={currentImage}
          src={currentImage}
          alt={`${project.title} project screenshot ${currentIndex + 1}`}
          fill
          priority={currentIndex === 0}
          sizes="(max-width: 760px) 100vw, 1120px"
          className="case-gallery__image"
        />

      </div>


      {/* =========================
          CONTROLS
      ========================= */}

      <figcaption className="case-gallery__caption">

        {/* LEFT SIDE */}

        <div className="case-gallery__controls">

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous image"
            className="case-gallery__arrow"
          >

            <ArrowLeft
              size={17}
              strokeWidth={1.7}
            />

          </button>


          {/* DOTS */}

          <div className="case-gallery__dots">

            {images.map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to image ${
                    index + 1
                  }`}
                  onClick={() =>
                    setCurrentIndex(index)
                  }
                  className={`case-gallery__dot ${
                    index === currentIndex
                      ? "case-gallery__dot--active"
                      : ""
                  }`}
                />
              )
            )}

          </div>

        </div>


        {/* COUNTER */}

        <span className="case-gallery__counter">
          {currentIndex + 1}
          {" / "}
          {images.length}
        </span>


        {/* RIGHT ARROW */}

        <button
          type="button"
          onClick={goToNext}
          aria-label="Next image"
          className="case-gallery__arrow"
        >

          <ArrowRight
            size={17}
            strokeWidth={1.7}
          />

        </button>

      </figcaption>

    </figure>
  );
}