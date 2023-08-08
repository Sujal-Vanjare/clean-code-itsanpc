import styles from "./page.module.css";
import Image from "next/image";

export default function Cpu() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.sidebar}>hello</div>
          <div className={styles.content}>
            <div className={styles.hero}>
              <h1 className={styles.topicTitle}>
                PC Build Complete Guide 2023
              </h1>
              <h3 className={styles.topicSubhead}>
                What do you need to build a Complete PC Setup ?
              </h3>
            </div>

            <Image
              className={styles.image}
              src="/pc-build-setup-img.png"
              alt="pc image"
              width={1200}
              height={675}
              priority
            />
            <h4 className={styles.firstP}>
              <span className={styles.head2}>Lets get straight into</span>{" "}
              Building A Complete Pc Setup
            </h4>
            <p>for a Complete setup you need </p>
            <ul className={styles.ulCircle}>
              <li>
                <p className={styles.itemImgList}>
                  <strong>PC</strong>

                  <Image
                    className={styles.ulImage}
                    src="/pc-cabinet.png"
                    alt="pc image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>Monitor</strong>
                  <Image
                    className={styles.ulImage}
                    src="/monitor.png"
                    alt="monitor image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>Keyboard</strong>
                  <Image
                    className={styles.ulImage}
                    src="/keyboard.png"
                    alt="keyboard image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>Mouse</strong>
                  <Image
                    className={styles.ulImage}
                    src="/mouse.png"
                    alt="mouse image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>Headphone</strong>
                  <Image
                    className={styles.ulImage}
                    src="/headphone.png"
                    alt="headphone image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p>
                  and other PC peripherals according to your needs and requirements
                </p>
              </li>
            </ul>



            <h4>
              <span className={styles.head2}>Lets dive into</span> Building A PC{" "}
            </h4>
            <p>for a Pc build you need this Compopnents</p>

            <ul className={styles.ulCircle}>
              <li>
                <p className={styles.itemImgList}>
                  <span><strong>CPU</strong></span>
                  <Image
                    className={styles.ulImage}
                    src="/cpu.png"
                    alt="cpu image"
                    width={1200}
                    height={675}
                    priority
                  />
                  
                </p>
              </li>

              <li>
                <p className={styles.itemImgList}>
                  <strong>GPU</strong>
                  <Image
                    className={styles.ulImage}
                    src="/gpu.png"
                    alt="gpu image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>SSD</strong>
                  <Image
                    className={styles.ulImage}
                    src="/ssd1.png"
                    alt="ssd image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>RAM</strong>
                  <Image
                    className={styles.ulImage}
                    src="/ram.png"
                    alt="ram image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>Motherboard</strong>
                  <Image
                    className={styles.ulImage}
                    src="/motherboard.png"
                    alt="motherboard image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>PSU</strong>
                  <Image
                    className={styles.ulImage}
                    src="/psu.png"
                    alt="psu image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
              <li>
                <p className={styles.itemImgList}>
                  <strong>Case</strong>
                  <Image
                    className={styles.ulImage}
                    src="/case.png"
                    alt="case image"
                    width={1200}
                    height={675}
                    priority
                  />
                </p>
              </li>
            </ul>


          </div>
        </div>
      </main>
    </>
  );
}
