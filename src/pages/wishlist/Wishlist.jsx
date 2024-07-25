import React from 'react'
import { useSelector } from 'react-redux'
import ProductItems from '../../components/product-item/ProductItems'
import "./wishlist.scss"
import Empty from '../../components/empty/Empty'
import img from "../../assets/wishlist/wishlist.webp"
const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist.value)
    return (
        <>
            <section className='wishlist'>
                <div className='container'>
                    {
                        wishlist.length === 0 ? <Empty images={img} /> :
                            <>
                                <h1 className='wishlist__title'>Wishlist</h1>
                                <ProductItems data={wishlist} isGrid={true} />

                            </>
                    }
                </div>
            </section>
        </>
    )
}

export default Wishlist