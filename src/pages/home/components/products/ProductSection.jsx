import { MdArrowForward } from "react-icons/md"
import { Link } from "react-router-dom"
import { useGetProductsQuery } from "../../../../context/api/productApi"
import "./productSection.scss"
import ProductSectionLoading from "../../../../components/loading/product-section-loading/ProductSectionLoading"
import { memo } from "react"
import ProductSectionItem from "./ProductSectionItem"
const ProductSection = () => {
    const { data, isFetching, isLoading } = useGetProductsQuery({ limit: 6, page: 3 })
    return (
        <>
            <section className="product-section">
                <div className="container">
                    <div className="product-section__top-box">
                        <h2 className="product-section__title">New <br /> Arrivals</h2>
                        <Link to={"/shop"} className="blog-section__link">
                            <div>
                                <p>
                                    More Products
                                </p>
                                <MdArrowForward />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    {
                        isLoading || isFetching ? <ProductSectionLoading /> :
                            <div className="product-section__cards">
                                {
                                    data?.map((item) => (
                                        <ProductSectionItem key={item?.id} item={item} />
                                    ))
                                }
                            </div>
                    }
                </div>
            </section >
        </>
    )
}

export default memo(ProductSection)