import { memo } from "react";
import "./ProductItemLoading.scss"
const ProductSectionLoading = () => {
    const cards = [];
    for (let i = 0; i < 9; i++) {
        cards.push(
            <div className="product-item-loading" key={i}>
                <div className="product-item-loading-animation"></div>
                <div className="product-item-content-loading">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return (
        <div className="product-item-cards-loading">
            {cards}
        </div>
    );
}

export default memo(ProductSectionLoading)