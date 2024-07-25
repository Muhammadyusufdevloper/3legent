import "./login.scss"
import images from "../../assets/login/Left.jpg"
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <>
            <section className="login">
                <div className="login__left-box">
                    <img src={images} alt="img title" />
                </div>

                <div className="login__right-box">
                    <h1 className="login__title">Sign In</h1>
                    <p className="login__text">Don’t have an accout yet? <span>Sign Up</span></p>
                    <form className="login__form">
                        <input type="text" className="login__form-input" placeholder="Your usernam or email address" />
                        <div>
                            <input type="password" className="login__form-input" placeholder="Password" />
                        </div>
                        <div className="login__form-bottom-box">
                            <div>
                                <input type="checkbox" />
                                <label htmlFor=""></label>
                            </div>
                            <Link className="login__form-link">Forgot password?</Link>
                        </div>
                        <button className="login__form-btn">Sign In</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login