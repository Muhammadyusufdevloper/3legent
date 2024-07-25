import { MdArrowForward } from "react-icons/md"
import { Link } from "react-router-dom"
import { useGetProductsQuery } from "../../../../context/api/productApi"
import { GoHeart } from "react-icons/go"
import "./productSection.scss"
import ProductSectionLoading from "../../../../components/loading/product-section-loading/ProductSectionLoading"
import { memo } from "react"
import { FaRegStarHalfStroke } from "react-icons/fa6"
import { FaRegStar, FaStar } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { toggleHeart } from "../../../../context/slices/wishlistSlice"
import { IoHeart } from "react-icons/io5"
import { addToCart } from "../../../../context/slices/cartSlice"
const ProductSection = () => {
    const { data, isFetching, isLoading } = useGetProductsQuery({ limit: 6, page: 3 })
    let dispatch = useDispatch()
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
    const wishlist = useSelector(state => state.wishlist.value)
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
                                                <button onClick={() => dispatch(toggleHeart(item))} className="product-section__image-box__heart"> {wishlist?.some((el) => el.id === item?.id) ? <IoHeart /> : <GoHeart />}</button>
                                                <Link to={`/single-routes/${item?.id}`}>
                                                    <img src={item?.images[0]} alt={item?.title} />
                                                </Link>
                                                <button onClick={() => dispatch(addToCart(item))} className="product-section__image-box__add-to-cart">Add To Cart</button>
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