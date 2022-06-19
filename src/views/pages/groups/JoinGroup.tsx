import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import userSlice from "../../../state/slices/user";
import { Button, Modal } from "react-bootstrap";
import exit from "../../../static/icon/navIcons/exit.png";
import GeneralForm from "../../components/form/GeneralForm";
import "./group.css";
import Navbar from "../../components/navbar/Navbar";

const JoinGroup = () => {
    const [requests, getRequests] = useState([]);
    const [errMsg, setErrMsg] = useState("");

    const handleFetch = async () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include' as RequestCredentials,
        }
        await fetch("http://localhost:8080/join", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    const handleJoin = async (e: any) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            credentials: 'include' as RequestCredentials,
            body: JSON.stringify({
                "group_id": parseInt(e.target[0].value, 10),
            })
        }
        await fetch("http://localhost:8080/join", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div>
            <Navbar hideTop={false}/>
            <div className="group_heading_row">
                <div className="group_title">Join a group today!</div>
            </div>
            <div className="join_group_main">
                <div className="join_group_left_column">
                    <GeneralForm 
                        onSubmit={handleJoin}
                        fields={[
                            {
                                id: "id",
                                type: "text",
                                label: "id",
                                placeholder: "Enter the group id...",
                                notes: ""
                            }
                        ]}
                        error={errMsg}
                        displayError={errMsg !== ""}
                        closeError={() => setErrMsg("")}
                        hideSubmit={true}
                    />
                </div>
                <div className="join_group_right_column">
                    <div className="group table_head">
                        <div className="group_name">Your Groups</div>
                        <div className="group_description">Description</div>
                        <div className="group_category">Categories</div>
                        <div className="group_button">Action</div>
                    </div>
                    {requests.map((request, id) => {
                        return (
                            <div className="group" key={id}>
                                {/* <div className="group_name">{group.group_name}</div>
                                <div className="group_description">{group.group_description}</div>
                                <div className="group_category">{group.category}</div>
                                <div className="group_button">
                                    <Link to={`/groups/${group.id}`}>
                                        <button>View</button>
                                        View
                                    </Link>
                                </div> */}
                            </div>
                        )
                    })}

                    {/* <div className="join_group_top_row"></div> */}
                    {/* <div className="join_group_bottom_row"></div>  */}
                </div>
            </div>
        </div>
    )
}

export default JoinGroup;