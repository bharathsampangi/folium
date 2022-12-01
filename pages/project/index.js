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
                <title>Sumadhura Folium Whitefield,Price/Reviews by Sumadhura Group</title>
                <meta charset="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <meta name="description" content="Sumadhura Folium is a luxury high-rise apartment project in Whitefield, Bangalore. Get all details about Price/Locations/Status and apartments from here." />
                <meta name="keywords" content="Sumadhura Folium,Sumadhura folium Whitefield,Sumadhura folium price, Sumadhura folium location,Sumadhura Folium Reviews,Sumadhura Group,Sumadhura folium Borewell Road,sumadhura folium Brochures "/>
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