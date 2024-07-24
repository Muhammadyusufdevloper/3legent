import { MdOutlineMail } from "react-icons/md"
import "./newsletter.scss"
import { memo } from "react"
import { useNavigate } from "react-router-dom";
const Newsletter = () => {
    let navigate = useNavigate();
    return (
        <>
            <section className="newsletter">
                <div className="newsletter__wrapper">
                    <div className="newsletter__info-box">
                        <h2 className="newsletter__title">Join Our Newsletter</h2>
                        <p className="newsletter__text">Sign up for deals, new products and promotions</p>
                    </div>
                    <div className="newsletter__form">
                        <label className="newsletter__label" htmlFor="email"><MdOutlineMail /></label>
                        <input className="newsletter__input" type="email" id="email" placeholder="Email address" />
                        <button onClick={() => navigate("/login")} className="newsletter__btn">Signup</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Newsletter);