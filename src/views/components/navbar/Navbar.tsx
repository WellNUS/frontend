import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import logo from "../../../static/icon/navIcons/logo.png"
import bell from "../../../static/icon/navIcons/bell.png";
import exit from "../../../static/icon/navIcons/exit.png";
import profile from "../../../static/icon/navIcons/profile.png";

const Navbar = () => {

    return <div>
        <div className="navbar-container-top">
            <div className="navbar-left">
                <img src={logo} alt="Logo" />
                <h1>WellNUS</h1>
            </div>
            <div className="navbar-right">
                <p>AY2021/2022, Semester 2, Week 9</p>
                <div className="profile">
                    <img src={profile} alt="Profile" />
                    <p>USERNAME</p>
                </div>
                <img src={bell} />
                <img src={exit}/>
            </div>
        </div>
        <div className="navbar-container-bot">
            <NavLink to="" className="navlink">
                DASHBOARD
            </NavLink>
            <NavLink to="" className="navlink">
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