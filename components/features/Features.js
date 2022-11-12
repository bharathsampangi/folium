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
                    <img src="/images/tree.svg" />
                    <div>500+ <br/>Trees</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/birds.svg" />
                    <div>35+ <br/>Birds</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/lake-facing.svg" />
                    <div>
                        200 metres long<br/>
                        lake-facing<br/>
                        promenade
                    </div>
                </div>
            </div>

            <div className={styles.featureBox}>
                <div className={styles.featureItem}>
                    <img src="/images/open-space.svg" />
                    <div>Over 80% <br/>open space</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/garden.svg" />
                    <div>Aromatic<br/>Garden</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/courtyard-garden.svg" />
                    <div>
                        Courtyard<br/>
                        Garden
                    </div>
                </div>
            </div>

            <div className={styles.featureBox}>
                <div className={styles.featureItem}>
                    <img src="/images/musical-garden.svg" />
                    <div>Musical <br/>Garden</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/kinetic-garden.svg" />
                    <div>Aromatic<br/>Garden</div>
                </div>
                <div className={styles.featureItem}>
                    <img src="/images/alcove-garden.svg" />
                    <div>
                        Courtyard<br/>Garden
                    </div>
                </div>
            </div>
        </div>
    )
}