"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { usePathname } from "next/navigation";
import siteMetadata from "@/utils/siteMetaData";

export default function Navbar(props) {
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState("");
  const [isHide, setIsHide] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [searchActive, setSearchActive] = useState(true);

  const desktopSearchHideClass = () => {
    setIsHide(false);
  };
  const removeDesktopSearchHideClass = () => {
    setIsHide(true);
    setSearchInput("");
  };

  const mobileNavActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeMobileNavActiveClass = () => {
    setIsActive(true);
  };

  const mobileSearchActiveClass = () => {
    setSearchActive(false);
  };
  const cancelMobileSearchActiveClass = () => {
    setSearchActive(true);
  };

  const mobileSearchComplete = () => {
    setSearchActive(true);
    setIsActive(true);
    setSearchInput("");
  };
  // search bar functionality

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredData = props.dataForSearch.data.filter((item) => {
    const { title, subtitle } = item.attributes;
    const searchLower = searchInput.toLowerCase();
    return (
      title.toLowerCase().includes(searchLower) ||
      subtitle.toLowerCase().includes(searchLower)
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
                {filteredData.length > 0 ? (
                  filteredData.slice(0, 5).map((item) => (
                    <li key={item.id} onClick={removeDesktopSearchHideClass}>
                      <Link
                        href={`${"http://localhost:3000"}/blog/${
                          item.attributes.slug
                        }`}
                        replace
                      >
                        {item.attributes.title}
                      </Link>
                    </li>
                  ))
                ) : (
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
                        href={`${"http://localhost:3000"}/blog/${
                          item.attributes.slug
                        }`}
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
          className={`${styles.overlay} ${isHide ? "" : styles.show} `}
          // style={overlayStyle}
          onClick={removeDesktopSearchHideClass}
        ></div>
      </div>
    </>
  );
}
