import styles from "./styles/About.module.css";
import Landing from "../../public/images/epitome.jpg"
import Image from "next/image"

export default function About() {
    return (
        <section className={styles.location} id="about">
            <div className={styles.aboutContainer}>
                <img src="/images/epitome-home.jpg" alt="Home Car" />
            </div>
            <div className={styles.locationBox}>
                <div className={styles.locationInnerBox}>
                    <div className={styles.locationHeader2}>
                        Experience the beauty
                    </div>
                    <p>
                        The Epitome by Sumadhura introduces an upcoming
                        residential township in Rachenahalli, offering spacious
                        and luxurious 2, 3, and 4 BHK apartments.It caters to
                        those who cherish a sense of completeness and
                        tranquility in their living space.
                        <br />
                        Discover the ideal residence that brings genuine joy. A
                        haven designed with the well-being and security of your
                        family in mind, enabling cherished moments and leisurely
                        strolls together.
                        <br />
                        Nestled in the prime area of North Bangalore, the
                        location offers easy access to renowned schools,
                        hospitals, and major IT parks, all within a 10-minute
                        radius.
                    </p>
                </div>
            </div>
        </section>
    );
}
