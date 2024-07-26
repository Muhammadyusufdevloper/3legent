import { memo } from "react";
import "./windowLoading.scss";

const WindowLoading = () => {
    return (
        <>
            <section className="window-loading">
                <div className="window-loading__wrapper">
                    <div className="window-loading__cards">
                        <div className="window-loading__card"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(WindowLoading);