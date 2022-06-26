import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";
// import logo from "../../../static/icon/navIcons/logo.png"
import bell from "../../../static/icon/navIcons/bell.png";
import exit from "../../../static/icon/navIcons/exit.png";
import profile from "../../../static/icon/navIcons/profile.png";
import { useSelector } from "react-redux";
import LogoutModal from "../../pages/authentication/Logout";
import ProfileModal from "../../pages/profile/Profile";
// import { logout } from "../../pages/authentication/Logout";

const Navbar = (props : { hideTop : boolean }) => {
    const { hideTop } = props;
    const { details, loggedIn } = useSelector((state: any) => state.user);

    if (hideTop) {
        return (
            <div className="navbar-container-bot">
                <NavLink to="/dashboard" className="navlink">
                    DASHBOARD
                </NavLink>
                <NavLink to="/groups" className="navlink">
                    GROUPS
                </NavLink>
                <NavLink to="/join" className="navlink">
                    JOIN
                </NavLink>
                <NavLink to="" className="navlink">
                    MATCH
                </NavLink>
            </div>
        )
    }

    return <div>
        <div className="navbar-container-top">
            <div className="navbar-left">
                {/* <img src={logo} alt="Logo" /> */}
                <h1>WellNUS</h1>
            </div>
            <div className="navbar-right">
                {/* <p>AY2021/2022, Semester 2, Week 9</p> */}
                <ProfileModal />
                <img src={bell} alt="bell"/>
                <LogoutModal />
            </div>
        </div>
        <div className="navbar-container-bot">
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
    </div>
}

export default Navbar;