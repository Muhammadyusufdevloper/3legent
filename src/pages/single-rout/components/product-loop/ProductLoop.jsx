import { memo, useState } from "react";
import PropTypes from "prop-types";
import "./productLoop.scss";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../../../context/slices/wishlistSlice";
import { addToCart, decrementCart, removeFromCart } from "../../../../context/slices/cartSlice";

const ProductLoop = ({ data }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const getRating = (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<FaStar key={`star-${i}`} />);
        }
        if (rating % 1 > 0.4) {
            res.push(<FaRegStarHalfStroke key="star-half" />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<FaRegStar key={`star-empty-${i}`} />);
        }
        return res;
    };
    let dispatch = useDispatch()
    let wishlist = useSelector(state => state.wishlist.value)
    let cartData = useSelector(state => state.cart.value)
    let isCart = (cartData.find(el => el.id === data?.id));
    return (
        <section className="product-loop">
            <div className="container">
                <div className="product-loop__wrapper">
                    <div className="product-loop__images-box">
                        <div className="product-loop__base-img">
                            <Zoom>
                                <img
                                    className="product-loop__img"
                                    src={data?.images[selectedImageIndex]}
                                    alt={data?.title}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </Zoom>
                            <div className="product-loop__images-box__discount">
                                <p className="product-loop__images-box__new-text">New</p>
                                <p className="product-loop__images-box__discount-text">-50%</p>
                            </div>
                        </div>
                        <div className="product-loop__mini-images-cards">
                            {data?.images?.map((img, index) => (
                                <div
                                    key={index}
                                    className={`product-loop__mini-images-card ${index === selectedImageIndex ? 'product-loop__mini-images-card-selected' : ''}`}
                                    onClick={() => setSelectedImageIndex(index)}
                                >
                                    <img src={img} alt={`Product ${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="product-loop__content-box">
                        <div className="product-loop__info-card">
                            <div className="product-loop__info-card-rating-part">
                                {getRating(data?.rating)}
                                <p className="product-loop__info-card-rating-text">11 Reviews</p>
                            </div>
                            <h1 className="product-loop__info-card-title">{data?.title}</h1>
                            <p className="product-loop__info-card-text">{data?.description}</p>
                            <div className="product-loop__info-card-price-part">
                                <p className="product-loop__info-card-price-text">$ {data?.price}</p>
                                <p className="product-loop__info-card-old-price-text">$ {data?.oldPrice}</p>
                            </div>
                        </div>
                        <div className="product-loop__timer-card">
                            <p className="product-loop__timer-card-text">Offer expires in:</p>
                            <div className="product-loop__timer-card-timer-cards">
                                <div className="product-loop__timer-card-timer-card">
                                    <div>22</div>
                                    <p className="product-loop__timer-card-timer-text">Days</p>
                                </div>
                                <div className="product-loop__timer-card-timer-card">
                                    <div>13</div>
                                    <p className="product-loop__timer-card-timer-text">Hours</p>
                                </div>
                                <div className="product-loop__timer-card-timer-card">
                                    <div>34</div>
                                    <p className="product-loop__timer-card-timer-text">Minutes</p>
                                </div>
                                <div className="product-loop__timer-card-timer-card">
                                    <div>24</div>
                                    <p className="product-loop__timer-card-timer-text">Seconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="product-loop__swatches-card">
                            <div className="product-loop__swatches-card-size">
                                <p className="product-loop__swatches-card-size-text">Measurements</p>
                                <p className="product-loop__swatches-card-size-text">17 1/2x20 5/8 </p>
                            </div>
                            <div className="product-loop__swatches-card-cards">
                                {data?.images?.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`product-loop__swatches-card-card ${index === selectedImageIndex ? 'product-loop__mini-images-card-selected' : ''}`}
                                        onClick={() => setSelectedImageIndex(index)}
                                    >
                                        <img src={img} alt={`Product ${index}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="product-loop__cart-card">
                                <div className="product-loop__cart-card__buttons">
                                    {
                                        !isCart ?
                                            <button onClick={() => dispatch(addToCart(data))} className="product-loop__cart-card__add-btn">Add To Cart</button>
                                            :
                                            <div className="product-loop__cart-card__part">
                                                <button onClick={() => dispatch(
                                                    isCart?.quantity <= 1 ? removeFromCart(data?.id) :
                                                        decrementCart(data)
                                                )}>-</button>
                                                <p>{isCart?.quantity}</p>
                                                <button onClick={() => dispatch(addToCart(data))}>+</button>
                                            </div>
                                    }
                                    <button onClick={() => dispatch(toggleHeart(data))} className={`product-loop__cart-card__wishlist-btn ${wishlist?.some((el) => el.id === data?.id) ? 'product-loop__cart-card__wishlist-btn-active' : ''}`}>
                                        <GoHeart />
                                        <p>Wishlist</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-loop__meta-card">
                            <div className="product-loop__meta-card-part">
                                <p className="product-loop__meta-card-text">SKU:</p>
                                <p className="product-loop__meta-card-category-count-text">{data?.stock}</p>
                            </div>
                            <div className="product-loop__meta-card-part">
                                <p className="product-loop__meta-card-text">CATEGORY:</p>
                                <p className="product-loop__meta-card-category-count-text">{data?.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

ProductLoop.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        oldPrice: PropTypes.number,
        rating: PropTypes.number,
        stock: PropTypes.number,
        category: PropTypes.string
    }).isRequired
};

export default memo(ProductLoop);
