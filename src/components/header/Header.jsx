import { memo, useState } from "react"
import "./header.scss"
import { Link, NavLink } from "react-router-dom"
import sapHeaderIcon from "../../assets/header/ticket-percent.svg"
import siteLogo from "../../assets/header/Logo.svg"
import { IoArrowForwardOutline, IoClose, IoMenu } from "react-icons/io5"
import { FiSearch } from "react-icons/fi"
import { IoMdContact } from "react-icons/io"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { LuHeart } from "react-icons/lu"
import Search from "./components/Search"
import Menu from "./components/Menu"
import { useSelector } from "react-redux"
const Header = () => {
    const [searchToggle, setSearchToggle] = useState(false)
    const [menu, setMenu] = useState(false)
    const [sapHeader, setSapHeader] = useState(true)
    const wishlist = useSelector(state => state.wishlist.value)
    const cartData = useSelector(state => state.cart.value)
    return (
        <>
            <div className={`sap-header${sapHeader ? "" : " sap-header--hidden"}`}>
                <div className="sap-header__base-cart"></div>
                <div className="sap-header__left-box">
                    <img src={sapHeaderIcon} alt="Sap header icons" />
                    <h3 className="sap-header__title">30% off storewide — Limited time! </h3>
                    <Link to={"/shop"} className="sap-header__link">
                        <p>
                            Shop Now
                        </p>
                        <IoArrowForwardOutline />
                    </Link>
                    <button onClick={() => setSapHeader(false)} className="sap-header__close sap-header__close-responsive">
                        <IoClose />
                    </button>
                </div>
                <button onClick={() => setSapHeader(false)} className="sap-header__close">
                    <IoClose />
                </button>
            </div>
            <header className="header">
                <Menu menu={menu} setMenu={setMenu} />
                <nav className="header__navbar container">
                    <div className="header__logo-box">
                        <button onClick={() => setMenu(true)} className="header__menu-btn">
                            <IoMenu />
                        </button>
                        <Link to={"/"} className="header__logo-link">
                            <img src={siteLogo} alt="site logo" />
                        </Link>
                    </div>
                    <ul className="header__list">
                        <li className="header__item"><NavLink className="header__link" to={"/"}>Home</NavLink></li>
                        <li className="header__item"><NavLink className="header__link" to={"/shop"}>Shop</NavLink></li>
                        <li className="header__item"><NavLink className="header__link" to={"/blog"}>Blog</NavLink></li>
                        <li className="header__item"><NavLink className="header__link" to={"/contact"}>Contact Us</NavLink></li>
                    </ul>
                    <div className="header__right-box">
                        <div className="header__right-box-button">
                            <button onClick={() => setSearchToggle(!searchToggle)}>
                                {
                                    searchToggle
                                        ? <IoClose />
                                        : <FiSearch />
                                }
                            </button>
                            <Search isSearch={true} searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
                        </div>
                        <Link to={"/login"} className="header__right-box-link">
                            <IoMdContact />
                        </Link>
                        <Link to={"/cart/shopping-cart"} className="header__right-box-link header__right-box-link--cart--like">
                            <HiOutlineShoppingBag />
                            {
                                cartData?.length !== 0 ?
                                    <span>{cartData?.length}</span>
                                    : <></>
                            }
                        </Link>
                        <Link to={"/wishlist"} className="header__right-box-link header__right-box-link--cart--like">
                            < LuHeart />
                            {
                                wishlist?.length !== 0 ?
                                    <span>{wishlist?.length}</span>
                                    : <></>
                            }
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default memo(Header)