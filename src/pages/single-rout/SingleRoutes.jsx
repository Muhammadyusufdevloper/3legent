import { memo, useEffect } from "react"
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs"
import Newsletter from "../../components/newsletter/Newsletter"
import ProductLoop from "./components/product-loop/ProductLoop"
import { useGetProductByIdQuery } from "../../context/api/productApi"
import { useParams } from "react-router-dom"
import Tabs from "./components/tabs/Tabs"

const SingleRoutes = () => {
    let { id } = useParams()
    const { data } = useGetProductByIdQuery(id)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])
    return (
        <>
            <Breadcrumbs />
            <ProductLoop data={data} />
            <Tabs />
            <Newsletter />
        </>
    )
}

export default memo(SingleRoutes)