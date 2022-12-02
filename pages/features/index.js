import Head from "next/head"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Features from "../../components/features/Features"

export default function FeaturePage() {
    return (
        <div>
            <Head>
                <title>Sumadhura Folium Whitefield,Price/Reviews by Sumadhura Group</title>
                <meta charset="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <meta name="description" content="Sumadhura Folium is a luxury high-rise apartment project in Whitefield, Bangalore. Get all details about Price/Locations/Status and apartments from here." />
                <meta name="keywords" content="Sumadhura Folium,Sumadhura folium Whitefield,Sumadhura folium price, Sumadhura folium location,Sumadhura Folium Reviews,Sumadhura Group,Sumadhura folium Borewell Road,sumadhura folium Brochures "/>
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://foliumbysumadhura.co.in/"></link>
            </Head>
            <main>
                <Navbar active="features"/>
                <Features />
                <Footer />
            </main>
        </div>
    )
}