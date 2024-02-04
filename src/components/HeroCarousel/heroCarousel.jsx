"use client";
import styles from "./heroCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const HeroCarousel = (props) => {
  // For Carousal auto Slide Stop
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
        {props.data.map((data, index) => (
          <Link href={`/blog/${data.attributes.slug}`} key={index}>
            <Image
              className={styles.carouselImage}
              src={data.attributes.thumbnail_img_url}
              alt="carousel image"
              width={1200}
              height={675}
              priority
            />
            <div className={styles.carouselText}>
              <h2 className={styles.title}>{data.attributes.title}</h2>
              <p className={styles.subtitle}>{data.attributes.subtitle}</p>

              <div className={styles.seeMore}>
                <p>See more</p>
                <img className={styles.arrow} src="halfArrow.svg" />
              </div>
            </div>
          </Link>
        ))}
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
