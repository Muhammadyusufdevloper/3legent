import "./blogCardsLoading.scss"

const BlogCardsLoading = ({ limit }) => {
    const cards = [];
    for (let i = 0; i < limit; i++) {
        cards.push(
            <div className="blog-card-loading" key={i}>
                <div className="blog-card-loading-animation"></div>
                <div className="blog-card-content-loading">
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-cards-loading">
            {cards}
        </div>
    );
}

export default BlogCardsLoading;