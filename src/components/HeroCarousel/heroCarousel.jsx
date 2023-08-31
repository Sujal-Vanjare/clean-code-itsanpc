"use client";
import styles from "./heroCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useState } from "react";

const HeroCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div className={styles.container}>
      <Carousel
        autoPlay={autoplay}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={true}
        className={styles.customCarousel}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div onClick={clickHandler} className={styles.prevArrow}>
            <img src="arrow-back.svg" alt="back arrow" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div onClick={clickHandler} className={styles.nextArrow}>
            <img src="arrow-next.svg" alt="next arrow" />
          </div>
        )}
      >
        <div>
          <Image
            className={styles.carouselImage}
            src="/16-7-img.png"
            width={1200}
            height={525}
            alt="image"
          />
          <div className={styles.carouselText}>Shop now</div>
        </div>
        <div>
          <Image
            className={styles.carouselImage}
            src="/16-7-img.png"
            width={1200}
            height={525}
            alt="image"
          />
          <div className={styles.carouselText}>Shop now</div>
        </div>
        <div>
          <Image
            className={styles.carouselImage}
            src="/16-7-img.png"
            width={1200}
            height={525}
            alt="image"
          />
          <div className={styles.carouselText}>Shop now</div>
        </div>
      </Carousel>

      <div className={styles.pauseButton} onClick={toggleAutoplay}>
        {autoplay ? (
          <img src="play-icon.svg" alt="Play" />
        ) : (
          <img src="pause-icon.svg" alt="Pause" />
        )}
      </div>
    </div>
  );
};
export default HeroCarousel;
