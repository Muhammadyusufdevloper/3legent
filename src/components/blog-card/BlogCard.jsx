import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./blogCard.scss";
import { MdArrowForward } from "react-icons/md";
import { memo } from "react";

const BlogCard = ({ isDateLink, data }) => {
    let dataTrue = data || []
    return (
        <>
            <div className="blog-cards">
                {
                    dataTrue?.map((item) => (
                        <div key={item.id} className="blog-card">

                            <Link to={`/single-routes/${item?.id}`}>
                                <div className="blog-card-img">
                                    <img src={item?.images[0]} alt={item?.title} />
                                </div>
                            </Link>

                            <div className="blog__card-content">
                                <h3 className="blog-card-title">{item?.title}</h3>
                                {
                                    isDateLink ?
                                        <Link to={"/shop"} className="blog-card-link">
                                            <div>
                                                <p>
                                                    Read More
                                                </p>
                                                <MdArrowForward />
                                            </div>
                                        </Link>
                                        :
                                        <p>October 16, 2023</p>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

BlogCard.propTypes = {
    isDateLink: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

export default memo(BlogCard);
