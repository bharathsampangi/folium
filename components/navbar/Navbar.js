import React from "react";
import Image from "next/image";
import Logo from "../../public/images/Sumadhura-Logo.png"
import styles from "./styles/Navbar.module.css"
import Link from "next/link";

export default function Navbar({ active='' }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={Logo} alt="Logo" className={styles.logoImage}/>
                </Link>
            </div>
            <ul className={styles.list}>
                <li>
                    <Link href="#about" scroll={false}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#location" scroll={false}  >
                        Location
                    </Link>
                </li>
                <li>
                    <Link href="#enquire" scroll={false}>
                        📞 8147530047
                    </Link>
                </li>
                <li className={styles.listButton} scroll={false}>
                    <Link href="#enquire">
                        Enquire Now
                    </Link>
                </li>
            </ul>
        </nav>
    )
}