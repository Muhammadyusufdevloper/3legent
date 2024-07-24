import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./search.scss";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchOn, setSearchOn] = useState(false)
    // const searchesData = CustomerSearch?.innerData

    // let searchData = searchesData?.map((customer) => (
    //     <li key={customer._id} className="search__search-dropdown__item">
    //         <Link onClick={() => {
    //             setSearchOn(false)
    //             setSearchValue("")
    //         }} to={`/admin/customer/${customer?._id}`} className="search__search-dropdown__link">
    //             <IoIosSearch />
    //             <div className="search__search-dropdown__box">
    //                 <p>{customer?.fname + "   " + customer?.lname}</p>
    //                 <p>{customer?.phone_primary}</p>
    //             </div>
    //         </Link>
    //     </li>
    // ))
    return (
        <>
            <form className={`search__search-form `}>
                <label htmlFor="search-button" type="button" className="search__search-btn"><FiSearch /></label>
                <input id="search-button" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={`search__search-input ${searchValue ? "search__search-input-show" : ""}`} type="text" placeholder="search..." />
                {
                    searchValue ?
                        <div className="search__search-dropdown">
                            <ul className="search__search-dropdown__list">
                                {/* {searchData} */}
                            </ul>
                        </div>
                        :
                        <></>
                }
            </form>
        </>
    )
}

export default Search