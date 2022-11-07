import React from "react"
import Hero from "../hero/Hero"
import Location from "../location/Location"
import Navbar from "../navbar/Navbar"
import Who from "../who/Who"
import Preview from "../preview/Preview"

const Main = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Location />
            <Who />
            <Preview />
        </main>
    )
}

export default Main