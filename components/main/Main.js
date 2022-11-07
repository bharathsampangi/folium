import React from "react"
import Hero from "../hero/Hero"
import Location from "../location/Location"
import Navbar from "../navbar/Navbar"
import Who from "../who/Who"
import Preview from "../preview/Preview"
import Welcome from "../welcome/Welcome"

const Main = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Location />
            <Who />
            <Preview />
            <Welcome />
        </main>
    )
}

export default Main