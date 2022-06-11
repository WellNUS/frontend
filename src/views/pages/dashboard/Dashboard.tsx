import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import Home from "../home/Home";
import Board from "./Board";
import "./dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const { details, loggedIn } = useSelector((state: any) => state.user);

    // render home page if no user is logged in
    if (!loggedIn) {
        return (
            <div>
                You are not logged in.
                <Home />
            </div>
        )
    }

    return <div>
        <Navbar />
        <div className="dashboard_title">Welcome back, {details.first_name}!</div>
        <div>{details.first_name}</div>
        <div>{details.last_name}</div>
        <div>{details.gender}</div>
        <div>{details.faculty}</div>
        {/* temporary */}
        <div className="dashboard_title">Status: {loggedIn ? "Logged in" : "Not logged in"}</div>
        <div className="dashboard_boards">
            <Board title="Announcements" />
            <Board title="Upcoming Appointments" />
            <Board title="Recent Sessions" />
        </div>
    </div>
}

export default Dashboard;