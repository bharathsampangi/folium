import Link from "next/link"
import styles from "./styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerOptions}>
                <div className={styles.footerOption1}>
                    <div className={styles.head}>
                        +91 8147530047<br/>
                        chowrakesh1993@gmail.com
                    </div>
                    <div className={styles.text}>
                        Borewell Rd, Whitefield,<br/>
                        Bengaluru, 560066
                    </div>
                    <button className={styles.button}>
                        <Link href="/enquire">
                            download brochure
                        </Link>
                    </button>
                </div>
                <div className={styles.footerOption2}>
                    <div className={styles.head}>Menu</div>
                    <ul className={styles.list}>
                        <li>
                            <Link href="/enquire">
                                enquire now
                            </Link>
                        </li>
                        <li>
                            <Link href="/#location">
                                location
                            </Link>
                        </li>
                        {/* <li>community</li> */}
                        <li>
                            <Link href="/#preview">
                                types of homes
                            </Link>
                        </li>
                        {/* <li>about sumadhura</li> */}
                    </ul>
                </div>
                <div className={styles.footerOption3}>
                    <div className={styles.head}>Navigation</div>
                    <ul className={styles.list}>
                        <li>
                            <Link href="/project">
                                project
                            </Link>
                        </li>
                        <li>
                            <Link href="/features">
                                features
                            </Link>
                        </li>
                        <li>
                            <Link href="/enquire">
                                details
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footerEnd}>
                <div></div>
                <div>Terms & Conditions</div>
            </div>
        </footer>
    )
}