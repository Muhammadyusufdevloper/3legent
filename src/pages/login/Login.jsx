import "./login.scss"
import images from "../../assets/login/Left.jpg"
import { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useGetValue } from "../../hooks/useGetValue";

const initialState = {
    username: "john32",
    password: "87654321",
};

const Login = () => {
    const [checkPassword, setCheckPassword] = useState(false);
    const { formData, handleChange } = useGetValue(initialState);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (formData.username === "john32" && formData.password === "87654321") {
            localStorage.setItem("x-auth-token", JSON.stringify(formData));
            navigate("/admin/products");
        } else {
            toast.error("Username and password incorrect");
        }
    };

    return (
        <>
            <div className="login">
                <div className="login__left">

                    <img
                        className="login__left-img"
                        src={images}
                        alt="login bg  image"
                    />
                </div>
                <form
                    onSubmit={handleLogin}
                    className="login__form container"
                    action=""
                >
                    <div className="login__form-box">
                        <h2>Sign In</h2>
                        <p className="login__form-text">
                            Don’t have an accout yet? <Link to={"/register"}>Sign Up</Link>
                        </p>
                        <input
                            className="login__form-input"
                            type="text"
                            placeholder="Your username or email address"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <div className="login__form__input-box">
                            <input
                                type={checkPassword ? "text" : "password"}
                                placeholder="Password"
                                className="login__form__password login__form-input"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {checkPassword ? (
                                <IoEyeOffOutline onClick={() => setCheckPassword(false)} />
                            ) : (
                                <IoEyeOutline onClick={() => setCheckPassword(true)} />
                            )}
                        </div>
                        <div className="login__form-middle">
                            <div>
                                <input id="remember" type="checkbox" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <p>Forgot password?</p>
                        </div>
                        <button>Sign in</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default memo(Login);
