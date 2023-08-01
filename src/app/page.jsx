import Image from "next/image";
import styles from "./page.module.css";
import Arrow from "@/components/HalfArrow/arrow";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.topRow}>
          <div className={styles.tileContainer}>
            <div className={styles.tile}>
              <Image
                className={styles.webLogo}
                src="/itsanpcLogo.svg"
                width={268}
                height={40}
                alt="logo of website"
              />
              <p className={styles.intro}>
                Discover the best PC parts for your PC-Build
              </p>
              <Arrow link="" text="See more" />
            </div>
            <div className={styles.tile}>
              <h1 className={styles.pcHead}>PC Build Guide</h1>
              <p className={styles.subHead}>
                What do you need to build a PC? A Step-by-Step Guide.
              </p>
              <Arrow link="" text="Learn more" />
              <Image
                className={styles.we}
                src="/pc-img.png"
                width={270}
                height={270}
                alt="pc image"
              />
            </div>
          </div>
        </div>

        {/*  */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <div className={styles.cardList}>
              <div className={`${styles.card} ${styles.cardHero}`}>
                <Image
                  className={styles.heroImg}
                  src="/16-9-img.png"
                  width={640}
                  height={360}
                  alt="image of the card"
                />
                <div className={styles.cardDesc}>
                  <div className={styles.cardHead}>
                    <p className={styles.category}>VIDEO</p>
                    <h2 className={styles.heroHeadline}>
                      Principles of spatial design
                    </h2>
                    <p className={styles.paragraph}>
                      Learn how to design with depth, scale, windows, and
                      immersion, and apply best practices for creating
                      comfortable, human-centered experiences that transform
                      reality.
                    </p>
                  </div>
                  <div className={styles.cardDate}>Aug 01, 2023</div>
                </div>
              </div>
              <div className={`${styles.card} ${styles.card2up}`}>
                <Image
                  className={styles.heroImg}
                  src="/16-9-img.png"
                  width={640}
                  height={360}
                  alt="image of the card"
                />
                <div className={styles.cardDesc}>
                  <div className={styles.cardHead}>
                    <p className={styles.category}>VIDEO</p>
                    <h2 className={styles.up2Headline}>
                      Design dynamic Live Activities
                    </h2>
                    <p className={styles.paragraph}>
                      Learn the best way to create graphically rich layouts that update seamlessly on the Lock Screen, in StandBy, and in the Dynamic Island.
                    </p>
                  </div>
                  <div className={styles.cardDate}>Aug 01, 2023</div>
                </div>
              </div>
              <div className={`${styles.card} ${styles.card2up}`}>
                <Image
                  className={styles.heroImg}
                  src="/16-9-img.png"
                  width={640}
                  height={360}
                  alt="image of the card"
                />
                <div className={styles.cardDesc}>
                  <div className={styles.cardHead}>
                    <p className={styles.category}>VIDEO</p>
                    <h2 className={styles.up2Headline}>
                      Design dynamic Live Activities
                    </h2>
                    <p className={styles.paragraph}>
                      Learn the best way to create graphically rich layouts that update seamlessly on the Lock Screen, in StandBy, and in the Dynamic Island.
                    </p>
                  </div>
                  <div className={styles.cardDate}>Aug 01, 2023</div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
