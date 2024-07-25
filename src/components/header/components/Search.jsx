import { memo, useState } from "react";
import "./search.scss";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useGetProductsQuery } from "../../../context/api/productApi";

const Search = ({ searchToggle, setSearchToggle }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchOn, setSearchOn] = useState(false)
    const { data } = useGetProductsQuery({ title: searchValue, limit: 10, page: 1 })
    document.body.style.overflow = searchToggle ? "hidden" : ""

    let searchData = data?.map((product) => (
        <li key={product.id} className="search__search-dropdown__item">
            <Link to={`/single-routes/${product?.id}`} onClick={() => {
                setSearchOn(false)
                setSearchValue("")
            }} className="search__search-dropdown__link">
                <IoIosSearch />
                <div className="search__search-dropdown__box">
                    <p>{product?.title}</p>
                    <p>${product?.price}</p>
                </div>
            </Link>
        </li>
    ))
    return (
        <>
            <form className={`search__search-form ${searchToggle ? "search__search-form-show" : ""}`}>
                <label htmlFor="search-button" type="button" className="search__search-btn"><FiSearch /></label>
                <input id="search-button" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={`search__search-input ${searchValue ? "search__search-input-show" : ""}`} type="text" placeholder="search..." />
                {
                    searchValue ?
                        <div className="search__search-dropdown">
                            <ul className="search__search-dropdown__list">
                                {searchData}
                            </ul>
                        </div>
                        :
                        <></>
                }
            </form>
            <div onClick={() => setSearchToggle(false)} className={`search__search-overlay ${searchToggle ? "search__search-overlay-show" : ""}`}></div>
        </>
    )
}

export default memo(Search)