import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/HalfArrow/arrow";


export default function Gpu() {
  return (
    <>
      <div className={styles.page}>

        <div className={styles.tileContainer}>
          <div className={`${styles.tile} ${styles.tile1}`}>
            <Image
              className={styles.tileImg}
              src="/pc-img.png"
              alt="pc image"
              width={470}
              height={470}
              priority
            />
            <div className={styles.tileDesc}>
              <h2 className={styles.tileHead}>PC Build Guide</h2>
              <p className={styles.tilePara}>What do you need to build a PC? <br /> A Step-by-Step Guide.</p>
              <Link href="">
                <p className={styles.learnMore}>Learn more<img className={styles.arrow} src="halfArrow.svg" alt="" />
                </p>
              </Link>

            </div>
          </div>

          <div className={`${styles.tile} ${styles.tile2}`}>
            <Image
              className={styles.tileImg}
              src="/pc-img.png"
              alt="pc image"
              width={470}
              height={470}
              priority
            />

            <div className={styles.tileDesc}>
              <h2 className={styles.tileHead}>PC Build Guide</h2>
              <p className={styles.tilePara}>What do you need to build a PC? <br /> A Step-by-Step Guide.</p>
              <Link href="">
                <p className={styles.learnMore}>Learn more<img className={styles.arrow} src="halfArrow.svg" alt="" />
                </p>
              </Link>


            </div>
          </div>




        </div>

      </div>
    </>
  )
}