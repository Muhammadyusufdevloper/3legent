import { memo, useEffect, useState } from "react"
import HeroBase from "../../components/hero/HeroBase"
import Newsletter from "../../components/newsletter/Newsletter"
import ProductItems from "../../components/product-item/ProductItems"
import { useGetProductsQuery } from "../../context/api/productApi"
import { Pagination } from "@mui/material"
import { useGetCategoryQuery } from "../../context/api/categoryApi"
import Category from "../../components/category/Category"
import ProductItemLoading from "../../components/loading/product-section-item/ProductItemLoading"

const Shop = () => {
    const [categoryValue, setCategoryValue] = useState("all")
    const [page, setPage] = useState(1);
    const category = categoryValue === "all" ? "" : categoryValue
    const { data: lengthData } = useGetProductsQuery({ category })
    const { data: product, isFetching, isLoading } = useGetProductsQuery({ category, limit: 8, page })
    const { data: categoryList } = useGetCategoryQuery()

    const handleChange = (event, value) => {
        setPage(value);
    };
    let count = Math.ceil(lengthData?.length / 8)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <HeroBase title={"Shop Page"} desc={"Let’s design the place you always imagined."} path={"Shop"} isImages={false} />
            <section>
                <div className="container">
                    <Category setPage={setPage} categoryValue={categoryValue} setCategoryValue={setCategoryValue} category={categoryList} />
                    {
                        isFetching || isLoading ? <ProductItemLoading /> :
                            <ProductItems data={product} isGrid={false} />
                    }
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "24px", marginBottom: "24px" }}>
                        <Pagination count={count} page={page} onChange={handleChange} />
                    </div>
                </div>
            </section>
            <Newsletter />
        </>
    )
}

export default memo(Shop)