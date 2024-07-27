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
            <Banner isContainer={""} isDesc={"It’s more affordable than ever to give every room in your home a stylish makeover"} isTitle={"HUNDREDS of New lower prices!"} isSpan={"SALE UP TO 35% OFF"} />
            <BlogSection />
            <Newsletter />
        </>
    )
}

export default memo(Home)