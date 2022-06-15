import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";
// import logo from "../../../static/icon/navIcons/logo.png"
import bell from "../../../static/icon/navIcons/bell.png";
import exit from "../../../static/icon/navIcons/exit.png";
import profile from "../../../static/icon/navIcons/profile.png";
import { useSelector } from "react-redux";
import LogoutModal from "../../pages/authentication/Logout";
// import { logout } from "../../pages/authentication/Logout";

const Navbar = () => {
    const { details, loggedIn } = useSelector((state: any) => state.user);
    return <div>
        <div className="navbar-container-top">
            <div className="navbar-left">
                {/* <img src={logo} alt="Logo" /> */}
                <h1>WellNUS</h1>
            </div>
            <div className="navbar-right">
                <p>AY2021/2022, Semester 2, Week 9</p>
                <Link to="/profile" className="profile">
                        <img src={profile} alt="Profile" />
                        <p>{details.first_name} {details.last_name}</p>
                </Link>
                <img src={bell} alt="bell"/>
                <LogoutModal />
            </div>
        </div>
        <div className="navbar-container-bot">
            <NavLink to="/dashboard" className="navlink">
                DASHBOARD
            </NavLink>
            <NavLink to="/group" className="navlink">
                GROUP
            </NavLink>
            <NavLink to="" className="navlink">
                TALK
            </NavLink>
            <NavLink to="" className="navlink">
                BECOME
            </NavLink>
        </div>
    </div>
}

export default Navbar;