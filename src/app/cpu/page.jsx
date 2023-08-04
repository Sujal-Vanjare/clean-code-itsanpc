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
              <h1 className={styles.topicTitle}>PC Build Guide 2023</h1>
              <h3 className={styles.topicSubhead}>What do you need to build a PC ? ( A step by step Guide ) </h3>
            </div>

            <Image
              className={styles.image}
              src="/pc-build-setup-img.png"
              alt="pc image"
              width={1200}
              height={675}
              priority
            />
            <p className={styles.firstP}>
              Building a custom PC is like creating your own personalized computer. Instead of buying a pre-made computer from a store, you get to choose all the individual parts that go into it, like the processor, graphics card, memory, and storage. It's kind of like building with Lego blocks!
            </p>
            <p>This way,</p>
            <ul>
              <li><p>You can make sure the PC fits your exact needs and budget.</p></li>
              <li><p>Whether you want a powerful gaming rig, a speedy workstation, or a budget-friendly everyday computer,</p></li>
              <li><p>you can pick the components that match your requirements.</p></li>
              <li><p>Plus, it's a fun and rewarding experience to put it all together yourself!</p></li>
            </ul>

            <p>Here are steps for building a PC</p>

            <h4>Step 1: Define Your Purpose</h4>

            <p>Before you start building your custom PC, it's essential to understand what you want to use it for. This will guide your choices when selecting the components. Here are some common purposes people build custom PCs for:</p>

            <ul>
              <li><p><strong>Gaming:</strong>&nbsp; If you want a PC for gaming, you'll need a powerful graphics card, a fast processor, and enough RAM to handle modern games.</p></li>
              
              <li><p><strong> Content Creation:</strong>&nbsp; For tasks like video editing, graphic design, or 3D rendering, you'll need a powerful CPU, plenty of RAM, and possibly a high-end graphics card.</p></li>
              <li><p><strong>Productivity:</strong>&nbsp; If you need a PC for office work, web browsing, and multitasking, a mid-range CPU and sufficient RAM should sufficient.</p></li>
              <li><p><strong>Home Theater or Media Center:</strong>&nbsp; For a PC that connects to your TV and serves as a media center, a small form factor PC with decent graphics capabilities might be ideal.</p></li>
              <li><p><strong>Budget-Friendly PC:</strong>&nbsp; If you have a limited budget, you can prioritize essential components and upgrade later.</p></li>
            </ul>

            <p>Knowing your purpose will help you make informed decisions and ensure that your custom PC meets your specific needs without overspending on unnecessary components.</p>
            


            <h4>Step 2: Set a Budget</h4>
            <p>Once you've defined the purpose of your custom PC, it's crucial to establish a budget. Building a custom PC allows you to control costs better than buying a pre-built one, but it's still essential to have a spending limit in mind. Consider the following while setting your budget:</p>
            <ul>
              <li><p><strong></strong>&nbsp; </p></li>
              <li><p><strong></strong>&nbsp; </p></li>
              <li><p><strong></strong>&nbsp; </p></li>
              <li><p><strong></strong>&nbsp; </p></li>
            </ul>




          </div>
        </div>
      </main>
    </>
  )
}