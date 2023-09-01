"use client";
import React, { useEffect } from "react";
import styles from "./sidebarHighlight.module.css";

function scrollToContentSection(sectionId) {
  const contentSection = document.getElementById(sectionId);
  if (contentSection) {
    contentSection.scrollIntoView({ behavior: "smooth" });
  }
}

const SidebarHighlight = () => {
  useEffect(() => {
    const sidebarItems = document.querySelectorAll(`.${styles.parent_item}`);
    sidebarItems.forEach((item) => {
      item.addEventListener("click", () => {
        const sectionId = item.id;
        scrollToContentSection(sectionId);
      });
    });
  }, []);
  return (
    <div className={styles.floating_right_aside}>
      <div className={styles.high_on_this_page}>
        <ul className={styles.items}>
          <li
            className={styles.parent_item}
            id="what-you-need-for-complete-pc-setup-section"
          >
            What you need for Complete Pc Setup
          </li>
          <li
            className={styles.parent_item}
            id="understanding-pc-component-section"
          >
            Understanding PC Component
          </li>
          <li
            className={styles.parent_item}
            id="identifying-your-needs-section"
          >
            Identifying Your Needs
          </li>
          <li className={styles.parent_item} id="set-a-budget-section">
            Set a Budget
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarHighlight;
