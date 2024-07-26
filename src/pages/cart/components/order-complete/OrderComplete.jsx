import { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import "./OrderComplete.scss";
import Process from "../top-cart/Process";
import { useNavigate } from "react-router-dom";
import { deleteAllCart } from "../../../../context/slices/cartSlice";

const Order = () => {
    const cartData = useSelector((state) => state.cart.value);
    const total = localStorage.getItem("total")
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handleComplete = () => {
        dispatch(deleteAllCart());
        navigate("/");
    };
    useEffect(() => {
        return () => {
            handleComplete();
        };
    }, []);

    return (
        <section className="order container">
            <div className="container">
                <h1 className="check-out__heading">Order Complete</h1>
                <Process isShoppingCart={1} isCheckout={1} isComplete={2} />
                <div className="order__container">
                    <p className="order__text">Than you! 🎉</p>
                    <h2 className="order__title">Your order has been received</h2>
                    <div className="order__images">
                        {cartData?.map((product) => (
                            <div key={product.id} className="order__image">
                                <img src={product.images[0]} alt={product.title} />
                                <span>{product.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="order__middle">
                        <ul className="order__middle-first">
                            <li>Order code:</li>
                            <li>Date:</li>
                            <li>Total:</li>
                            <li>Payment method:</li>
                        </ul>
                        <ul className="order__middle-second">
                            <li>#1234i1243_123</li>
                            <li>October 19. 2024</li>
                            <li>{total}</li>
                            <li>Credit card</li>
                        </ul>
                    </div>
                    <button onClick={handleComplete}>Purchase history</button>
                </div>
            </div>
        </section>
    );
};

export default memo(Order);
