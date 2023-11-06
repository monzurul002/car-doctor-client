import React, { useContext } from 'react';
import img from "../../assets/images/login/login.svg"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Loadder from '../Shared/Loadder';
const SignUp = () => {
    const { createUser, profileUpdate, } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                profileUpdate(name)
                    .then(result => {


                        navigate('/')

                    })
                form.reset()
            })
            .catch(error => {
                const message = error.message;
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content  ">
                <img src={img} className="w-2/5 px-5" alt="" />
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-2xl text-center text-purple-500 font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>

                    <p className="text-center pb-10">Already have an account?<Link className="text-orange-600" to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;