"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isHide, setIsHide] = useState(true);
  const desktopSearchHideClass = () => {
    setIsHide(false);
  };
  const removeDesktopSearchHideClass = () => {
    setIsHide(true);
  };

  const [isActive, setIsActive] = useState(true);

  const mobileNavActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeMobileNavActiveClass = () => {
    setIsActive(true);
  };

  const [searchActive, setSearchActive] = useState(true);
  const mobileSearchActiveClass = () => {
    setSearchActive(false);
  };
  const cancelMobileSearchActiveClass = () => {
    setSearchActive(true);
  };
  console.log(pathname);

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
                <input type="text" placeholder="Search itsanpc.com" />
              </form>
            </div>
            <div
              className={styles.link_close}
              onClick={removeDesktopSearchHideClass}
            ></div>

            <div className={styles.quick_links}>
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link href="#">Visiting an Apple Store FAQ</Link>
                </li>
                <li>
                  <Link href="#">Shop Apple Store Online</Link>
                </li>
                <li>
                  <Link href="#">Accessories</Link>
                </li>
                <li>
                  <Link href="#">AirPods</Link>
                </li>
                <li>
                  <Link href="#">AirTag</Link>
                </li>
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
                <li>
                  <Link href="#">Visiting an Apple Store FAQ</Link>
                </li>
                <li>
                  <Link href="#">Shop Apple Store Online</Link>
                </li>
                <li>
                  <Link href="#">Accessories</Link>
                </li>
                <li>
                  <Link href="#">AirPods</Link>
                </li>
                <li>
                  <Link href="#">AirTag</Link>
                </li>
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
