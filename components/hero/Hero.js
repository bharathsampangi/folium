import styles from "./styles/Hero.module.css"
import Image from "next/image"
import Folium from "../../public/images/folium-2.png"
import Link from "next/link"

export default function Hero() {
    return (
        <section>
            <div className={styles.landingMain}></div>
            <div className={styles.landingText}>
                <Image src={Folium} alt="Folium" className={styles.landingImage} />
                <div className={styles.landingBox}>
                    <div className={styles.landingHeader}>
                        <div>What is Folium?</div>
                        <p>
                            Located in thriving Whitefield, this quiet residential
                            area is surrounded by beauty and tranquility.
                        </p>
                    </div>
                    <div className={styles.hero}>
                        <div className={styles.heroList}>
                            <div className={styles.heroListItem}>
                                <span className={styles.heroListItemHeader}>1100</span>
                                <span className={styles.heroListItemText}>units across 5 towers</span>
                            </div>
                            <div className={styles.heroListItem}>
                                <span className={styles.heroListItemHeader}>35+</span>
                                <span className={styles.heroListItemText}>types of plans</span>
                            </div>
                            <div className={styles.heroListItem}>
                                <span className={styles.heroListItemHeader}>80%</span>
                                <span className={styles.heroListItemText}>open space</span>
                            </div>
                            <div className={styles.heroListItem}>
                                <span className={styles.heroListItemHeader}>200</span>
                                <span className={styles.heroListItemText}>metres long lake-facing promenade</span>
                            </div>
                        </div>
                    </div>
                    <button className={styles.listButton}><Link href="/project">Read More</Link></button>
                </div>
            </div>
        </section>
    )
}