import styles from "./styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerOptions}>
                <div className={styles.footerOption1}>
                    <div className={styles.head}>
                        +91 8147530047<br/>
                        bharathsampangi95@gmail.com
                    </div>
                    <div className={styles.text}>
                        Borewell Rd, Whitefield,<br/>
                        Bengaluru, 560066
                    </div>
                    <button className={styles.button}>download brochure</button>
                </div>
                <div className={styles.footerOption2}>
                    <div className={styles.head}>Menu</div>
                    <ul className={styles.list}>
                        <li>enquire now</li>
                        <li>location</li>
                        <li>community</li>
                        <li>types of homes</li>
                        <li>about sumadhura</li>
                    </ul>
                </div>
                <div className={styles.footerOption3}>
                    <div className={styles.head}>Navigation</div>
                    <ul className={styles.list}>
                        <li>project</li>
                        <li>features</li>
                        <li>details</li>
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