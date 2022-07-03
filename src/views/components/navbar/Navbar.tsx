import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
// import logo from "../../../static/icon/navIcons/logo2.png";
import logo from "../../../static/icon/navIcons/logo.png";
import bell from "../../../static/icon/navIcons/bell.png";
import exit from "../../../static/icon/navIcons/exit.png";
import profile from "../../../static/icon/navIcons/profile.png";
import { useSelector } from "react-redux";
import LogoutModal from "../../pages/authentication/Logout";
import ProfileModal from "../../pages/profile/Profile";

const Navbar = (props : { hideTop : boolean }) => {
    const { hideTop } = props;
    const { details, loggedIn } = useSelector((state: any) => state.user);

    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <div className="navbar-logo-container">
                    <img src={logo} alt="Logo" className="logo"/>
                    {/* <h1>WellNUS</h1> */}
                </div>
                <NavLink to="/dashboard" className="navlink">
                    DASHBOARD
                </NavLink>
                <NavLink to="/groups" className="navlink">
                    GROUPS
                </NavLink>
                <NavLink to="/join" className="navlink">
                    JOIN
                </NavLink>
                <NavLink to="/match" className="navlink">
                    MATCH
                </NavLink>
            </div>
            <div className="navbar-right">
                {/* <p>AY2021/2022, Semester 2, Week 9</p> */}
                <ProfileModal />
                {/* <img src={bell} alt="bell"/> */}
                <LogoutModal />
            </div>
        </div>
    )
}

export default Navbar;