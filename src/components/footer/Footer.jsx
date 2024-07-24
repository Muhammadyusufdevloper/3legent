import { Link } from "react-router-dom"
import "./footer.scss"
import siteLogo from "../../assets/footer/Logo.svg"
import { IoLogoInstagram } from "react-icons/io5"
import { LuFacebook } from "react-icons/lu"
import { AiOutlineYoutube } from "react-icons/ai"
import { memo } from "react"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <dir className="container">
                    <div className="footer__top-box">
                        <div className="footer__left-box">
                            <Link className="footer__logo">
                                <img src={siteLogo} alt="site logo" />
                            </Link>
                            <div className="footer__arrow-box"></div>
                            <h3 className="footer__title">Gift & Decoration Store</h3>
                        </div>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link className="footer__link" to={"/"}>Home</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to={"/shop"}>Shop</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to={"/product"}>Product</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to={"/blog"}>Blog</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to={"/contact"}>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__bottom-box">
                        <div className="footer__bottom-box__left-box">
                            <h3 className="footer__bottom-box__title">Copyright © 2023 3legant. All rights reserved</h3>
                            <div className="footer__bottom-box-card">
                                <p className="footer__bottom-box-card__text ">Privacy Policy</p>
                                <p className="footer__bottom-box-card__text">Terms of Use</p>
                            </div>
                        </div>
                        <div className="footer__networking-buttons">
                            <IoLogoInstagram />
                            <LuFacebook />
                            <AiOutlineYoutube />
                        </div>
                    </div>
                </dir>
            </footer>
        </>
    )
}

export default memo(Footer)