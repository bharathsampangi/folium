import styles from "./styles/Hero.module.css"
import Image from "next/image"
import Folium from "../../public/images/folium-2.png"

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
                            An exclusive residential neighbourhood that lives and breathes tranquillity. 
                            Located in a peaceful setting right at the heart of thriving Whitefield.
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
                    <button className={styles.listButton}>Read More</button>
                </div>
            </div>
        </section>
    )
}