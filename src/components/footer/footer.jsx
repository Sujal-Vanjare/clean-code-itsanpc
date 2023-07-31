import Link from "next/link";
import styles from "./footer.module.css";

export default function footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <footer className={styles.footer}>
          <div>
            <img className={styles.webIcon} src="itsanpc-icon.svg" alt="" />
          </div>
          <div className={styles.summary}>
            Discover the best PC parts for your ultimate build. Expert
            recommendations, in-depth guides, and the latest trends.
          </div>

          <div className={styles.contact}>
            <p>If you're interested in Collaborating with us for </p>
            <p>
              <span className={styles.advertise}>
                Sponsorship & Advertising
              </span>
              opportunities, please reach out to our team at
            </p>
            <p>
              email address:
              <Link href="">
                <span className={styles.email}> itsanpc@gmail.com</span>
              </Link>
            </p>
            <p>
              We're excited to partner with industry leaders and enthusiasts to
              bring valuable content to our audience.
            </p>
          </div>

          <div className={styles.socialMedia}>
            <div className={styles.socialMediaLinks}>
              <div className={styles.followUs}>Follow us</div>

              <Link href="">
                <img className={styles.icons} src="twitterLogo.svg" alt="" />
              </Link>
              <Link href="">
                <img className={styles.icons} src="youtubeLogo.svg" alt="" />
              </Link>
              <Link href="">
                <img className={styles.icons} src="instagramLogo.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.lastFooter}>
            <div>Copyright © 2023 itsanpc.com. All rights reserved.</div>

            <Link href="">
              <div className={styles.support}>
                <img
                  className={styles.donateIcon}
                  src="donate-icon.svg"
                  alt=""
                />
                Donate & Support
              </div>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
