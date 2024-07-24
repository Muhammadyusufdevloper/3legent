import { Link } from "react-router-dom"
import "./blogCard.scss"
import { MdArrowForward } from "react-icons/md"
import { memo } from "react"
const BlogCard = ({ isDateLink }) => {
    return (
        <>
            <div className="blog-cards">
                <div className="blog-card">
                    <div className="blog-card-img">
                        <img src="" alt="" />
                    </div>
                    <div className="blog__card-content">
                        <h3 className="blog-card-title">7 ways to decor your home</h3>
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
                <div className="blog-card">
                    <div className="blog-card-img">
                        <img src="" alt="" />
                    </div>
                    <div className="blog__card-content">
                        <h3 className="blog-card-title">7 ways to decor your home</h3>
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
                <div className="blog-card">
                    <div className="blog-card-img">
                        <img src="" alt="" />
                    </div>
                    <div className="blog__card-content">
                        <h3 className="blog-card-title">7 ways to decor your home</h3>
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
            </div>
        </>
    )
}

export default memo(BlogCard)