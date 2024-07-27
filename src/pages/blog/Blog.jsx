import { memo, useEffect, useState } from "react"
import HeroBase from "../../components/hero/HeroBase"
import Newsletter from "../../components/newsletter/Newsletter"
import BlogCard from "../../components/blog-card/BlogCard"
import { useGetProductsQuery } from "../../context/api/productApi"
import { useGetCategoryQuery } from "../../context/api/categoryApi"
import Category from "../../components/category/Category"
import BlogCardsLoading from "../../components/loading/blog-cards-loading/BlogCardsLoading"
import { Pagination } from "@mui/material"
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs"
const Blog = () => {
    const [categoryValue, setCategoryValue] = useState("all")
    const [page, setPage] = useState(1);
    const category = categoryValue === "all" ? "" : categoryValue
    const { data: lengthData } = useGetProductsQuery({ category })
    const { data, isFetching, isLoading } = useGetProductsQuery({ category, limit: 9, page })
    const { data: categoryList } = useGetCategoryQuery()

    const handleChange = (event, value) => {
        setPage(value);
    };
    let count = Math.floor(lengthData?.length / 9)
    useEffect(() => {
        window.scrollTo(0, 500)
    }, [page])
    return (
        <>
            <Breadcrumbs />
            <HeroBase title={"Our Blog"} desc={"Home ideas and design inspiration"} path={"Blog"} isImages={true} />
            <section>
                <div className="container">
                    <Category setPage={setPage} categoryValue={categoryValue} setCategoryValue={setCategoryValue} category={categoryList} />
                    {
                        isLoading || isFetching ? <BlogCardsLoading limit={9} /> :
                            <BlogCard isDateLink={false} data={data} />
                    }
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "24px", marginBottom: "24px" }}>
                        <Pagination siblingCount={0} count={count} page={page} onChange={handleChange} />
                    </div>
                </div>
            </section>
            <Newsletter />
        </>
    )
}

export default memo(Blog)