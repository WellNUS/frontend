import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {

    return <div>
        <div className="navbar-container-top">
            <div className="navbar-left">
                <img src="https://cdn-icons.flaticon.com/png/512/5653/premium/5653466.png?token=exp=1653207030~hmac=af386abfe0f623b5b61392aa42d23ba4" alt="Logo" />
                <h1>WellNUS</h1>
            </div>
            <div className="navbar-right">
                <p>AY2021/2022, Semester 2, Week 9</p>
                <div className="profile">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135707.png" alt="Profile" />
                    <p>USERNAME</p>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png" />
                <img src="https://cdn-icons-png.flaticon.com/128/1286/1286853.png"/>
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