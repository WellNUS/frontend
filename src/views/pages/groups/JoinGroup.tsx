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
    const [requests, setRequests] = useState<any[]>([]);
    const [userFullName, setUserFullName] = useState("");
    const [groupName, setGroupName] = useState("");
    const [names, setNames] = useState<any[]>([]);
    const [errMsg, setErrMsg] = useState("");

    const handleFetch = async () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include' as RequestCredentials,
        }
        await fetch("http://localhost:8080/join", requestOptions)
            .then(response => response.json())
            .then(data => {
                setRequests(data);
            });
    }

    // const getUserAndGroupNames = async () => {
    //     const requestOptions = {
    //         method: 'GET',
    //         credentials: 'include' as RequestCredentials,
    //     }
    //     requests.map(async request => {
    //         await fetch(`http://localhost:8080/user/${request.user_id}`, requestOptions)
    //             .then(response => response.json())
    //             .then(data => {
    //                 setUserFullName(data.user.first_name + " " + data.user.last_name);
    //             })
    //         await fetch(`http://localhost:8080/group/${request.group_id}`, requestOptions)
    //             .then(response => response.json())
    //             .then(data => {
    //                 setGroupName(data.group.group_name);
    //             })
    //         // return {...request, userName: userFullName, groupName: groupName};
    //         setNames([...names, {userName: userFullName, groupName: groupName}]);
    //     })
    // }

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
            .then(data => {
                console.log(data);
            });
        window.location.reload();
    }

    const handleApprove = async (groupID : number) => {
        const requestOptions = {
            method: 'PATCH',
            credentials: 'include' as RequestCredentials,
            body: JSON.stringify({
                "approve": true
            })
        }
        await fetch(`http://localhost:8080/join/${groupID}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        // window.location.reload();
    }

    const handleReject = async (groupID : number) => {
        const requestOptions = {
            method: 'PATCH',
            credentials: 'include' as RequestCredentials,
            body: JSON.stringify({
                "approve": false
            })
        }
        await fetch(`http://localhost:8080/join/${groupID}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        // window.location.reload();
    }

    const handleDelete = async (groupID : number) => {
        const requestOptions = {
            method: 'DELETE',
            credentials: 'include' as RequestCredentials
        }
        await fetch(`http://localhost:8080/join/${groupID}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        
    }

    useEffect(() => {
        handleFetch();
    }, []);

    // useEffect(() => {
    //     getUserAndGroupNames();
    // }, []);

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
                        <div className="group_name">Request ID</div>
                        <div className="group_description">User ID</div>
                        <div className="group_category">Group ID</div>
                        <div className="group_button">Approve</div>
                        <div className="group_button">Reject</div>
                        <div className="group_button">Delete</div>
                    </div>
                    {requests.map((request, id) => {
                        return (
                            <div className="group" key={id}>
                                {/* <div className="group_description">{request.userName}</div>
                                <div className="group_category">{request.groupName}</div> */}
                                {/* <div className="group_name">{group.group_name}</div> */}
                                <div className="group_name">{request.id}</div>
                                <div className="group_description">{request.user_id}</div>
                                <div className="group_category">{request.group_id}</div>
                                <div className="group_button">
                                    <button onClick={() => handleApprove(request.group_id)}>Approve</button>
                                </div>
                                <div className="group_button">
                                    <button onClick={() => handleReject(request.group_id)}>Reject</button>
                                </div>
                                <div className="group_button">
                                    <button onClick={() => handleDelete(request.group_id)}>Delete</button>
                                </div>
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