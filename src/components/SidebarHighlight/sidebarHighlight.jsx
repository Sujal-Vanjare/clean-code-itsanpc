"use client";
import React, { useEffect, useState } from "react";
import styles from "./sidebarHighlight.module.css";

function scrollToContentSection(sectionId) {
  const contentSection = document.getElementById(sectionId);
  if (contentSection) {
    const topOffset = contentSection.offsetTop - 29;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  }
}

const SidebarHighlight = (props) => {
  const [activeSection, setActiveSection] = useState(null);
  const [threshold, setThreshold] = useState(0.7); // Default threshold

  useEffect(() => {
    const sidebarItems = document.querySelectorAll(`.${styles.parent_item}`);

    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: threshold, // Use the dynamic threshold
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sidebarItems.forEach((item) => {
      const sectionId = item.id;
      const contentSection = document.getElementById(sectionId);
      if (contentSection) {
        intersectionObserver.observe(contentSection);
      }

      item.addEventListener("click", () => {
        scrollToContentSection(sectionId);
      });
    });

    // Clean up the observer
    return () => {
      intersectionObserver.disconnect();
    };
  }, [threshold]); // Re-run the effect when the threshold changes

  // Adjust the threshold value based on screen height
  useEffect(() => {
    const handleResize = () => {
      // Get the current screen height
      const screenHeight = window.innerHeight;

      // Define threshold values for different screen height categories
      let newThreshold = 0.7; // Default threshold

      // Adjust threshold based on screen height
      if (screenHeight <= 600) {
        newThreshold = 0.3; // Extra small screens (e.g., mobile phones)
      } else if (screenHeight <= 900) {
        newThreshold = 0.4; // Small screens (e.g., small laptops)
      } else if (screenHeight <= 1200) {
        newThreshold = 0.5; // Medium screens (e.g., standard laptops)
      } else {
        newThreshold = 0.7; // Large screens (e.g., large desktop monitors)
      }

      // Update the threshold
      setThreshold(newThreshold);
    };

    // Initial call to set the threshold based on the screen height
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.floating_right_aside}>
      <div className={styles.high_on_this_page}>
        <ul className={styles.items}>
          {props.sections.map((section) => (
            <li
              className={`${styles.parent_item} ${
                activeSection === section.id ? styles.active : ""
              }`}
              id={section.id}
              key={section.id}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarHighlight;
