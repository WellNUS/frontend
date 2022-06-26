import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import GeneralForm from "../../components/form/GeneralForm";
import "../groups/group.css";
import Navbar from "../../components/navbar/Navbar";
import { abortableGetRequestOptions, deleteRequestOptions, getRequestOptions, patchRequestOptions, postRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import JoinModal from "./JoinModal";
import { useSelector } from "react-redux";

const JoinGroup = () => {
    const { details } = useSelector((state: any) => state.user);
    const [requests, setRequests] = useState<any[]>([]);
    const [errMsg, setErrMsg] = useState("");

    const handleFetch = (): AbortController => {
        const abortController = new AbortController();
        fetch(config.API_URL + "/join", abortableGetRequestOptions(abortController.signal))
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRequests(data);
            });
        return abortController;
    }

    const handleApprove = async (requestID : number) => {
        const requestOptions = {
            ...patchRequestOptions,
            body: JSON.stringify({
                "approve": true
            })
        }
        await fetch(config.API_URL + "/join/" + requestID, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        window.location.reload();
    }

    const handleReject = async (requestID : number) => {
        const requestOptions = {
            ...patchRequestOptions,
            body: JSON.stringify({
                "approve": false
            })
        }
        await fetch(config.API_URL + "/join/" + requestID, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        window.location.reload();
    }

    const handleDelete = async (requestID : string) => {
        await fetch(config.API_URL + "/join/" + requestID, deleteRequestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        window.location.reload();
    }

    useEffect(() => {
        const abortController = handleFetch();
        return () => {
            abortController.abort();
        }
    }, []);

    return (
        <div>
            <Navbar hideTop={false}/>
            <div className="group_heading_row">
                <div className="group_title">Join a group today!</div>
                <div className="group_heading_buttons">
                    <JoinModal />
                </div>
            </div>
            <div className="groups">
                <Table className="joingroup_request_table">
                    <thead>
                        <tr className="joingroup_request_table_head">
                            <th>ID</th>
                            <th>User</th>
                            <th>Group#ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, id) => {
                            return (
                                <tr key={id} className="joingroup_request_table_row">
                                    <td>{request.join_request.id}</td>
                                    <td>{request.user.first_name}</td>
                                    <td>{request.group.group_name}#{request.join_request.group_id}</td>
                                    <td className="joingroup_buttons">
                                        {
                                            request.user.email === details.email
                                            ? <Button onClick={() => handleDelete(request.join_request.id)} className="joingroup_button delete_button">Delete</Button>
                                            : <div>
                                                <Button onClick={() => handleApprove(request.join_request.id)} className="joingroup_button approve_button">Approve</Button>
                                                <Button onClick={() => handleReject(request.join_request.id)} className="joingroup_button reject_button">Reject</Button>
                                            </div>
                                        }
                                        
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