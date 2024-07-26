import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addToCart, decrementCart, removeFromCart } from '../../../../context/slices/cartSlice';
import { toggleHeart } from '../../../../context/slices/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { IoHeart } from 'react-icons/io5';
import { GoHeart } from 'react-icons/go';

const ProductSectionItem = ({ item }) => {
    let dispatch = useDispatch();

    const getRating = (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<FaStar key={i} />);
        }
        if (rating % 1 > 0.4) {
            res.push(<FaRegStarHalfStroke key="half" />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<FaRegStar key={`empty-${i}`} />);
        }
        return res;
    };

    const wishlist = useSelector(state => state.wishlist.value);
    const cartData = useSelector(state => state.cart.value);
    let isCart = cartData?.find(el => el.id === item?.id);

    return (
        <div className="product-section__card">
            <div className="product-section__image-box">
                <div className="product-section__images-box__discount">
                    <p className="product-section__images-box__new-text">New</p>
                    <p className="product-section__images-box__discount-text">-50%</p>
                </div>
                <button onClick={() => dispatch(toggleHeart(item))} className="product-section__image-box__heart">
                    {wishlist?.some((el) => el.id === item?.id) ? <IoHeart /> : <GoHeart />}
                </button>
                <Link to={`/single-routes/${item?.id}`}>
                    <img src={item?.images[0]} alt={item?.title} />
                </Link>
                <div className="product-section__image-box__cart-wrapper">
                    {
                        !isCart ?
                            <button onClick={() => dispatch(addToCart(item))} className="product-section__image-box__add-to-cart">Add To Cart</button> :
                            <div className="product-section__image-box__add-to-cart-counter">
                                <button onClick={() => dispatch(
                                    isCart?.quantity <= 1 ? removeFromCart(item.id) :
                                        decrementCart(item)
                                )}>-</button>
                                <p>{isCart?.quantity}</p>
                                <button onClick={() => dispatch(addToCart(item))}>+</button>
                            </div>
                    }
                </div>
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
    );
}

ProductSectionItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        oldPrice: PropTypes.number,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductSectionItem;
