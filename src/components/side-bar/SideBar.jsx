import { AiOutlineProduct } from "react-icons/ai"
import { FiArrowLeft } from "react-icons/fi"
import { MdCreateNewFolder, MdLogout } from "react-icons/md"
import { Link, NavLink, useNavigate } from "react-router-dom"
import "./SideBar.scss"
const SideBar = () => {
    let navigate = useNavigate()
    return (
        <>
            <section className="side-bar">
                <div className="side-bar__wrapper">
                    <Link to={"/"} className="side-bar__header-link">
                        <FiArrowLeft />
                        <h1>Admin Dashboard</h1>
                    </Link>
                    <ul className="side-bar__list">
                        <li className="side-bar__item">
                            <NavLink className="side-bar__link" to={"/admin/product-create"}>
                                <MdCreateNewFolder />
                                <p>Create Product</p>
                            </NavLink>
                        </li>
                        <li className="side-bar__item">
                            <NavLink className="side-bar__link" to={"/admin/products"}>
                                <AiOutlineProduct />
                                <p>Manage Product</p>
                            </NavLink>
                        </li>
                        <li className="side-bar__item">
                            <NavLink className="side-bar__link" to={"/admin/create-category"}>
                                <MdCreateNewFolder />
                                <p>Create Category</p>
                            </NavLink>
                        </li>
                        <li className="side-bar__item">
                            <NavLink className="side-bar__link" to={"/admin/category"}>
                                <AiOutlineProduct />
                                <p>Manage Category</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <button onClick={() => {
                    localStorage.removeItem("x-auth-token")
                    navigate("/")
                }} className="side-bar__logout">
                    <MdLogout />
                    <p>Log out</p>
                </button>
            </section>
        </>
    )
}

export default SideBar