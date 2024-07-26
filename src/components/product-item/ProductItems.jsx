import { Link } from "react-router-dom"
import { GoHeart } from "react-icons/go"
import "./productItem.scss"
import { memo } from "react"
import { FaRegStarHalfStroke } from "react-icons/fa6"
import { FaRegStar, FaStar } from "react-icons/fa"
import { IoHeart } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { toggleHeart } from "../../context/slices/wishlistSlice"
import { addToCart } from "../../context/slices/cartSlice"
const ProductItems = ({ data }) => {
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
    let dispatch = useDispatch()

    return (
        <>
            <div className={`  product-item__cards-grid `}>
                {
                    data?.map((item) => (
                        <div key={item.id} className="product-item__card">
                            <div className="product-item__image-box">
                                <div className="product-item__images-box__discount">
                                    <p className="product-item__images-box__new-text">New</p>
                                    <p className="product-item__images-box__discount-text">-50%</p>
                                </div>
                                <button className="product-item__image-box__heart" onClick={() => dispatch(toggleHeart(item))}>{wishlist?.some((el) => el.id === item?.id) ? <IoHeart /> : <GoHeart />}</button>
                                <Link to={`/single-routes/${item?.id}`}>
                                    <img src={item?.images[0]} alt={item?.title} />
                                </Link>
                                <button onClick={() => dispatch(addToCart(item))} className="product-item__image-box__add-to-cart">Add To Cart</button>
                            </div>
                            <div className="product-item__info-box">
                                {getRating(item?.rating)}
                                <h3 className="product-item__card-title">{item?.title}</h3>
                                <div className="product-item__card-price-box">
                                    <p className="product-item__price-text">${item?.price}</p>
                                    <p className="product-item__price-old-text">${item?.oldPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default memo(ProductItems)