import { memo } from "react";
import PropTypes from "prop-types";
import "./category.scss";

const Category = ({ categoryValue, setCategoryValue, category, setPage }) => {
    const categoryList = category || [];

    return (
        <div className="category">
            <ul className="category__list">
                <li className="category__item">
                    <data
                        onClick={(e) => setCategoryValue(e.target.value) && setPage(1)}
                        className={`category__data ${categoryValue === "all" ? "category__data-active" : ""}`}
                        value="all"
                    >
                        All
                    </data>
                </li>
                {categoryList.map((item) => (
                    <li key={item.id} className="category__item">
                        <data
                            onClick={(e) => setCategoryValue(e.target.value) && setPage(1)}
                            className={`category__data ${categoryValue === item.title ? "category__data-active" : ""}`}
                            value={item.title}
                        >
                            {item.title}
                        </data>
                    </li>
                ))}
            </ul>
            <select onChange={(e) => setCategoryValue(e.target.value)} value={categoryValue} className="category__select">
                <option value="all">All</option>
                {categoryList.map((item) => (
                    <option key={item.id} value={item.title}>{item.title}</option>
                ))}
            </select>
        </div>
    );
};

Category.propTypes = {
    categoryValue: PropTypes.string.isRequired,
    setCategoryValue: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    category: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Default props agar category qiymati bo'lmasa
Category.defaultProps = {
    category: [],
};

export default memo(Category);
