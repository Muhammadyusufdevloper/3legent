import { Link, NavLink } from "react-router-dom"
import "./menu.scss"
import siteLogo from "../../../assets/header/Logo.svg"
import { IoClose, IoLogoInstagram } from "react-icons/io5"
import Search from "./Search"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { LuFacebook, LuHeart } from "react-icons/lu"
import { AiOutlineYoutube } from "react-icons/ai"
const Menu = ({ menu, setMenu }) => {
    return (
        <>
            <div onClick={() => setMenu(false)} className={`header__menu__overlay ${menu ? "header__menu__overlay-show" : ""}`}></div>
            <div className={`header__menu ${menu ? "header__menu-show" : ""}`}>
                <div className="header__menu__top-box">
                    <div className="header__menu__logo-box">
                        <Link to={"/"} className="header__menu__logo-link"><img src={siteLogo} alt="site logo" /></Link>
                        <button onClick={() => setMenu(false)} className="header__menu__btn-close"><IoClose /></button>
                    </div>
                    <Search />
                    <ul className="header__menu__menu-list">
                        <li className="header__menu__menu-item"><NavLink className="header__menu__menu-link" to={"/"}>Home</NavLink></li>
                        <li className="header__menu__menu-item"><NavLink className="header__menu__menu-link" to={"/shop"}>Shop</NavLink></li>
                        <li className="header__menu__menu-item"><NavLink className="header__menu__menu-link" to={"/blog"}>Blog</NavLink></li>
                        <li className="header__menu__menu-item"><NavLink className="header__menu__menu-link" to={"/contact"}>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="header__menu__bottom-box">
                    <ul className="header__menu__menu-list">
                        <li className="header__menu__menu-item"><NavLink className="header__menu__menu-link" to={"/Cart"}>
                            <p>
                                Cart
                            </p>
                            <div className="header__menu__menu-link__cart--link">
                                <HiOutlineShoppingBag />
                                <span>2</span>
                            </div>
                        </NavLink></li>
                        <li className="header__menu__menu-item"><NavLink className="header__menu__menu-link" to={"/Wishlist"}>
                            <p>Wishlist</p>
                            <div className="header__menu__menu-link__cart--link">
                                <LuHeart />
                                <span>2</span>
                            </div>
                        </NavLink></li>
                    </ul>
                    <Link to={"/Login"} className="header__menu__menu-link-login">
                        Login
                    </Link>
                    <div className="header__menu__menu-buttons">
                        <IoLogoInstagram />
                        <LuFacebook />
                        <AiOutlineYoutube />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu