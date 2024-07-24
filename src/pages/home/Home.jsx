import Banner from "../../components/banner/Banner"
import Newsletter from "../../components/newsletter/Newsletter"
import Service from "../../components/service/Service"
import BannerGrid from "./components/banner-grid/BannerGrid"
import BlogSection from "./components/blog/BlogSection"
import Hero from "./components/hearo/Hero"

const Home = () => {
    return (
        <>
            <Hero />
            <BannerGrid />
            <Service />
            <Banner />
            <BlogSection />
            <Newsletter />
        </>
    )
}

export default Home