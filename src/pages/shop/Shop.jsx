import { memo, useEffect } from "react"
import HeroBase from "../../components/hero/HeroBase"
import Newsletter from "../../components/newsletter/Newsletter"

const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <HeroBase title={"Shop Page"} desc={"Let’s design the place you always imagined."} path={"Shop"} isImages={false} />
            <Newsletter />
        </>
    )
}

export default memo(Shop)