import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loadder from "../pages/Shared/Loadder";

const Main = () => {

    const { loading } = useContext(AuthContext)
    if (loading) {
        return <Loadder></Loadder>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;