import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import siteMetadata from "@/utils/siteMetaData";

export default function footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <footer className={styles.footer}>
          <div>
            <Image
              src="/itsanpc-icon.svg"
              width={20}
              height={20}
              alt="website icon"
              className={styles.webIcon}
            />
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
              <div className={styles.followUs}>Follow us on</div>

              <Link href={siteMetadata.twitter} target="_blank">
                <Image
                  className={styles.icons}
                  src="/twittx.svg"
                  width={48}
                  height={48}
                  alt="twitter icon"
                />
              </Link>
              <Link href="">
                <Image
                  className={styles.icons}
                  src="/youtube.svg"
                  width={48}
                  height={48}
                  alt="youtube icon"
                />
              </Link>
              <Link href={siteMetadata.github} target="_blank">
                <Image
                  className={styles.icons}
                  src="/github-ic.svg"
                  width={48}
                  height={48}
                  alt="github icon"
                />
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
                  src="/donate-icon.svg"
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
