import ContactHeader from "./components/contact-header/ContactHeader"
import Banner from "../../components/banner/Banner"
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs"
import ContactUsSection from "./components/contact-us-section/ContactUsSection"
import ContactValues from "./components/contact-values/ContactValues"

const Contact = () => {
    return (
        <>
            <Breadcrumbs />
            <ContactHeader />
            <Banner isContainer="container" isSpan="" isTitle="About Us" isDesc="3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
Our customer service is always prepared to support you 24/7" />
            <ContactUsSection />
            <ContactValues />
        </>
    )
}

export default Contact