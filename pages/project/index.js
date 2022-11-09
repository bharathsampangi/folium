import Head from "next/head"
import Navbar from "../../components/navbar/Navbar"
import Project from "../../components/project/Project"
import Footer from "../../components/footer/Footer"
import Preview from "../../components/preview/Preview"
import Welcome from "../../components/welcome/Welcome"

export default function ProjectPage() {
    return (
        <div>
            <Head>
                <title>The Project - Folium</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar active="project"/>
                <Project />
                <Preview />
                <Welcome />
                <Footer />
            </main>
        </div>
    )
}