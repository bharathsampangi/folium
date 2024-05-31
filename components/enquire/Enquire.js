import styles from "./styles/Enquire.module.css"

export default function Enquire() {
    return (
        <section className={styles.enquire}>
            <div className={styles.header}>Enquire Now</div>
            <form className={styles.form} action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="ec20fcf4-3183-4ea2-b3cb-2f8096c34440" />
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>First Name</label>
                        <input type="text" name="first_name" required/>
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Last Name</label>
                        <input type="text" name="last_name" required/>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Phone Number</label>
                        <input type="number" name="phone_number" required />
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Email</label>
                        <input type="email" name="email" required/>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Questions?</label>
                        <textarea name="questions"/>
                    </div>
                </div>
                <input type="checkbox" name="want to recieve updates" defaultChecked/> I agree to recieve updates on Whatsapp
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </section>
    )
}