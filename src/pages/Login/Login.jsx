import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images//login/login.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result);
                navigate(location.state?.from?.pathname || "/", { replace: true })
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content  ">
                <img src={img} className="w-2/5 px-5" alt="" />
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-2xl text-center text-purple-500 font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <p className="text-center pb-10">Do not have an account?<Link className="text-orange-600" to='/signup'>Signup</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;