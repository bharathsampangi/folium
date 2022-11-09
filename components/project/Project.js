import styles from "./styles/Project.module.css"

export default function Project() {
    return (
        <div>
            <div className={styles.projectTitleBox}>
                <div className={styles.projectTitleBox1}>
                    <div className={styles.header}>The Project</div>
                    <div className={styles.projectBox1}>
                        Functions as a home,<br/>
                        feels like a holiday<br/>
                        destination
                    </div>
                </div>
                <div className={styles.projectTitleBox2}>
                    <div className={styles.projectBox}>
                        <p>
                            Folium is &apos;grown&apos; and &apos;preserved&apos; as much as it is built. 
                            The neighbourhood is not just about green spaces overlapping living spaces, but 
                            a pleasant symbiosis of the two.
                        </p>
                        <p>
                            When you become a resident at Folium, you enter a holistic path to better health
                            and wellbeing. The abundance of outdoor spaces and soulful abodes of nature encourage you
                            to live mindfully.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}