import { memo } from "react"
import Banner from "../../components/banner/Banner"
import Newsletter from "../../components/newsletter/Newsletter"
import Service from "../../components/service/Service"
import BannerGrid from "./components/banner-grid/BannerGrid"
import BlogSection from "./components/blog/BlogSection"
import Hero from "./components/hearo/Hero"
import ProductSection from "./components/products/ProductSection"

const Home = () => {
    return (
        <>
            <Hero />
            <BannerGrid />
            <ProductSection />
            <Service />
            <Banner />
            <BlogSection />
            <Newsletter />
        </>
    )
}

export default memo(Home)