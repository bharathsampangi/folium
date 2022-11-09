import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logodark.svg"
import styles from "./styles/Navbar.module.css"
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={Logo} alt="Logo" />
                </Link>
            </div>
            <ul className={styles.list}>
                <li>
                    <Link href="/project">
                        The Project
                    </Link>
                </li>
                <li>
                    <Link href="/features">
                        The Features
                    </Link>
                </li>
                <li>The Details</li>
                <li className={styles.listButton}>Enquire Now</li>
            </ul>
        </nav>
    )
}