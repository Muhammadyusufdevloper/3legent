import { useState } from "react"
import CheckoutDetails from "./components/checkout-details/CheckoutDetails"
import ShoppingCart from "./components/shopping-cart/ShoppingCart"

const Cart = () => {
    const [shoppingCartCheckout, setShoppingCartCheckout] = useState(true)
    return (
        <>
            {

                shoppingCartCheckout ?
                    <ShoppingCart setShoppingCartCheckout={setShoppingCartCheckout} />
                    :
                    <CheckoutDetails />
            }
        </>
    )
}

export default Cart