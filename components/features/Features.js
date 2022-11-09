import styles from "./styles/Features.module.css"

export default function Features() {
    return (
        <div className={styles.features}>
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
        </div>
    )
}