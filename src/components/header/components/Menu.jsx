import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./menu.scss";
import siteLogo from "../../../assets/header/Logo.svg";
import { IoClose, IoLogoInstagram, IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuFacebook, LuHeart } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { useSelector } from "react-redux";
import Search from "./Search";

const Menu = ({ menu, setMenu }) => {
    const wishlist = useSelector(state => state.wishlist.value);
    const cartData = useSelector(state => state.cart.value);
    const [searchOnOf, setSearchOnOf] = useState(false);
    return (
        <>
            <div onClick={() => setMenu(false)} className={`header__menu__overlay ${menu ? "header__menu__overlay-show" : ""}`}></div>
            <div className={`header__menu ${menu ? "header__menu-show" : ""}`}>
                <div className="header__menu__top-box">
                    <div className="header__menu__logo-box">
                        <Link to={"/"} className="header__menu__logo-link"><img src={siteLogo} alt="site logo" /></Link>
                        <button onClick={() => setMenu(false)} className="header__menu__btn-close"><IoClose /></button>
                    </div>
                    <button onClick={() => setSearchOnOf(true)} className="header__menu__search-box">
                        <IoSearchOutline />
                        <input type="text" className="header__menu__search-input" placeholder="Search..." />
                    </button>
                    <Search searchOnOf={searchOnOf} setSearchOnOf={setSearchOnOf} isSearch={false} />
                    <ul className="header__menu__menu-list">
                        <li className="header__menu__menu-item"><NavLink onClick={() => setMenu(false)} className="header__menu__menu-link" to={"/"}>Home</NavLink></li>
                        <li className="header__menu__menu-item"><NavLink onClick={() => setMenu(false)} className="header__menu__menu-link" to={"/shop"}>Shop</NavLink></li>
                        <li className="header__menu__menu-item"><NavLink onClick={() => setMenu(false)} className="header__menu__menu-link" to={"/blog"}>Blog</NavLink></li>
                        <li className="header__menu__menu-item"><NavLink onClick={() => setMenu(false)} className="header__menu__menu-link" to={"/contact"}>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="header__menu__bottom-box">
                    <ul className="header__menu__menu-list">
                        <li className="header__menu__menu-item"><NavLink onClick={() => setMenu(false)} className="header__menu__menu-link" to={"/Cart"}>
                            <p>Cart</p>
                            <div className="header__menu__menu-link__cart--link">
                                <HiOutlineShoppingBag />
                                {cartData?.length !== 0 ? <span>{cartData?.length}</span> : <></>}
                            </div>
                        </NavLink></li>
                        <li className="header__menu__menu-item"><NavLink onClick={() => setMenu(false)} className="header__menu__menu-link" to={"/Wishlist"}>
                            <p>Wishlist</p>
                            <div className="header__menu__menu-link__cart--link">
                                <LuHeart />
                                {wishlist?.length !== 0 ? <span>{wishlist?.length}</span> : <></>}
                            </div>
                        </NavLink></li>
                    </ul>
                    <Link to={"/Login"} className="header__menu__menu-link-login">Login</Link>
                    <div className="header__menu__menu-buttons">
                        <IoLogoInstagram />
                        <LuFacebook />
                        <AiOutlineYoutube />
                    </div>
                </div>
            </div>
        </>
    );
};

Menu.propTypes = {
    menu: PropTypes.bool.isRequired,
    setMenu: PropTypes.func.isRequired,
};

export default memo(Menu);
