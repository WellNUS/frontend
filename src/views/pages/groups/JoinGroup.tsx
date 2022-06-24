import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import userSlice from "../../../state/slices/user";
import { Button, Modal, Table } from "react-bootstrap";
import exit from "../../../static/icon/navIcons/exit.png";
import GeneralForm from "../../components/form/GeneralForm";
import "./group.css";
import Navbar from "../../components/navbar/Navbar";

const JoinGroup = () => {
    const [requests, setRequests] = useState<any[]>([]);
    const [errMsg, setErrMsg] = useState("");

    const handleFetch = async () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include' as RequestCredentials,
        }
        await fetch("http://localhost:8080/join", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRequests(data);
            });
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
            .then(data => {
                console.log(data);
            });
        window.location.reload();
    }

    const handleApprove = async (requestID : number) => {
        const requestOptions = {
            method: 'PATCH',
            credentials: 'include' as RequestCredentials,
            body: JSON.stringify({
                "approve": true
            })
        }
        await fetch(`http://localhost:8080/join/${requestID}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        // window.location.reload();
    }

    const handleReject = async (requestID : number) => {
        const requestOptions = {
            method: 'PATCH',
            credentials: 'include' as RequestCredentials,
            body: JSON.stringify({
                "approve": false
            })
        }
        await fetch(`http://localhost:8080/join/${requestID}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        // window.location.reload();
    }

    const handleDelete = async (requestID : string) => {
        const requestOptions = {
            method: 'DELETE',
            credentials: 'include' as RequestCredentials
        }
        await fetch(`http://localhost:8080/join/${requestID}`, requestOptions)
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
                <Table className="joingroup_request_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Group#ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, id) => {
                            return (
                                <tr key={id}>
                                    <td>{request.join_request.id}</td>
                                    <td>{request.user.first_name}</td>
                                    <td>{request.group.group_name}#{request.join_request.group_id}</td>
                                    <td className="joingroup_buttons">
                                        <Button onClick={() => handleApprove(request.join_request.id)} className="joingroup_button">Approve</Button>
                                        <Button onClick={() => handleReject(request.join_request.id)} className="joingroup_button">Reject</Button>
                                        <Button onClick={() => handleDelete(request.join_request.id)} className="joingroup_button">Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default JoinGroup;