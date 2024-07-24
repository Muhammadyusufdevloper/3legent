// Hero.js
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import heroBg from "../../../../assets/hero/heroBg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./hero.scss";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__top">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        // breakpoints={{
                        //   768: {
                        //     navigation: false,
                        //   },
                        // }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={heroBg} alt="hero bg img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={heroBg} alt="hero bg img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={heroBg} alt="hero bg img" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="hero__bottom">
                    <h1 className="hero__logo">
                        Simply Unique<span>/</span> Simply Better<span>.</span>
                    </h1>
                    <p className="hero__desc">
                        <span>3legant</span> is a gift & decorations store based in HCMC,
                        Vietnam. Est since 2019.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default memo(Hero);
