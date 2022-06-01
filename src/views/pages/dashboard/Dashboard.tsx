import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Board from "./Board";
import "./dashboard.css";

const Dashboard = () => {
    return <div>
        <Navbar />
        <div className="dashboard_title">Welcome back, USERNAME</div>
        <div className="dashboard_boards">
            <Board title="Announcements" />
            <Board title="Upcoming Appointments" />
            <Board title="Recent Sessions" />
        </div>
    </div>
}

export default Dashboard;