import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getRequestOptions, postRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";

const CounselRequests = () => {

    const { details } = useSelector((state: any) => state.user);
    const [requests, setRequests] = useState<any[]>([]);

    const handleDelete = (x: any) => {

    }

    const handleApprove = async (user_id: string) => {
        await fetch(config.API_URL + "/counsel/" + user_id, postRequestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    const handleReject = (x: any) => {

    }

    const getCounselRequests = async () => {
        await fetch(config.API_URL + "/counsel", getRequestOptions)
            .then(response => response.json())
            .then(data => {
                setRequests(data);
                // console.log(data);
            })
    }

    useEffect(() => {
        getCounselRequests();
    }, []);

    return (
        <div>
            <h2>Counsel Requests</h2>
            <Table className="joinGroup_table" size="lg" width={100} hover>
                <thead>
                    <tr className="">
                        {/* <th className="display-none">Request ID</th> */}
                        <th>Applicant</th>
                        <th>Details</th>
                        <th>Topics</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request, id) => {
                        console.log(request)
                        return (
                            <tr key={id} className="">
                                {/* <td className="display-none">{request.join_request.id}</td> */}
                                {
                                    request.user_id === details.id
                                    ? <td>You</td>
                                    : <td>{request.nickname}</td>
                                }
                                <td>{request.details}</td>
                                <td>{request.topics}</td>
                                <td className="request_action_buttons">
                                    {
                                        <Button onClick={() => handleApprove(request.user_id)} className="request_approve">Accept</Button>
                                        // request.user_id === details.id
                                        // ? <Button onClick={() => handleDelete(request.user_id)} className="request_delete">Delete</Button>
                                        // : <div>
                                        //     <Button onClick={() => handleApprove(request.user_id)} className="request_approve">Accept</Button>
                                        //     <Button onClick={() => handleReject(request.user_id)} className="request_reject">Reject</Button>
                                        // </div>
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default CounselRequests;