import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext, logOut } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const navItems = <>
        <li><Link to="/" >Home</Link></li>
        <li><Link to='/about' >About</Link ></li>

        {
            user?.email ? <><li><Link to='/bookings' >Bookings</Link ></li> <button onClick={handleLogOut} className="btn btn-success">log out</button></> : <li><Link to='/login' >login</Link ></li>
        }
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className=" normal-case text-xl">

                        <img src={logo} className="w-full" alt="" />
                    </Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>

                </div>
                <div className="navbar-end">
                    <button className="btn btn-indigo-500 btn-outline">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;