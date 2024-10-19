import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Tour from "../components/Tour";
import Explore from "../components/Explore";
import Blog from "../components/Blog";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Popular />
            <Offers />
            <Tour />
            <Explore />
            <Blog />
            <Footer />
        </>
    );
}