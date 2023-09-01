import Image from "next/image";
import styles from "./page.module.css";

import BlogCardSection from "@/components/BlogCardSection/blogCardSection";
import ItemCardSection from "@/components/ItemCardSection/itemCardSection";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel/heroCarousel";

export default function Home() {
  const carouselImages = [
    "/16-7-img.png",
    "/16-7-img2.png",
    "/16-7-img3.png",
    "/16-7-img.png",
    // Add more image URLs as needed
  ];
  return (
    <>
      <div className={styles.page}>
        <section className={styles.topSection}>
          <HeroCarousel images={carouselImages} />
        </section>

        <section className={styles.section}>
          <BlogCardSection
            sectionHead="Latest Blogs"
            sectionHead2="check this out!"
            firstHref=""
            firstImg="pc-setup.png"
            firstCateg="pc setup"
            firstHead="Best Pc Setup under $2000"
            firstPara="The best PC setup can vary depending on individual needs, preferences, and the intended use of the computer. including gaming, content creation, and professional work "
            firstDate="Aug 03, 2023"
            secondHref=""
            secondImg="intel-vs-amd.png"
            secondCateg="Intel Vs Amd"
            secondHead="Intel is better than Amd"
            secondPara="Explore the latest updates to SF Symbols, Apple's library of iconography designed to integrate seamlessly with San Francisco, the system font for Apple platforms."
            secondDate="June 21, 2023"
            thirdHref=""
            thirdImg="rtx-4060ti.png"
            thirdCateg="Rtx 4060 ti"
            thirdHead="New nvidia RTX 4060ti"
            thirdPara="NVIDIA's RTX series graphics cards are known for their advanced ray-tracing capabilities and high-performance gaming features."
            thirdDate="Aug 16, 2023"
          />
        </section>
        <section className={styles.section}>
          <ItemCardSection
            sectionHead="Latest Parts"
            sectionHead2="Take a look at what's new right now."
            firstHref=""
            firstImg="16-9-gpu.png"
            firstCateg="Amd RX 7800x"
            firstHead="New intel 24 core Cpu, should we buy or Not"
            firstPara="Price start from $589.00 - $599.00, is this best."
            secondHref=""
            secondImg="16-9-cpu-box.png"
            secondCateg="Amd RX 7800x"
            secondHead="New intel 24 core Cpu, should we buy or Not"
            secondPara="Price start from $589.00 - $599.00, is this best."
            thirdHref=""
            thirdImg="16-9-cpu-box2.png"
            thirdCateg="Intel i9 13900k"
            thirdHead="New intel 24 core Cpu, should we buy or Not"
            thirdPara="Price start from $589.00 - $599.00, is this best."
            fourthHref=""
            fourthImg="16-9-cpu-box.png"
            fourthCateg="Amd RX 7800x"
            fourthHead="New intel 24 core Cpu, should we buy or Not"
            fourthPara="Price start from $589.00 - $599.00, is this best."
          />
        </section>
      </div>
    </>
  );
}
