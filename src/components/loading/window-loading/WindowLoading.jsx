import { memo } from "react";
import "./windowLoading.scss";

const WindowLoading = () => {
    return (
        <>
            <section className="window-loading">
                <div className="window-loading__wrapper">
                    <span className="loader"></span>
                </div>
            </section>
        </>
    )
}

export default memo(WindowLoading);