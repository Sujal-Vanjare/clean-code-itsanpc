import Image from "next/image"
import Link from "next/link"
import styles from "./blogCardSection.module.css";

export default function BlogCardSection(props) {
    return (
        <>
            <div className={styles.sectionContent}>
                <div className={styles.sectionHead}>{props.sectionHead}&nbsp;&nbsp;<span className={styles.sectionHead2}>{props.sectionHead2}</span></div>


                <div className={styles.cardList}>
                    <Link href={props.firstHref}>
                        <div className={`${styles.card} ${styles.cardHero}`}>
                            <div className={styles.cardHeroImg}>
                                <Image
                                    className={styles.heroImg}
                                    src={`/${props.firstImg}`}
                                    width={1200}
                                    height={675}
                                    alt="image of the card"
                                    priority={true}
                                />
                            </div>
                            <div className={styles.cardDesc}>
                                <div className={styles.cardHead}>
                                    <p className={styles.category}>{props.firstCateg}</p>
                                    <h2 className={styles.heroHeadline}>{props.firstHead}</h2>
                                    <p className={styles.paragraph}>{props.firstPara}</p>
                                </div>
                                <div className={styles.cardDate}>{props.firstDate}</div>
                            </div>
                        </div>
                    </Link>
                    <Link href={props.secondHref}>
                        <div className={`${styles.card} ${styles.card2up}`}>
                            <div className={styles.cardUp2Img}>


                                <Image
                                    className={styles.up2Img}
                                    src={`/${props.secondImg}`}
                                    width={1200}
                                    height={675}
                                    alt="image of the card"
                                    priority={true}

                                />
                            </div>
                            <div className={styles.cardDesc}>
                                <div className={styles.cardHead}>
                                    <p className={styles.category}>{props.secondCateg}</p>
                                    <h2 className={styles.up2Headline}>{props.secondHead}</h2>
                                    <p className={styles.paragraph}>{props.secondPara}</p>
                                </div>
                                <div className={styles.cardDate}>{props.secondDate}</div>
                            </div>
                        </div>
                    </Link>
                    <Link href={props.thirdHref}>
                        <div className={`${styles.card} ${styles.card2up}`}>
                            <div className={styles.cardUp2Img}>
                                <Image
                                    className={styles.up2Img}
                                    src={`/${props.thirdImg}`}
                                    width={1200}
                                    height={675}
                                    alt="image of the card"
                                    priority={true}

                                />
                            </div>
                            <div className={styles.cardDesc}>
                                <div className={styles.cardHead}>
                                    <p className={styles.category}>{props.thirdCateg}</p>
                                    <h2 className={styles.up2Headline}>{props.thirdHead}</h2>
                                    <p className={styles.paragraph}>{props.thirdPara}</p>
                                </div>
                                <div className={styles.cardDate}>{props.thirdDate}</div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}