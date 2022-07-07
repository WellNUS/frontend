import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import GeneralForm from "../../components/form/GeneralForm";
import "../groups/group.css";
import Navbar from "../../components/navbar/Navbar";
import { abortableGetRequestOptions, deleteRequestOptions, getRequestOptions, patchRequestOptions, postRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import JoinModal from "./JoinModal";
import { useSelector } from "react-redux";
import "./join.css";
import Match from "../match/Match";

const JoinGroup = () => {
    const { details } = useSelector((state: any) => state.user);
    const [requests, setRequests] = useState<any[]>([]);
    const [errMsg, setErrMsg] = useState("");

    const handleFetch = (): AbortController => {
        const abortController = new AbortController();
        fetch(config.API_URL + "/join", abortableGetRequestOptions(abortController.signal))
            .then(response => response.json())
            .then(data => {
                setRequests(data);
            });
        return abortController;
    }

    const handleJoin = async (e: any) => {
        e.preventDefault();
        const requestOptions = {
            ...postRequestOptions,
            body: JSON.stringify({
                "group_id": parseInt(e.target[0].value, 10),
            })
        }
        await fetch(config.API_URL + "/join", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        window.location.reload();
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
            <div className="layout_heading_container">
                <div className="layout_heading_title">Meet new people!</div>
                <div className="layout_heading_buttons">
                    <JoinModal />
                </div>
            </div>
            <div className="layout_content_container_rows">
                <div className="join_content_container_left">
                    <Match />
                </div>
                <div className="join_content_container_right">
                    <h2>Group Requests</h2>
                    <Table className="" hover>
                        <thead>
                            <tr className="">
                                <th>Request ID</th>
                                <th>Applicant</th>
                                <th>Group#ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request, id) => {
                                return (
                                    <tr key={id} className="">
                                        <td>{request.join_request.id}</td>
                                        {
                                            request.user.id === details.id
                                            ? <td>You</td>
                                            : <td>{request.user.first_name}</td>
                                        }
                                        <td>{request.group.group_name}#{request.join_request.group_id}</td>
                                        <td className="request_action_buttons">
                                            {
                                                request.user.email === details.email
                                                ? <Button onClick={() => handleDelete(request.join_request.id)} className="request_delete">Delete</Button>
                                                : <div>
                                                    <Button onClick={() => handleApprove(request.join_request.id)} className="request_approve">Approve</Button>
                                                    <Button onClick={() => handleReject(request.join_request.id)} className="request_reject">Reject</Button>
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
        </div>
    )
}

export default JoinGroup;