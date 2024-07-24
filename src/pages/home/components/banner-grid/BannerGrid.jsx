import { memo } from "react";
import banner1 from "../../../../assets/banner-grid/banner1.png";
import banner2 from "../../../../assets/banner-grid/banner2.png";
import banner3 from "../../../../assets/banner-grid/banner3.png";
import { FaArrowRightLong } from "react-icons/fa6";

import "./bannerGrid.scss";
import { Link } from "react-router-dom";
const BannerGrid = () => {
    return (
        <section className="banner-grid">
            <div className="container banner-grid__container">
                {/* 1 */}
                <div className="banner-grid__card">
                    <div className="banner-grid__card__info">
                        <h3 className="banner-grid__title">Living Room</h3>
                        <div>
                            <Link className="banner-grid__link" to={"/shop"}>
                                Shop Now <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                    <div className="banner-grid__card__img">
                        <img src={banner1} alt="banner-grid img" />
                    </div>
                </div>
                {/* 2 */}
                <div className="banner-grid__card">
                    <div className="banner-grid__card__info">
                        <h3 className="banner-grid__title">Bedroom</h3>
                        <Link className="banner-grid__link" to={"/shop"}>
                            Shop Now <FaArrowRightLong />
                        </Link>
                    </div>
                    <div className="banner-grid__card__img">
                        <img src={banner2} alt="banner-grid img" />
                    </div>
                </div>
                {/* 3 */}
                <div className="banner-grid__card">
                    <div className="banner-grid__card__info">
                        <h3 className="banner-grid__title">Kitchen</h3>
                        <Link className="banner-grid__link" to={"/shop"}>
                            Shop Now <FaArrowRightLong />
                        </Link>
                    </div>
                    <div className="banner-grid__card__img">
                        <img src={banner3} alt="banner-grid img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(BannerGrid)