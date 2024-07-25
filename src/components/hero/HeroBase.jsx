import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./heroBase.scss";

const HeroBase = ({ title, desc, path, isImages }) => {
    return (
        <section className="hero-base">
            <div className="container">
                <div className={`hero-base__wrapper ${isImages ? "hero-base__wrapper-blog-img" : "hero-base__wrapper-shop-img"}`}>
                    <div className="hero-base__content">
                        <div>
                            <Link className="hero-base__link" to="/">
                                <p>Home</p> <MdOutlineArrowForwardIos />
                            </Link>
                            <Link className="hero-base__link" to={`/${path}`}>
                                {path}
                            </Link>
                        </div>
                        <h1 className="hero-base__title">{title}</h1>
                        <p className="hero-base__desc">{desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

HeroBase.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    isImages: PropTypes.bool.isRequired,
};

export default HeroBase;
