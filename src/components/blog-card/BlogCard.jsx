import { Link } from "react-router-dom"
import "./blogCard.scss"
import { MdArrowForward } from "react-icons/md"
import { memo } from "react"
const BlogCard = ({ isDateLink, data }) => {
    return (
        <>
            <div className="blog-cards">
                {
                    data?.map((item) => (
                        <div key={item._id} className="blog-card">

                            <Link to={`/single-route/${item?._id}`}>
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
                    ))}


            </div>
        </>
    )
}

export default memo(BlogCard)