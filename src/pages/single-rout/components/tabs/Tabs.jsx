// src/Tabs.js

import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "./tabs.scss";
import { reviews } from "../../../../static/data";

const Tabs = () => {
    const [leading, setLeading] = useState(1);
    const [apTab, setApTab] = useState("reviews");
    const getRating = (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<FaStar key={`star-${i}`} />);
        }
        if (rating % 1 > 0.4) {
            res.push(<FaRegStarHalfStroke key="star-half" />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<FaRegStar key={`star-empty-${i}`} />);
        }
        return res;
    };

    return (
        <section className="tabs">
            <div className="container">
                <div className="tabs__top-box">
                    <h3 onClick={() => setApTab("additional-info")} className={`tabs__ap-tap-title ${apTab === "additional-info" ? "tabs__ap-tap-title-active" : ""}`}>Additional Info</h3>
                    <h3 onClick={() => setApTab("questions")} className={`tabs__ap-tap-title ${apTab === "questions" ? "tabs__ap-tap-title-active" : ""}`}>Questions</h3>
                    <h3 onClick={() => setApTab("reviews")} className={`tabs__ap-tap-title ${apTab === "reviews" ? "tabs__ap-tap-title-active" : ""}`}>Reviews</h3>
                </div>
                {apTab === "additional-info" && (
                    <div className="tabs__bottom-box">
                        <div className="tabs__review-box">
                            <h2 className="tabs__title">Customer Reviews</h2>
                            <div className="tabs__review-rating">
                                {getRating(4.5)}
                                <p>11 Reviews</p>
                            </div>
                            <h3 className="tabs__review-title">Tray Table</h3>
                        </div>
                        <form className="tabs__review-form">
                            <input className="tabs__review-input" type="text" />
                            <button className="tabs__review-btn">Write Review</button>
                        </form>
                        <div className="tabs__heading-box">
                            <h3 className="tabs__bottom-title">11 Reviews</h3>
                            <select>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Highest Rating">Highest Rating</option>
                            </select>
                        </div>
                        <div className="tabs__cards">
                            {reviews?.slice(0, 5 * leading).map((item) => (
                                <div key={item.id} className="tabs__card">
                                    <div className="tabs__card-top-box">
                                        <div>
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                            {getRating(item.rating)}
                                        </div>
                                    </div>
                                    <p>{item.comment}</p>
                                </div>
                            ))}
                        </div>
                        {reviews.length > 5 * leading && (
                            <button onClick={() => setLeading((p) => p + 1)} className="tabs__load-btn">
                                Load More
                            </button>
                        )}
                    </div>
                )}
                {apTab === "reviews" && (
                    <div className="tabs__bottom-box">
                        <div className="tabs__review-box">
                            <h2 className="tabs__title">Customer Reviews</h2>
                            <div className="tabs__review-rating">
                                {getRating(4.5)}
                                <p>11 Reviews</p>
                            </div>
                            <h3 className="tabs__review-title">Tray Table</h3>
                        </div>
                        <form className="tabs__review-form">
                            <input className="tabs__review-input" type="text" />
                            <button className="tabs__review-btn">Write Review</button>
                        </form>
                        <div className="tabs__heading-box">
                            <h3 className="tabs__bottom-title">11 Reviews</h3>
                            <select>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Highest Rating">Highest Rating</option>
                            </select>
                        </div>
                        <div className="tabs__cards">
                            {reviews?.slice(0, 5 * leading).map((item) => (
                                <div key={item.id} className="tabs__card">
                                    <div className="tabs__card-top-box">
                                        <div>
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                            {getRating(item.rating)}
                                        </div>
                                    </div>
                                    <p>{item.comment}</p>
                                </div>
                            ))}
                        </div>
                        {reviews.length > 5 * leading && (
                            <button onClick={() => setLeading((p) => p + 1)} className="tabs__load-btn">
                                Load More
                            </button>
                        )}
                    </div>
                )}
                {apTab === "questions" && (
                    <div className="tabs__bottom-box">
                        <div className="tabs__review-box">
                            <h2 className="tabs__title">Customer Reviews</h2>
                            <div className="tabs__review-rating">
                                {getRating(4.5)}
                                <p>11 Reviews</p>
                            </div>
                            <h3 className="tabs__review-title">Tray Table</h3>
                        </div>
                        <form className="tabs__review-form">
                            <input className="tabs__review-input" placeholder="Ask a Question" type="text" />
                            <button className="tabs__review-btn">Write Review</button>
                        </form>
                        <div className="tabs__heading-box">
                            <h3 className="tabs__bottom-title">11 Reviews</h3>
                            <select>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Highest Rating">Highest Rating</option>
                            </select>
                        </div>
                        <div className="tabs__cards">
                            {reviews?.slice(0, 5 * leading).map((item) => (
                                <div key={item.id} className="tabs__card">
                                    <div className="tabs__card-top-box">
                                        <div>
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                            {getRating(item.rating)}
                                        </div>
                                    </div>
                                    <p>{item.comment}</p>
                                </div>
                            ))}
                        </div>
                        {reviews.length > 5 * leading && (
                            <button onClick={() => setLeading((p) => p + 1)} className="tabs__load-btn">
                                Load More
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Tabs;
