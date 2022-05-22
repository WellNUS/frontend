import React from "react";
import Navbar from "../../partials/Navbar/Navbar";
import Container from "./Container";

const Dashboard = () => {
    return <div>
        <Navbar />
        <text className="welcome-title">Welcome back, USERNAME</text>
        <div className="dashboard-containers">
            <Container title="Announcements" />
            <Container title="Upcoming Appointments" />
            <Container title="Recent Sessions" />
        </div>
    </div>
}

export default Dashboard;