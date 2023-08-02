import Link from "next/link";
import styles from "./smallArrow.module.css";

export default function SmallArrow(props) {
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

