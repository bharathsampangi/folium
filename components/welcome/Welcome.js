import { useState } from "react"
import styles from "./styles/Welcome.module.css"

export default function Welcome() {
    const [active, setActive] = useState(1)

    const handleClick = (id) => {
        setActive(id)
    }

    return (
        <section className={styles.welcome}>
            <div className={styles.container}>
                <div className={styles.header}>welcome to a never-ending vacation!</div>
                <div className={styles.previewContainer}>
                    <div className={styles.tabButtons}>
                        <button onClick={() => handleClick(1)} 
                            className={active == 1 && styles.active}>
                            Luxurious Homes
                        </button>
                        <button onClick={() => handleClick(2)} 
                            className={active == 2 && styles.active}>
                            Royal Clubhouse
                        </button>
                        <button onClick={() => handleClick(3)} 
                            className={active == 3 && styles.active}>
                            pristine natural habitats
                        </button>
                        <button onClick={() => handleClick(4)} 
                            className={active == 4 && styles.active}>
                            great views
                        </button>
                    </div>
                    {active == 1 &&
                        <div className={styles.tabContainer}>
                            <img src="/images/luxurious-home.jpg"/>
                            <p className={styles.caption}>Carefully designed and crafted with high-end finishes</p>
                        </div>
                    }
                    {active == 2 &&
                        <div className={styles.tabContainer}>
                            <img src="/images/Group-43-1.png"/>
                            <p className={styles.caption}>Everything you need for an envious lifestyle</p>
                        </div>
                    }
                    {active == 3 &&
                        <div className={styles.tabContainer}>
                            <img src="/images/Group-43-1-1.png"/>
                            <p className={styles.caption}>Green spaces that make you forget the city&apos;s chaos and enjoy peaceful moments in nature</p>
                        </div>
                    }
                    {active == 4 &&
                        <div className={styles.tabContainer}>
                            <img src="/images/Group-43-1-2.png"/>
                            <p className={styles.caption}>Postcard-perfect views from your balcony</p>
                        </div>
                    }
                </div>
                {/* <div className={styles.buttonContainer}>
                    <button className={styles.button}>Read More</button>
                </div> */}
            </div>
        </section>
    )
}