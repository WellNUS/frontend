import React from "react";
import { useSelector } from "react-redux";
import Home from "../home/Home";

const Profile = () => {
    const { loggedIn, details } = useSelector((state: any) => state.user);

    if (!loggedIn) {
        return (
            <div>
                <div>You are not logged in.</div>
                <Home />
            </div>
        )
    }

    return (
        <div>
            <div>First name: {details.first_name}</div>
            <div>Last name: {details.last_name}</div>
            <div>Gender: {details.gender}</div>
            <div>Faculty: {details.faculty}</div>
            <div>Email: {details.email}</div>
        </div>
    )
}

export default Profile;