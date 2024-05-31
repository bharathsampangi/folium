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
                        <p className={styles.heading}>Pre-Launching</p>
                        <div>The Epitome by Sumadhura Group</div>
                        <p>
                            Located in thriving Rachenahalli, this quiet residential
                            area is surrounded by beauty and tranquility.
                        </p>
                    </div>
                    <button className={styles.listButton}><Link href="#enquire">Read More</Link></button>
                </div>
            </div>
        </section>
    )
}