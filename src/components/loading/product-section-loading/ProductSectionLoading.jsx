import { memo } from "react";
import "./ProductSectionLoading.scss"
const ProductSectionLoading = () => {
    const cards = [];
    for (let i = 0; i < 6; i++) {
        cards.push(
            <div className="product-section-loading" key={i}>
                <div className="product-section-loading-animation"></div>
                <div className="product-section-content-loading">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return (
        <div className="product-section-cards-loading">
            {cards}
        </div>
    );
}

export default memo(ProductSectionLoading)