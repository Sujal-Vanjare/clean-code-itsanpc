"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./blogCard.module.css";

export function formatCount(count) {
  if (count < 1000) {
    return count.toString();
  } else if (count < 10000) {
    return (count / 1000).toFixed(1) + "K";
  } else {
    return Math.floor(count / 1000) + "K";
  }
}

export default function BlogCard(props) {
  return (
    <div className={styles.layout}>
      {props.data.map((data, index) => (
        <Link href={`/blog/${data.attributes.slug}`} key={index}>
          <div
            className={index % 3 === 0 ? styles.specialCard : styles.blogCard}
          >
            <div className={styles.blogThumbnail}>
              <Image
                className={styles.image}
                src={data.attributes.thumbnail_img_url}
                width={1200}
                height={675}
                alt="blog image"
                priority={true}
              />
            </div>
            <div className={styles.blogDesc}>
              <div className={styles.blogHead}>
                <p className={styles.category}>
                  {data?.attributes?.categories &&
                  Array.isArray(data?.attributes?.categories?.data) &&
                  data?.attributes?.categories?.data.length > 0
                    ? data?.attributes?.categories?.data
                        .map((category) => category.attributes.name)
                        .join(", ")
                    : "No Categories"}
                </p>

                <h2 className={styles.title}>{data.attributes.title}</h2>
                <p className={styles.subtitle}>{data.attributes.subtitle}</p>
              </div>
              <div className={styles.performanceContainer}>
                <div className={styles.date}>{data.attributes.date}</div>

                <div className={styles.likeViewContainer}>
                  <div className={` ${styles.likeContainer}`}>
                    <div className={styles.likeCounts}>
                      <img
                        src={"/like.svg"}
                        alt="like icon"
                        className={styles.icon}
                      />
                      {formatCount(data.attributes.likes)}
                    </div>
                    <div className={styles.likeCounts}>
                      <img
                        src={"/dislike.svg"}
                        alt="like icon"
                        className={styles.icon}
                      />
                      {formatCount(data.attributes.dislikes)}
                    </div>
                  </div>

                  <div>{formatCount(data.attributes.view_count)} Views</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
