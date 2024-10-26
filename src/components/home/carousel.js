import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const foodImages = [
  "https://images.pexels.com/photos/3761662/pexels-photo-3761662.jpeg", // Pizza on wooden board
  "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg", // Baked pizza
  "https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg", // Person holding pizza
];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {foodImages.map((image, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "38rem",
              position: "relative",
            }}
          >
            <Image
              src={image}
              alt={`Pizza item ${index + 1}`}
              width={500}
              height={400}
              priority={index === 0} // Add priority for the first image
              style={{ objectFit: "cover" }} // Use CSS style instead of objectFit
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
