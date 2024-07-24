import { MdArrowForward } from "react-icons/md"
import { Link } from "react-router-dom"
import { useGetProductsQuery } from "../../../../context/api/productApi"
import { GoHeart } from "react-icons/go"
import "./productSection.scss"
import ProductSectionLoading from "../../../../components/loading/product-section-loading/ProductSectionLoading"
import { memo } from "react"
import { FaRegStarHalfStroke } from "react-icons/fa6"
import { FaRegStar, FaStar } from "react-icons/fa"
const ProductSection = () => {
    const { data, isFetching, isLoading } = useGetProductsQuery({ limit: 6, page: 3 })
    const getRating = (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<FaStar />);
        }
        if (rating % 1 > 0.4) {
            res.push(<FaRegStarHalfStroke />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<FaRegStar />);
        }
        return res;
    };
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
                                        <div key={item.id} className="product-section__card">
                                            <div className="product-section__image-box">
                                                <div className="product-section__images-box__discount">
                                                    <p className="product-section__images-box__new-text">New</p>
                                                    <p className="product-section__images-box__discount-text">-50%</p>
                                                </div>
                                                <button className="product-section__image-box__heart"><GoHeart /></button>
                                                <Link to={`/single-routes/${item?.id}`}>
                                                    <img src={item?.images[0]} alt={item?.title} />
                                                </Link>
                                                <button className="product-section__image-box__add-to-cart">Add To Cart</button>
                                            </div>
                                            <div className="product-section__info-box">
                                                {getRating(item?.rating)}
                                                <h3 className="product-section__card-title">{item?.title}</h3>
                                                <div className="product-section__card-price-box">
                                                    <p className="product-section__price-text">${item?.price}</p>
                                                    <p className="product-section__price-old-text">${item?.oldPrice}</p>
                                                </div>
                                            </div>
                                        </div>
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