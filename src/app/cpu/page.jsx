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
            <ul>
              <li>
                <p className={styles.itemImgList}>
                  <span><strong>PC</strong>
                    <p>That's our computer, Consist of components like the CPU, GPU, RAM, and storage, etc. we are going to build that
                    </p>
                  </span>


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
                  <span>
                    <strong>Monitor</strong>
                    <p>Monitors come in various Screen sizes, Resolutions, Refresh Rate, Panel Technology, Color Accuracy, Curved or Flat Screen, Adaptive Sync Technologies like: NVIDIA G-Sync and AMD FreeSync </p>
                  </span>

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
                  <span><strong>Keyboard</strong>
                    <p>Keyboards come in different forms, catering to different needs like, Mechanical Keyboard, Standard Keyboard, Laptop Keyboard, Wireless Keyboard.</p>
                  </span>

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
                  <span><strong>Mouse</strong>
                    <p>Mouse come in various types like, Standard Mouse, Gaming Mouse, Wireless Mouse, Pen/Stylus Mouse, Multi-Button Mouse.</p>
                  </span>

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
                  <span><strong>Headphone</strong>
                    <p>There are several types of headphones available, Over-Ear Headphones, On-Ear Headphones, Noise-Canceling Headphones, Wireless Headphones, Gaming Headsets.</p>
                  </span>

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
                  and other PC peripherals according to your needs and
                  requirements
                </p>
              </li>
            </ul>

            <h4>
              <span className={styles.head2}>Lets dive into</span> Building A PC
            </h4>
            <p>for a Pc build you need this 7 Compopnents</p>

            <ul>
              <li>
                <p className={styles.itemImgList}>
                  <span>
                    <span><strong>CPU</strong>
                      <p>CPU is the Brain of the Computer system<br /> There are two most prominent CPU manufacturers are Intel and AMD. Some CPUs have integrated graphics, while others require a separate dedicated graphics card. </p>
                    </span>

                  </span>
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
                  <span>
                    <strong>GPU</strong>
                    <p>Graphic Card for advanced graphics processing<br /> If you're planning on gaming or using intensive graphics applications, then you need a dedicated GPU. If not then CPU integrated gpu is enough <br /> There are two main GPU chip producers that are  NVIDIA and AMD. <br /> in GPU there is Founder's Edition Cards and Normal Card like Asus, Msi, Gigabyte Card</p>
                  </span>

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
                  <span>
                    <strong>SSD</strong>
                    <p>SSDs for Storage <br />There are several types of SSDs like M.2 SSD, NVMe SSD, SATA SSD, External SSD <br />  There are several reputable SSD brands like Samsung, Crucial, Western Digital, Kingston, etc. </p>
                  </span>

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
                  <span>
                    <strong>RAM</strong>
                    <p>
                      The amount and speed of RAM directly impact a system's performance <br /> There are several reputable brands that manufacture high-quality RAM like  Corsair, G.Skill, Kingston, Crucial, etc.
                    </p>
                  </span>

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
                  <span>
                    <strong>Motherboard</strong>
                    <p>
                      Now we are going to plug all the part on to the Motherboard, so all the components will be communicate and interact <br />
                      Motherboards come in various types and form factors such as ATX, Micro-ATX, and Mini-ITX.
                      <br /> There are several motherboard brands in the market, like ASUS, MSI, Gigabyte, ASRock, EVGA
                    </p>

                  </span>

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
                  <span>
                    <strong>PSU</strong>
                    <p>
                      Now for all the component we need the power and that will provide by Power Supply Unit
                      <br />
                      Here are some well-known PSU brands Corsair, EVGA, Cooler Master, Be Quiet!, SilverStone ,etc
                    </p>
                  </span>

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
                  <span>
                    <strong>Case</strong>
                    <p>
                      case, also known as a chassis or tower <br />
                      It will provide physical protection, cooling, and a place to organize and assemble the various parts of a computer system. <br />
                      Computer cases come in different form factors that correspond to motherboard sizes, such as ATX, Micro-ATX, and Mini-ITX.
                    </p>
                  </span>

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
           
            <h4>
              <span className={styles.head2}>Define Your</span> Purpose to use PC  
            </h4>
            <p>Before you start building your custom PC, it's essential to understand what you want to use it for. This will guide your choices when selecting the components.
            </p>
            <ul>
              <li>

              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
