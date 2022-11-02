import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logodark.svg"
import styles from "./styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={Logo} alt="Logo" />
            </div>
            <ul className={styles.list}>
                <li>The Project</li>
                <li>The Features</li>
                <li>The Details</li>
            </ul>
        </nav>
    )
}