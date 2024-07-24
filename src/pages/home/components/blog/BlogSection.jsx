import { MdArrowForward } from "react-icons/md"
import { Link } from "react-router-dom"
import BlogCard from "../../../../components/blog-card/BlogCard"
import "./blogSection.scss"
import { useGetProductsQuery } from "../../../../context/api/productApi"
import BlogCardsLoading from "../../../../components/loading/blog-cards-loading/BlogCardsLoading"
import { memo } from "react"
const BlogSection = () => {
    const { data, isLoading, isFetching } = useGetProductsQuery({ limit: 3, page: 2 })
    return (
        <>
            <section className='blog-section'>
                <div className='container'>
                    <div className="blog-section__top-box">
                        <h2 className="blog-section__title">Articles</h2>
                        <Link to={"/shop"} className="blog-section__link">
                            <div>
                                <p>
                                    Read More
                                </p>
                                <MdArrowForward />
                            </div>
                        </Link>
                    </div>
                    {
                        isLoading || isFetching ? <BlogCardsLoading limit={3} /> :
                            <BlogCard data={data} isDateLink={true} />
                    }
                </div>
            </section>
        </>
    )
}

export default memo(BlogSection)