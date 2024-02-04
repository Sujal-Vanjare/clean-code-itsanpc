"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { usePathname } from "next/navigation";
import siteMetadata from "@/utils/siteMetaData";

export default function Navbar(props) {
  // For which page i am on, to highlight navbar li
  const pathname = usePathname();

  // For Search Input Value Change
  const [searchInput, setSearchInput] = useState("");

  // For Desktop Search Bar
  const [isHide, setIsHide] = useState(true);

  // For Mobile Nav Links Page
  const [isActive, setIsActive] = useState(true);

  // For Mobile Search Bar
  const [searchActive, setSearchActive] = useState(true);

  // for search Input focus
  const searchInputRef = useRef(null);

  // Desktop Search Bar Show
  const desktopSearchHideClass = () => {
    setIsHide(false);
    searchInputRef.current.focus(); //focus input
  };

  // Desktop Search Bar Hide
  const removeDesktopSearchHideClass = () => {
    setIsHide(true);
    setSearchInput("");
    searchInputRef.current.blur(); // remove focus input
  };

  // Mobile Nav Links Show or Hide
  const mobileNavActiveClass = () => {
    setIsActive(!isActive);
  };
  // Mobile Nav Links Hide
  const removeMobileNavActiveClass = () => {
    setIsActive(true);
  };

  // Mobile Search bar Active
  const mobileSearchActiveClass = () => {
    setSearchActive(false);
  };
  // Mobile Search bar Hide
  const cancelMobileSearchActiveClass = () => {
    setSearchActive(true);
  };

  // Mobile Search bar Quick Links click after effect
  const mobileSearchComplete = () => {
    setSearchActive(true);
    setIsActive(true);
    setSearchInput("");
  };

  // Add Input value to the Search input State
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Filtering the Blogs by Search bar input
  const filteredData = props.dataForSearch.data.filter((item) => {
    const { title, subtitle } = item.attributes; // destructuring Title, Subtitle from data
    const searchLower = searchInput.toLowerCase(); // lowercasing the Search Input State value
    return (
      title.toLowerCase().includes(searchLower) ||
      subtitle.toLowerCase().includes(searchLower) // Either it should match the Title or Subtitle
    );
  });

  return (
    <>
      <div>
        <div
          className={`${styles.nav_container}  ${
            isActive ? "" : styles.active
          } `}
        >
          <nav className={searchActive ? "" : styles.move_up}>
            <ul className={styles.mobile_nav}>
              <li className={styles.firstIcon}>
                <div
                  className={styles.menu_icon_container}
                  onClick={mobileNavActiveClass}
                >
                  <div className={styles.menu_icon}>
                    <span className={styles.line_1}></span>
                    <span className={styles.line_2}></span>
                  </div>
                </div>
              </li>

              <li
                className={styles.centerIcon}
                onClick={removeMobileNavActiveClass}
              >
                <Link href="/" className={styles.link_logo}></Link>
              </li>

              <li className={styles.darkBtnContainer}>
                <div className={styles.darkBtn}>
                  <DarkModeToggle />
                </div>

                <Link href="/support" className={styles.link_donate}></Link>
              </li>
            </ul>

            <ul
              className={`${styles.desktop_nav} ${isHide ? "" : styles.hide} ${
                searchActive ? "" : styles.move_down
              } `}
            >
              <li className={pathname === "/" ? styles.pageActive : ""}>
                <Link
                  href="/"
                  className={`${styles.link_logo} ${
                    pathname === "/" ? styles.pageActive : ""
                  }`}
                ></Link>
              </li>
              <li onClick={removeMobileNavActiveClass}>
                <Link
                  href="/"
                  className={pathname === "/" ? styles.pageActive : ""}
                >
                  PC Build
                </Link>
              </li>
              <li onClick={removeMobileNavActiveClass}>
                <Link
                  href="/cpu"
                  className={pathname === "/cpu" ? styles.pageActive : ""}
                >
                  CPU
                </Link>
              </li>
              <li onClick={removeMobileNavActiveClass}>
                <Link
                  href="/gpu"
                  className={pathname === "/gpu" ? styles.pageActive : ""}
                >
                  GPU
                </Link>
              </li>
              <li onClick={removeMobileNavActiveClass}>
                <Link
                  href="/ssd"
                  className={pathname === "/ssd" ? styles.pageActive : ""}
                >
                  SSD
                </Link>
              </li>
              <li onClick={removeMobileNavActiveClass}>
                <Link
                  href="/ram"
                  className={pathname === "/ram" ? styles.pageActive : ""}
                >
                  RAM
                </Link>
              </li>
              <li onClick={removeMobileNavActiveClass}>
                <Link
                  href="/motherboard"
                  className={
                    pathname === "/motherboard" ? styles.pageActive : ""
                  }
                >
                  Motherboard
                </Link>
              </li>
              <li onClick={removeMobileNavActiveClass}>
                <Link
                  href="/psu"
                  className={pathname === "/psu" ? styles.pageActive : ""}
                >
                  PSU
                </Link>
              </li>
              <li onClick={removeMobileNavActiveClass}>
                <Link
                  href="/monitor"
                  className={pathname === "/monitor" ? styles.pageActive : ""}
                >
                  Monitor
                </Link>
              </li>
              <li className={styles.darkBtn}>
                <DarkModeToggle />
              </li>

              <li onClick={desktopSearchHideClass}>
                <div className={styles.link_search}></div>
              </li>
              <li>
                <Link
                  href="/support"
                  className={`${styles.link_donate} ${
                    pathname === "/support" ? styles.pageActive : ""
                  }`}
                ></Link>
              </li>
            </ul>
          </nav>

          {/* <!__ End of navigation menu items __> */}

          <div
            className={`${styles.search_container} ${
              isHide ? styles.hide : ""
            }`}
          >
            <div className={styles.link_search}></div>
            <div className={styles.search_bar}>
              <form action="">
                <input
                  type="text"
                  placeholder="Search itsanpc.com"
                  value={searchInput}
                  onChange={handleInputChange}
                  ref={searchInputRef}
                />
              </form>
            </div>
            <div
              className={styles.link_close}
              onClick={removeDesktopSearchHideClass}
            ></div>

            <div className={styles.quick_links}>
              <h2>Quick Links</h2>

              <ul>
                {filteredData.length > 0 ? ( // check filter data has any items if has then, run code
                  filteredData.slice(0, 5).map(
                    (
                      item // only slice first 5 items and map them
                    ) => (
                      <li key={item.id} onClick={removeDesktopSearchHideClass}>
                        <Link
                          href={`${siteMetadata.siteUrl}/blog/${item.attributes.slug}`}
                          replace
                        >
                          {item.attributes.title}
                        </Link>
                      </li>
                    )
                  )
                ) : (
                  // if filter data not don't  have data then show this
                  <li>
                    <p className={styles.noMatch}>No matching results found.</p>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className={styles.mobile_search_container}>
            <div className={styles.link_search}></div>
            <div
              className={`${styles.search_bar} ${
                searchActive ? "" : styles.active
              }`}
            >
              <form action="">
                <input
                  type="text"
                  placeholder="Search itsanpc.com"
                  value={searchInput}
                  onChange={handleInputChange}
                  onClick={mobileSearchActiveClass}
                />
              </form>
            </div>
            <span
              className={styles.cancel_btn}
              onClick={cancelMobileSearchActiveClass}
            >
              Cancel
            </span>

            <div className={styles.quick_links}>
              <h2>Quick Links</h2>
              <ul>
                {filteredData.length > 0 ? (
                  filteredData.slice(0, 5).map((item) => (
                    <li key={item.id} onClick={mobileSearchComplete}>
                      <Link
                        href={`${siteMetadata.siteUrl}/blog/${item.attributes.slug}`}
                        replace
                      >
                        {item.attributes.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <p className={styles.noMatchMo}>
                      No matching results found.
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`${styles.overlay} ${isHide ? "" : styles.show} `} // overlay when desktop search bar active
          onClick={removeDesktopSearchHideClass}
        ></div>
      </div>
    </>
  );
}
