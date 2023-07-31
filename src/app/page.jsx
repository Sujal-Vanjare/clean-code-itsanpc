import Image from "next/image";
import styles from "./page.module.css";
import Arrow from "@/components/HalfArrow/arrow";

export default function Home() {
  return (
    <>
      <div className={styles.pageBg}>
        <div className={styles.page}>
          <div className={styles.topRow}>
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
              <p className={styles.subHead}>What do you need to build a PC? A Step-by-Step Guide.</p>
              <Arrow link="" text="Learn more" />
              <Image
                className={styles.we}
                src="/pc-img.png"
                width={270}
                height={270}
                alt="pc image"
              />
            </div>
            <div>Hello Github</div>
          </div>
        </div>
      </div>
    </>
  );
}
