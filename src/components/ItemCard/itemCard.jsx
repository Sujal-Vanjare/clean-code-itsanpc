import Image from "next/image"
import Link from "next/link"
import SmallArrow from "../HalfArrow/smallArrow"
import styles from "./itemCard.module.css";

export default function ItemCard(props) {
    return (
        <>
            <Link href={props.href}>
                <div className={styles.item}>
                    <Image
                        className={styles.itemImg}
                        src={`/${props.img}`}
                        width={260}
                        height={260}
                        alt="pc image"
                    />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemProduct}>{props.product}</h3>
                        <h1 className={styles.itemHead}>{props.head}</h1>
                        <p className={styles.itemDesc}>{props.desc}</p>
                        <SmallArrow link={props.href} text="See more" />
                    </div>
                </div>
            </Link>
        </>
    )
}