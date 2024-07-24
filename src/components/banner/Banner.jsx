import { memo } from "react"
import "./banner.scss"
import bannerImg from "../../assets/banner/bannerImg.jpg"
import { Link } from "react-router-dom"
import { MdArrowForward } from "react-icons/md"
const Banner = () => {
    return (
        <>
            <section className="banner ">
                <div className="banner__left-box">
                    <img src={bannerImg} alt="banner img" />
                </div>
                <div className="banner__right-box">
                    <div className="banner__content">
                        <span className="banner__top-text">SALE UP TO 35% OFF</span>
                        <h2 className="banner__title">HUNDREDS of
                            New lower prices!</h2>
                        <p className="banner__text">It’s more affordable than ever to give every room in your home a stylish makeover</p>
                        <Link to={"/shop"} className="banner__link">
                            <div>
                                <p>
                                    Shop Now
                                </p>
                                <MdArrowForward />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Banner);