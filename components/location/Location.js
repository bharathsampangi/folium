import Link from "next/link"
import styles from "./styles/Location.module.css"

export default function Location() {
    return (
        <section className={styles.location} id="location">
            <div className={styles.locationBox}>
                <div className={styles.locationInnerBox}>
                    <div className={styles.locationHeader}>location</div>
                    <div className={styles.locationHeader2}>
                        right in the heart of whitefield!
                    </div>
                    <p>
                        Located just 12 mins (3.6 kms) away from ITPB, and less than 10 mins 
                        away from most shopping, healthcare, education and hospitality centres, 
                        it would be hard-pressed to find a better location in Whitefield.
                    </p>
                    <Link 
                        className={styles.link}
                        href="https://maps.google.com/maps?ll=13.016592,77.762417&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=4597365471147905107"
                    >
                        View on Google Maps
                    </Link>
                    {/* <button className={styles.listButton}>Read More</button> */}
                </div>
            </div>
            <div className={styles.locationMap}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.299473544249!2d77.76241690000002!3d13.016591499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fcd1f89c26ad053!2sSumadhura%20Folium!5e0!3m2!1sen!2sin!4v1667402883205!5m2!1sen!2sin" 
                    width="400" height="300" 
                    style={{border: "0"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.locationMobile}
                >
                </iframe>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.299473544249!2d77.76241690000002!3d13.016591499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fcd1f89c26ad053!2sSumadhura%20Folium!5e0!3m2!1sen!2sin!4v1667402883205!5m2!1sen!2sin" 
                    width="600" height="450" 
                    style={{border: "0"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.locationDesktop}
                >
                </iframe>
            </div>     
        </section>
    )
}