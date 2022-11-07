import React from "react"
import Hero from "../hero/Hero"
import Location from "../location/Location"
import Navbar from "../navbar/Navbar"
import Who from "../who/Who"

const Main = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Location />
            <Who />
        </main>
    )
}

export default Main