import { memo, useEffect } from "react"
import "./banner.scss"
import bannerImg from "../../assets/banner/bannerImg.jpg"
import { Link } from "react-router-dom"
import { MdArrowForward } from "react-icons/md"
import PropTypes from 'prop-types';

const Banner = ({ isSpan, isTitle, isDesc, isContainer }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className={`banner ${isContainer}`}>
                <div className="banner__left-box">
                    <img src={bannerImg} alt="banner img" />
                </div>
                <div className="banner__right-box">
                    <div className="banner__content">
                        <span className="banner__top-text">{isSpan}</span>
                        <h2 className="banner__title">{isTitle}</h2>
                        <p className="banner__text">{isDesc}</p>
                        <Link to={"/shop"} className="banner__link">
                            <div>
                                <p>
                                    Shop Now
                                </p>
                                <MdArrowForward />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

Banner.propTypes = {
    isSpan: PropTypes.string.isRequired,
    isTitle: PropTypes.string.isRequired,
    isDesc: PropTypes.string.isRequired,
    isContainer: PropTypes.string.isRequired
};

export default memo(Banner);
