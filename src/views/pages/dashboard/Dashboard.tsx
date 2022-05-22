import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";

const Dashboard = () => {
    return <div>
        <Navbar />
        <div className="dashboard-containers">
            <Container title="Announcements" style="dashboard-container"/>
            <Container title="Upcoming Appointments" style="dashboard-container"/>
            <Container title="Recent Sessions" style="dashboard-container"/>
        </div>
    </div>
}

export default Dashboard;