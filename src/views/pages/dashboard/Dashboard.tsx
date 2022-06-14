import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import Home from "../home/Home";
import Board from "./Board";
import "./dashboard.css";
import { connect, sendMsg } from "../../../api/websocket";

const Dashboard = () => {

    // const send = () => {
    //     console.log("hello");
    //     sendMsg("hello");
    // }

    // useEffect(() => {
    //     connect();
    // }, []);

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
        {/* <button onClick={() => send()}>Send</button> */}
        <div className="dashboard_title">Welcome back, {details.first_name}!</div>
        <div className="dashboard_boards">
            <Board title="Announcements" flexDirection="row"/>
            <div className="upcoming_appointments">
                <Board title="Upcoming Appointments" flexDirection="column"/>
            </div>
            {/* <Board title="Recent Sessions" /> */}
        </div>
    </div>
}

export default Dashboard;