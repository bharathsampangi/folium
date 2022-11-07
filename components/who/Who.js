import { useEffect } from "react"
import styles from "./styles/Who.module.css"

export default function Who() {
    let slideIndex = 1;
    useEffect(() => {
        if (typeof window !== "undefined") 
            showSlides(slideIndex);
    })

    function plusSlides(n) {
        if (typeof window !== "undefined")
            showSlides(slideIndex += n)
    }

    function showSlides(n) {
        let i;
        let slides = []
        for(i=1; i<5; i++) {
            slides.push(window.document.getElementById(`slide-${i}`))
        }
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }

    return (
        <section className={styles.container}>
            <div className={styles.display}>
                <div className={styles.slideshowContainer}>
                    <div className={`${styles.mySlides} ${styles.fade}`} id="slide-1">
                        <div className={styles.numbertext}>1 / 4</div>
                        <img src="/images/Rectangle-73.png" style={{ width: "100%" }} />
                    </div>

                    <div className={`${styles.mySlides} ${styles.fade}`} id="slide-2">
                        <div className={styles.numbertext}>2 / 4</div>
                        <img src="/images/Rectangle-163.png" style={{ width: "100%" }} />
                    </div>

                    <div className={`${styles.mySlides} ${styles.fade}`} id="slide-3">
                        <div className={styles.numbertext}>3 / 4</div>
                        <img src="/images/Rectangle-164.png" style={{ width: "100%" }} />
                    </div>

                    <div className={`${styles.mySlides} ${styles.fade}`} id="slide-4">
                        <div className={styles.numbertext}>4 / 4</div>
                        <img src="/images/Rectangle-165.png" style={{ width: "100%" }} />
                    </div>

                    <a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>
                </div>
                <br />
            </div>
            <div className={styles.textBox}>
                <div className={styles.header}>Who is it for?</div>
                <p className={styles.textItem}>
                    Folium is for everyone, no matter where they are in the journey of life.
                    Kids, seniors, introverts, extroverts, dogs, cats, singles, couples – everyone
                    will feel right at home. We have anticipated all of your needs in designing
                    the neighborhood and thrown in a lot of surprises as well!
                </p>
                <button className={styles.listButton}>Read More</button>
            </div>
        </section>
    )
}