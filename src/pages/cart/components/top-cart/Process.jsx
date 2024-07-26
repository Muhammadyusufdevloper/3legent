import { memo } from "react";
import "../shopping-cart/ShoppingCart.scss";
const Process = ({ isShoppingCart, isCheckout, isComplete }) => {
    return (
        <div className="cart__process">
            <div className={`cart__process__item ${isShoppingCart === 1 ? "cart__process__item--active" : ""}`}>
                <p>1</p>
                <p>Shopping Cart</p>
            </div>
            <div className={`cart__process__item ${isCheckout === 2 ? "cart__process__item--checkout--active" : ""} ${isCheckout === 1 ? "cart__process__item--active" : ""} `}>
                <p>2</p>
                <p>Checkout Details</p>
            </div>
            <div className={`cart__process__item ${isComplete === 2 ? "cart__process__item--checkout--active" : ""}`}>
                <p>3</p>
                <p>Order Complete</p>
            </div>
        </div>
    );
};

export default memo(Process);
