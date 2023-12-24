"use client";
import { useState } from "react";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();
  const currentURL = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  const [message, setMessage] = useState("");

  const handleWhatsAppClick = () => {
    const shareURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      currentURL
    )}`;
    window.open(shareURL, "_blank");
  };

  const handleTwitterClick = () => {
    const shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentURL
    )}`;
    window.open(shareURL, "_blank");
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Check out this blog");
    const body = encodeURIComponent(currentURL);
    const shareURL = `mailto:?subject=${subject}&body=${body}`;
    window.open(shareURL, "_blank");
  };

  const handleCopyLinkClick = () => {
    navigator.clipboard.writeText(currentURL).then(() => {
      setMessage("Copied to clipboard");
      // Automatically clear the message after a few seconds
      setTimeout(() => setMessage(""), 3000);
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleWhatsAppClick}>
        <img src="/whatsapp-link.svg" alt="whatsapp" className={styles.icon} />
      </button>
      <button onClick={handleTwitterClick}>
        <img src="/twitterx-link.svg" alt="twitterx" className={styles.icon} />
      </button>
      <button onClick={handleEmailClick}>
        <img src="/email-link.svg" alt="email" className={styles.icon} />
      </button>
      <button onClick={handleCopyLinkClick} className={styles.copy}>
        <img src="/link-icon.svg" alt="link" className={styles.icon} />
      </button>
      {message && <p className={styles.msg}>{message}</p>}
    </div>
  );
}
