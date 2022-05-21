import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {

    return <div>
        <div className="navbar-container-top">
            <div className="navbar-left">
                <img src="" alt="Logo" />
                <h1>WellNUS</h1>
            </div>
            <div className="navbar-right">
                <p>AY2021/2022, Semester 2, Week 9</p>
                <img src="" alt="Profile" />
                <p>USERNAME</p>
                <img src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png" />
                <img src="https://cdn-icons-png.flaticon.com/128/1286/1286853.png"/>
            </div>
        </div>
        <div className="navbar-container-bot">
            <NavLink to="">
                DASHBOARD
            </NavLink>
            <NavLink to="">
                GROUP
            </NavLink>
            <NavLink to="">
                TALK
            </NavLink>
            <NavLink to="">
                BECOME
            </NavLink>
        </div>
    </div>
}

export default Navbar;