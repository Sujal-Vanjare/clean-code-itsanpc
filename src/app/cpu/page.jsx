import styles from "./page.module.css";
import Image from "next/image";

export default function Cpu() {
  return (
    <>
      <main className={styles.page}>

        <div className={styles.container}>
          <div className={styles.sidebar}>
            hello
          </div>
          <div className={styles.content}>

            <div className={styles.hero}>
              <h1 className={styles.topicTitle}>Designing for visionOS</h1>
              <h3 className={styles.topicSubhead}>When people wear Apple Vision Pro, they enter an infinite 3D space where they can engage with your app or game while staying connected to their surroundings.</h3>
            </div>
  
              <Image
                className={styles.image}
                src="/intelvsamd-img.png"
                alt="pc image"
                width={640}
                height={360}
                priority
              />
              <p className={styles.text}>
              As you begin designing your app or game for visionOS, start by understanding the fundamental device characteristics and patterns that distinguish the platform. Use these characteristics and patterns to inform your design decisions and help you create immersive and engaging experiences.
              </p>




          </div>
        </div>
      </main>
    </>
  )
}