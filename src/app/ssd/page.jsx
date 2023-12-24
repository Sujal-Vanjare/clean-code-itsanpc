import SidebarHighlight from "@/components/SidebarHighlight/sidebarHighlight";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Page() {
  const sections = [
    {
      id: "1",
      title: " Building A Complete Pc Setup",
    },
    {
      id: "2",
      title: "Understanding PC Component",
    },
    {
      id: "3",
      title: "Identifying Your Needs",
    },
    {
      id: "4",
      title: "Set a Budget",
    },
  ];

  return (
    <main className={styles.page}>
      <div className="blogContainer">
        <article className="article">
          <header className="hero">
            <div className="category-container">
              <div className="categories">pc buld</div>
              <div>8 min read</div>
            </div>

            <div className="time-container">
              <div>
                <span>Published on </span>
                <time className="time" dateTime="2023-01-15T10:30:00Z">
                  11 December 2023
                </time>
              </div>
              <div>
                by <span className="author">John Doe</span>
              </div>
            </div>

            <h1 className="title">PC Build Complete Guide 2023</h1>
            <h3 className="subtitle">
              What do you need to build a Complete PC Setup ?
            </h3>
            <div className="link">link</div>
          </header>

          <Image
            className="main-img"
            src="/pc-build-setup-img.png"
            alt="pc image"
            width={1200}
            height={675}
            priority
          />
          <div>
            <section id="1">
              <h4 className="section-title">
                <span className="section-title-color">
                  Lets get straight into
                </span>
                <span> Building A Complete Pc Setup</span>
              </h4>
              <p>for a Complete setup you need </p>
              <ul>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>PC</strong>
                      <p>
                        That's our computer, Consist of components like the CPU,
                        GPU, RAM, and storage, etc. we are going to build that
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/pc-cabinet.png"
                      alt="pc image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>Monitor</strong>
                      <p>
                        Monitors come in various Screen sizes, Resolutions,
                        Refresh Rate, Panel Technology, Color Accuracy, Curved
                        or Flat Screen, Adaptive Sync Technologies like: NVIDIA
                        G-Sync and AMD FreeSync
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/monitor.png"
                      alt="monitor image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>Keyboard</strong>
                      <p>
                        Keyboards come in different forms, catering to different
                        needs like, Mechanical Keyboard, Standard Keyboard,
                        Laptop Keyboard, Wireless Keyboard.
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/keyboard.png"
                      alt="keyboard image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>Mouse</strong>
                      <p>
                        Mouse come in various types like, Standard Mouse, Gaming
                        Mouse, Wireless Mouse, Pen/Stylus Mouse, Multi-Button
                        Mouse.
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/mouse.png"
                      alt="mouse image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>Headphone</strong>
                      <p>
                        There are several types of headphones available,
                        Over-Ear Headphones, On-Ear Headphones, Noise-Canceling
                        Headphones, Wireless Headphones, Gaming Headsets.
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/headphone.png"
                      alt="headphone image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <p>
                    and other PC peripherals according to your needs and
                    requirements
                  </p>
                </li>
              </ul>
            </section>

            <section id="2">
              <h4 className="section-title">
                <span className="section-title-color">Understanding </span>PC
                Component
              </h4>
              <p>for a Pc build you need this 7 Compopnents</p>

              <ul>
                <li>
                  <div className="li-with-img">
                    <span>
                      <span>
                        <strong>CPU</strong>
                        <p>
                          CPU is the Brain of the Computer system
                          <br /> There are two most prominent CPU manufacturers
                          are Intel and AMD. Some CPUs have integrated graphics,
                          while others require a separate dedicated graphics
                          card.
                        </p>
                      </span>
                    </span>
                    <Image
                      className="li-img"
                      src="/cpu.png"
                      alt="cpu image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>

                <li>
                  <div className="li-with-img">
                    <span>
                      <span>
                        <strong>CPU Cooler</strong>
                        <p>
                          some cpu's come with their own stock cpu cooler, but
                          some not so you nee to buy a separate cpu cooler
                          <br /> There are two most prominent CPU manufacturers
                          are Intel and AMD. Some CPUs have integrated graphics,
                          while others require a separate dedicated graphics
                          card.
                        </p>
                      </span>
                    </span>
                    <Image
                      className="li-img"
                      src="/cpu-cooler.png"
                      alt="cpu image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>

                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>GPU</strong>
                      <p>
                        Graphic Card for advanced graphics processing
                        <br /> If you're planning on gaming or using intensive
                        graphics applications, then you need a dedicated GPU. If
                        not then CPU integrated gpu is enough <br /> There are
                        two main GPU chip producers that are NVIDIA and AMD.{" "}
                        <br /> in GPU there is Founder's Edition Cards and
                        Normal Card like Asus, Msi, Gigabyte Card
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/gpu.png"
                      alt="gpu image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>SSD</strong>
                      <p>
                        SSDs for Storage <br />
                        There are several types of SSDs like M.2 SSD, NVMe SSD,
                        SATA SSD, External SSD <br /> There are several
                        reputable SSD brands like Samsung, Crucial, Western
                        Digital, Kingston, etc.
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/ssd1.png"
                      alt="ssd image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>RAM</strong>
                      <p>
                        The amount and speed of RAM directly impact a system's
                        performance <br /> There are several reputable brands
                        that manufacture high-quality RAM like Corsair, G.Skill,
                        Kingston, Crucial, etc.
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/ram.png"
                      alt="ram image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>Motherboard</strong>
                      <p>
                        Now we are going to plug all the part on to the
                        Motherboard, so all the components will be communicate
                        and interact <br />
                        Motherboards come in various types and form factors such
                        as ATX, Micro-ATX, and Mini-ITX.
                        <br /> There are several motherboard brands in the
                        market, like ASUS, MSI, Gigabyte, ASRock, EVGA
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/motherboard.png"
                      alt="motherboard image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>PSU</strong>
                      <p>
                        Now for all the component we need the power and that
                        will provide by Power Supply Unit
                        <br />
                        Here are some well-known PSU brands Corsair, EVGA,
                        Cooler Master, Be Quiet!, SilverStone ,etc
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/psu.png"
                      alt="psu image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
                <li>
                  <div className="li-with-img">
                    <span>
                      <strong>Case</strong>
                      <p>
                        case, also known as a chassis or tower <br />
                        It will provide physical protection, cooling, and a
                        place to organize and assemble the various parts of a
                        computer system. <br />
                        Computer cases come in different form factors that
                        correspond to motherboard sizes, such as ATX, Micro-ATX,
                        and Mini-ITX.
                      </p>
                    </span>

                    <Image
                      className="li-img"
                      src="/case.png"
                      alt="case image"
                      width={1200}
                      height={675}
                      priority
                    />
                  </div>
                </li>
              </ul>
            </section>

            <section id="3">
              <h4 className="section-title">
                <span className="section-title-color">Identifying Your </span>
                Needs
              </h4>
              <p>
                Before you start building your custom PC, it's essential to
                understand what you want to use it for. <br /> Like you want to
                use it for
              </p>
              <ul>
                <li>
                  <p>
                    <strong> Gaming: </strong>
                    If you want a PC for gaming,then you'll need a powerful
                    graphics card(GPU), a fast processor(CPU), and enough RAM to
                    handle modern games.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Content Creation: </strong>
                    For tasks like video editing, graphic design, or 3D
                    rendering, you'll need a powerful CPU, plenty of RAM, and
                    possibly a high-end graphics card(GPU).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Productivity: </strong>
                    If you need a PC for office work, web browsing, and
                    multitasking, a mid-range CPU and sufficient RAM should
                    sufficient and you don't need additional graphic card(GPU)
                    cpu integrated graphics will be enough
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Home Theater or Media Center: </strong>
                    For a PC that connects to your TV and serves as a media
                    center, a small form factor PC with decent graphics
                    capabilities might be ideal.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Budget-Friendly PC: </strong>
                    If you have a limited budget, you can prioritize essential
                    components and upgrade later.
                  </p>
                </li>
              </ul>
              <p>
                Knowing your purpose will help you make informed decisions and
                ensure that your custom PC meets your specific needs without
                overspending on unnecessary components.
              </p>
            </section>

            <section id="4">
              <h4 className="section-title">
                <span className="section-title-color">Set a </span>Budget
              </h4>
              <p>
                It's crucial to establish a budget. Building a custom PC allows
                you to control costs better than buying a pre-built one, but
                it's still essential to have a spending limit in mind. Consider
                the following while setting your budget:
              </p>
              <ul>
                <li>
                  <p>
                    All PC Components are important in their own way, if you buy
                    a high-end CPU, and buy low-end Motherboard, like you spend
                    most of your budget on the one component and compromise on
                    others, this is very bad, It will affect the performance of
                    your pc.
                  </p>
                </li>
                <li>
                  <p></p>
                </li>
              </ul>
            </section>
          </div>
        </article>
        <SidebarHighlight sections={sections} />
      </div>
    </main>
  );
}
