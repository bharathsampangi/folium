import styles from "./styles/Enquire.module.css"

export default function Enquire() {
    return (
        <section className={styles.enquire}>
            <div className={styles.header}>Enquire Now</div>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>First Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Phone Number</label>
                        <input type="number" />
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Email</label>
                        <input type="email" />
                    </div>
                </div>
                <button className={styles.button}>Submit</button>
            </form>
        </section>
    )
}