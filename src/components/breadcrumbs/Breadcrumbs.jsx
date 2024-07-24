import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./breadcrumbs.scss"
import { IoIosArrowForward } from 'react-icons/io';
const Breadcrumbs = () => {
    const location = useLocation();
    const breadcrumbs = location.pathname.split('/').filter(path => path);

    return (
        <nav className="breadcrumb">
            <div className='container'>
                <ul className="breadcrumb__list">
                    <li className="breadcrumb-item">
                        <Link className='breadcrumb__link' to="/">Home <IoIosArrowForward /></Link>
                    </li>
                    {breadcrumbs.map((path, index) => {
                        const to = `/${breadcrumbs.slice(0, index + 1).join('/')}`;
                        return (
                            <li key={to} className="breadcrumb-item">
                                <Link className='breadcrumb__link' to={to}>{path} <IoIosArrowForward /></Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default memo(Breadcrumbs);
