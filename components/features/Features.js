import styles from "./styles/Features.module.css"

export default function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.header}>
                Over 50+ vacations within your community
            </div>
            <p className={styles.text}>
                The entire neighbourhood is designed around the concept 
                of enabling refreshing breaks for your family
            </p>
            <div className={styles.featureBox}>
                <div className={styles.featureItem}>
                    <img src="/images/tree.svg" alt="Trees"/>
                    <div>500+ <br/>Trees</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/birds.svg" alt="Birds"/>
                    <div>35+ <br/>Birds</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/lake-facing.svg" alt="Lake Facing"/>
                    <div>
                        200 metres long<br/>
                        lake-facing<br/>
                        promenade
                    </div>
                </div>
            </div>

            <div className={styles.featureBox}>
                <div className={styles.featureItem}>
                    <img src="/images/open-space.svg" alt="Open Space"/>
                    <div>Over 80% <br/>open space</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/garden.svg" alt="Aromatic Garden"/>
                    <div>Aromatic<br/>Garden</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/courtyard-garden.svg" alt="Courtyard Garden"/>
                    <div>Courtyard<br/>Garden</div>
                </div>
            </div>

            <div className={styles.featureBox}>
                <div className={styles.featureItem}>
                    <img src="/images/musical-garden.svg" alt="Musical Garden"/>
                    <div>Musical<br/>Garden</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/kinetic-garden.svg" alt="Kinetic Garden"/>
                    <div>Aromatic<br/>Garden</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/alcove-garden.svg" alt="Alcove Garden"/>
                    <div>
                        Courtyard<br/>Garden
                    </div>
                </div>
            </div>
        </div>
    )
}