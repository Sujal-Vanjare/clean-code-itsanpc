import Link from "next/link";
import styles from "./arrow.module.css";

export default function Arrow(props) {
  return (
    <>
      <Link href={props.link}>
        <div className={styles.text}>
          {props.text}
          <img className={styles.arrow} src="halfArrow.svg" alt="" />
        </div>
      </Link>
    </>
  );
}
