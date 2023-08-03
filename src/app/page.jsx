import Image from "next/image";
import styles from "./page.module.css";
import Arrow from "@/components/HalfArrow/arrow";
import Link from "next/link";
import SmallArrow from "@/components/HalfArrow/smallArrow";
import ItemCard from "@/components/ItemCard/itemCard";
import BlogCardSection from "@/components/BlogCardSection/blogCardSection";

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
                alt="pc image"
                width={270}
                height={270}
                priority
              />
            </div>
          </div>
        </div>

        {/*  */}

        <section className={styles.section}>
          <BlogCardSection
            firstHref=""
            firstImg="pc-setup-img.png"
            firstCateg="pc setup"
            firstHead="Best Pc Setup under $2000"
            firstPara="The best PC setup can vary depending on individual needs, preferences, and the intended use of the computer. including gaming, content creation, and professional work "
            firstDate="Aug 03, 2023"

            secondHref=""
            secondImg="intelvsamd-img.png"
            secondCateg="intel vs amd"
            secondHead="Intel better than Amd"
            secondPara="Intel vs Amd what should you choose , what is the best for you, what should you look in before buying that, lets dive into that and look."
            secondDate="Aug  06, 2023"

            thirdHref=""
            thirdImg="rtx4060img.png"
            thirdCateg="rtx 4060 ti"
            thirdHead="New nvidia RTX 4060ti"
            thirdPara="NVIDIA's RTX series graphics cards are known for their advanced ray-tracing capabilities and high-performance gaming features."
            thirdDate="Aug 16, 2023"
          />

        </section>


        <section className={styles.section}>
          <div className={styles.itemSectionHeader}>The latest. <span className={styles.sectionHead2}>Take a look at what's new right now.</span></div>

          <div className={styles.itemContainer}>
            <ItemCard
              href=""
              img="cpu-box-img.png"
              product="Intel i9 13900k"
              head="New intel 24 core Cpu, should we buy or Not"
              desc="Price start from $589.00 - $599.00, is this best."
            />
            <ItemCard
              href=""
              img="cpu-box-img2.png"
              product="Amd RX 7800x"
              head="New intel 24 core Cpu, should we buy or Not"
              desc="Price start from $589.00 - $599.00, is this best."
            />
            <ItemCard
              href=""
              img="cpu-box-img2.png"
              product="Amd RX 7800x"
              head="New intel 24 core Cpu, should we buy or Not"
              desc="Price start from $589.00 - $599.00, is this best."
            />
          </div>
        </section>
      </div>
    </>
  );
}
