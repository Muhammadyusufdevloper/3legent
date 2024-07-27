import { memo, useState } from "react";
import "./search.scss";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useGetProductsQuery } from "../../../context/api/productApi";
import { FaCircleArrowLeft } from "react-icons/fa6";

const Search = ({ searchToggle, setSearchToggle, isSearch, setSearchOnOf, searchOnOf }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchOn, setSearchOn] = useState(false)
    const { data } = useGetProductsQuery({ title: searchValue, limit: 10, page: 1 })
    document.body.style.overflow = searchToggle ? "hidden" : ""
    let searchData = data?.map((product) => (
        <li key={product.id} className="search__search-dropdown__item">
            <Link to={`/single-routes/${product?.id}`} onClick={() => {
                setSearchOn(false)
                setSearchValue("")
                setSearchOnOf(false)
            }} className="search__search-dropdown__link">
                <IoIosSearch />
                <div className="search__search-dropdown__box">
                    <p>{product?.title}</p>
                    {
                        isSearch ?
                            <p>${product?.price}</p>
                            : <></>
                    }
                </div>
            </Link>
        </li>
    ))
    return (
        <>
            {
                isSearch ?
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
                    :
                    <div className={`search__box-wrapper ${searchOnOf ? "search__box-wrapper-show" : ""}`}>
                        <button onClick={() =>
                            setSearchOnOf(false)
                        } className="search__go-home"><FaCircleArrowLeft /> <p>Go home</p></button>
                        <form className={`search__search-form ${!isSearch ? "search__search-form-responsive" : ""}`}>
                            <label htmlFor="search-button" type="button" className="search__search-btn"><FiSearch /></label>
                            <input id="search-button" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={`search__search-input`} type="text" placeholder="search..." />
                            {
                                searchValue ?
                                    <div className="search__search-dropdown-responsive">
                                        <ul className="search__search-dropdown--responsive-list">
                                            {searchData}
                                        </ul>
                                    </div>
                                    :
                                    <></>
                            }
                        </form>
                    </div>
            }
            <div onClick={() => setSearchToggle(false)} className={`search__search-overlay ${searchToggle ? "search__search-overlay-show" : ""}`}></div>
        </>
    )
}

export default memo(Search)