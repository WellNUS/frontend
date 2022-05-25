import React from "react";
import Navbar from "../../partials/Navbar/Navbar";
import Container from "./Container";
import { Containers, WelcomeTitle } from "./styled/styled"

const Dashboard = () => {
    return <div>
        <Navbar />
        <WelcomeTitle>Welcome back, USERNAME</WelcomeTitle>
        <Containers>
            <Container title="Announcements" />
            <Container title="Upcoming Appointments" />
            <Container title="Recent Sessions" />
        </Containers>
    </div>
}

export default Dashboard;