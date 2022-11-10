import Link from "next/link"
import styles from "./styles/Experience.module.css"

export default function Experience() {
    return (
        <section className={styles.experience}>
            <div className={styles.empty}>
                <div className={styles.experienceImage}>
                    <img src="/images/homecarimg.png" />
                </div>
            </div>
            <div className={styles.experienceBox}>
                <div className={styles.header}>visit our experience center</div>
                <p className={styles.text}>
                    Experience what it feels like to be a Folium resident. 
                    Our experience centre is all set to take you on an immersive, 
                    informative and innovative home-buying journey.
                </p>
                <button className={styles.button}>
                    <Link href="/enquire">
                        Schedule a Visit
                    </Link>
                </button>
            </div>
        </section>
    )
}