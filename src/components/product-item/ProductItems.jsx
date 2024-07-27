import "./productItem.scss"
import { memo } from "react"
import PropTypes from 'prop-types';
import ProductItemsCard from "./ProductItemsCard"

const ProductItems = ({ data, isButtons, setSelectedProductId, setModalOpen }) => {
    return (
        <div className="product-item__cards-grid">
            {
                data?.map((item) => (
                    <ProductItemsCard
                        key={item?.id}
                        item={item}
                        isButtons={isButtons}
                        setSelectedProductId={setSelectedProductId}
                        setModalOpen={setModalOpen}
                    />
                ))
            }
        </div>
    )
}

ProductItems.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        oldPrice: PropTypes.number,
        rating: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    isButtons: PropTypes.bool.isRequired,
    setSelectedProductId: PropTypes.func.isRequired,
    setModalOpen: PropTypes.func.isRequired,
};

export default memo(ProductItems);
