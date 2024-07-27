import { memo, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { IoHeart } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { addToCart } from '../../context/slices/cartSlice';
import EditModal from '../modal/EditModal';

const ProductItemsCard = ({ item, isButtons, setSelectedProductId, setModalOpen }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist.value);
    const [modalData, setModalData] = useState(null);

    const getRating = useMemo(() => (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<FaStar key={`star-${i}`} />);
        }
        if (rating % 1 > 0.4) {
            res.push(<FaRegStarHalfStroke key="star-half" />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<FaRegStar key={`star-${i}`} />);
        }
        return res;
    }, []);

    const handleToggleHeart = useMemo(() => () => dispatch(toggleHeart(item)), [dispatch, item]);
    const handleAddToCart = useMemo(() => () => dispatch(addToCart(item)), [dispatch, item]);

    return (
        <>
            <div className="product-item__card">
                <div className="product-item__image-box">
                    <div className="product-item__images-box__discount">
                        <p className="product-item__images-box__new-text">New</p>
                        <p className="product-item__images-box__discount-text">-50%</p>
                    </div>
                    {
                        !isButtons ?
                            <button className="product-item__image-box__heart" onClick={handleToggleHeart}>
                                {wishlist?.some((el) => el.id === item?.id) ? <IoHeart /> : <GoHeart />}
                            </button>
                            : <></>
                    }
                    <Link to={`/single-routes/${item?.id}`}>
                        <img src={item?.images[0]} alt={item?.title} />
                    </Link>
                    {
                        !isButtons ?
                            <button onClick={handleAddToCart} className="product-item__image-box__add-to-cart">Add To Cart</button>
                            : <></>
                    }
                </div>
                <div className="product-item__info-box">
                    {getRating(item?.rating)}
                    <h3 className="product-item__card-title">{item?.title}</h3>
                    <div className="product-item__card-price-box">
                        <p className="product-item__price-text">${item?.price}</p>
                        <p className="product-item__price-old-text">${item?.oldPrice}</p>
                    </div>
                    {
                        isButtons &&
                        <div className='product-item__card-buttons'>
                            <button onClick={() => {
                                setSelectedProductId(item.id);
                                setModalOpen(true);
                            }} className='product-item__button'>Delete</button>
                            <button onClick={() => setModalData(item)} className='product-item__button'>Edit</button>
                        </div>
                    }
                </div>
            </div>
            {
                modalData && <EditModal modalData={modalData} setModalData={setModalData} />
            }
        </>
    );
}

ProductItemsCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        oldPrice: PropTypes.number,
        rating: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    isButtons: PropTypes.bool.isRequired,
    setSelectedProductId: PropTypes.func.isRequired,
    setModalOpen: PropTypes.func.isRequired,
};

export default memo(ProductItemsCard);
