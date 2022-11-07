import { useEffect } from "react"
import styles from "./styles/Who.module.css"

export default function Who() {

    let slideIndex = 1;
    useEffect(() => {
        if (typeof window !== "undefined") 
            showSlides(slideIndex);
    })

    // Next/previous controls
    function plusSlides(n) {
        if (typeof window !== "undefined")
            showSlides(slideIndex += n)
    }

    // Thumbnail image controls
    function currentSlide(n) {
        if (typeof window !== "undefined")
            showSlides(slideIndex = n)
    }

    function showSlides(n) {
        // let i;
        // let slides = document.getElementsByClassName("mySlides");
        // let dots = document.getElementsByClassName("dot");
        // if (n > slides.length) {slideIndex = 1}
        // if (n < 1) {slideIndex = slides.length}
        // for (i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        // }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        // slides[slideIndex-1].style.display = "block";
        // dots[slideIndex-1].className += " active";

        let i;
        let slides = []
        for(i=1; i<4; i++) {
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
                    {/* <!-- Full-width images with number and caption text --> */}
                    <div className={`${styles.mySlides} ${styles.fade}`} id="slide-1">
                        <div className={styles.numbertext}>1 / 3</div>
                        <img src="/images/Rectangle-73.png" style={{ width: "100%" }} />
                        {/* <div className={styles.text}>Caption Text</div> */}
                    </div>

                    <div className={`${styles.mySlides} ${styles.fade}`} id="slide-2">
                        <div className={styles.numbertext}>2 / 3</div>
                        <img src="/images/Rectangle-163.png" style={{ width: "100%" }} />
                        {/* <div className={styles.text}>Caption Two</div> */}
                    </div>

                    <div className={`${styles.mySlides} ${styles.fade}`} id="slide-3">
                        <div className={styles.numbertext}>3 / 3</div>
                        <img src="/images/Rectangle-164.png" style={{ width: "100%" }} />
                        {/* <div className={styles.text}>Caption Three</div> */}
                    </div>

                    {/* <!-- Next and previous buttons --> */}
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
            </div>
        </section>
    )
}