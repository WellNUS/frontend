import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { postRequestOptions } from "../../../../api/fetch/requestOptions";
import { config } from "../../../../config";
import { Applicant, Booking } from "../types";

const ApplicantProfile = ({ applicant, booking } : { applicant: Applicant, booking: Booking }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleApprove = async () => {
        const requestOptions = {
            ...postRequestOptions,
            body: JSON.stringify({
                "approve": true,
                "booking": booking
            })
        }
        await fetch(config.API_URL + "/booking/" + booking?.id, requestOptions)
            .then(response => response.json())
            .then(data => window.location.reload())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Button onClick={handleShow} className="bookingRequest_button">View Applicant</Button>
            <Modal show={show} onHide={handleClose} className="create_group_modal">
                <Modal.Header closeButton>
                <Modal.Title>Applicant Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>{booking?.details}</div>
                        <hr />
                        <div><b>Name: </b>{applicant?.user.first_name} {applicant?.user.last_name}</div>
                        <div><b>Email: </b>{applicant?.user.email}</div>
                        <div><b>Faculty: </b>{applicant?.user.faculty}</div>
                        <div><b>Gender: </b>{applicant?.user.gender === "M" ? "Male" : "Female"}</div>
                        <div>Once you approve the applicant's booking request, you will be added into an automatically-generated group with that applicant.</div>
                        <div className="button-centralised">
                            <Button className="modal_btn" onClick={handleApprove}>
                                Approve
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ApplicantProfile;