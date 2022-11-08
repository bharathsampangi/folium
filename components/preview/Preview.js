import {useState} from "react"
import styles from "./styles/Preview.module.css"

export default function Preview() {
    const [active, setActive] = useState(1)

    const handleClick = (id) => {
        setActive(id)
    }

    return (
        <section className={styles.preview}>
            <div className={styles.header}>
                HOMES, PERSONALISED TO <br/>PERFECTION.
            </div>
            <p className={styles.text}>
                We brought in expert consultants to conceptualise unique layouts that 
                suit diverse residents with a myriad of needs and preferences.
            </p>
            <div className={styles.previewContainer}>
                <div className={styles.tabButtons}>
                    <button onClick={() => handleClick(1)} className={active == 1 && styles.active}>Smart 1 BHK</button>
                    <button onClick={() => handleClick(2)} className={active == 2 && styles.active}>Smart 2 BHK</button>
                    <button onClick={() => handleClick(3)} className={active == 3 && styles.active}>Smart 3 BHK</button>
                    <button onClick={() => handleClick(4)} className={active == 4 && styles.active}>Classic 3 BHK</button>
                    <button onClick={() => handleClick(5)} className={active == 5 && styles.active}>Premium 4 BHK</button>
                </div>
                {active == 1 &&
                    <div className={styles.tabContainer}>
                        <img src="/images/smart-1-bhk.svg"/>
                    </div>
                }
                {active == 2 &&
                    <div className={styles.tabContainer}>
                        <img src="/images/Smart-2-BHK.svg"/>
                    </div>
                }
                {active == 3 &&
                    <div className={styles.tabContainer}>
                        <img src="/images/Smart-3-BHK.svg"/>
                    </div>
                }
                {active == 4 &&
                    <div className={styles.tabContainer}>
                        <img src="/images/Classic-3-BHK.png"/>
                    </div>
                }
                {active == 5 &&
                    <div className={styles.tabContainer}>
                        <img src="/images/Premium-4-BHK.png"/>
                    </div>
                }
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Read More</button>
            </div>
        </section>
    )
}