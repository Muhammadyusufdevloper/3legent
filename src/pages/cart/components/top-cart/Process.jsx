import { memo } from "react";

const Process = ({ isShoppingCart, isCheckout, isComplete }) => {
    return (
        <div className="cart__process">
            <div className={`cart__process__item ${isShoppingCart === 1 ? "cart__process__item--active" : ""}`}>
                <p>1</p>
                <p>Shopping Cart</p>
            </div>
            <div className={`cart__process__item ${isCheckout === 2 ? "cart__process__item--checkout--active" : ""}`}>
                <p>2</p>
                <p>Checkout Details</p>
            </div>
            <div className="cart__process__item">
                <p>3</p>
                <p>Order Complete</p>
            </div>
        </div>
    );
};

export default memo(Process);
