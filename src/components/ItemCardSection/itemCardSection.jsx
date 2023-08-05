import Image from "next/image"
import Link from "next/link"
import styles from "./itemCardSection.module.css";

export default function ItemCardSection(props) {
    return (
        <>
            <div className={styles.sectionContent}>

                <div className={styles.sectionHead}>{props.sectionHead}&nbsp;&nbsp;<span className={styles.sectionHead2}>{props.sectionHead2}</span></div>

                <div className={styles.cardList}>
                    <Link href={props.firstHref}>
                        <div className={`${styles.card} ${styles.cardHero}`}>
                            <Image
                                className={styles.cardImg}
                                src={`/${props.firstImg}`}
                                width={1200}
                                height={675}
                                alt="image of the product"
                            />
                            <div className={styles.cardDesc}>
                                <div className={styles.cardHead}>
                                    <p className={styles.category}>{props.firstCateg}</p>
                                    <h2 className={styles.cardHeadline}>{props.firstHead}</h2>
                                    <p className={styles.paragraph}>{props.firstPara}</p>
                                </div>
                                <div className={styles.seeMore}>See more<img className={styles.arrow} src="halfArrow.svg" /></div>
                            </div>
                        </div>
                    </Link>
                    <Link href={props.secondHref}>
                        <div className={`${styles.card} ${styles.card2up}`}>
                            <Image
                                className={styles.cardImg}
                                src={`/${props.secondImg}`}
                                width={1200}
                                height={675}
                                alt="image of the product"
                            />
                            <div className={styles.cardDesc}>
                                <div className={styles.cardHead}>
                                    <p className={styles.category}>{props.secondCateg}</p>
                                    <h2 className={styles.cardHeadline}>{props.secondHead}</h2>
                                    <p className={styles.paragraph}>{props.secondPara}</p>
                                </div>
                                <div className={styles.seeMore}>See more<img className={styles.arrow} src="halfArrow.svg" /></div>
                            </div>
                        </div>
                    </Link>
                    <Link href={props.thirdHref}>
                        <div className={`${styles.card} ${styles.card2up}`}>
                            <Image
                                className={styles.cardImg}
                                src={`/${props.thirdImg}`}
                                width={1200}
                                height={675}
                                alt="image of the product"
                            />
                            <div className={styles.cardDesc}>
                                <div className={styles.cardHead}>
                                    <p className={styles.category}>{props.thirdCateg}</p>
                                    <h2 className={styles.cardHeadline}>{props.thirdHead}</h2>
                                    <p className={styles.paragraph}>{props.thirdPara}</p>
                                </div>
                                <div className={styles.seeMore}>See more<img className={styles.arrow} src="halfArrow.svg" /></div>
                            </div>
                        </div>
                    </Link>
                    <Link href={props.fourthHref}>
                        <div className={`${styles.card} ${styles.cardHero}`}>
                            <Image
                                className={styles.cardImg}
                                src={`/${props.fourthImg}`}
                                width={1200}
                                height={675}
                                alt="image of the product"
                            />
                            <div className={styles.cardDesc}>
                                <div className={styles.cardHead}>
                                    <p className={styles.category}>{props.fourthCateg}</p>
                                    <h2 className={styles.cardHeadline}>{props.fourthHead}</h2>
                                    <p className={styles.paragraph}>{props.fourthPara}</p>
                                </div>
                                <div className={styles.seeMore}>See more<img className={styles.arrow} src="halfArrow.svg" /></div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}