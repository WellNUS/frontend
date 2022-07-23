import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Applicant, Booking } from "./types";

const ApplicantProfile = ({ applicant, booking } : { applicant: Applicant, booking: Booking }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow} className="bookingRequest_button">View Applicant</Button>
            <Modal show={show} onHide={handleClose} className="create_group_modal">
                <Modal.Header closeButton>
                <Modal.Title>Applicant Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>{applicant?.user.first_name} {applicant?.user.last_name}</div>
                        <div>{applicant?.user.email}</div>
                        <div>{applicant?.user.faculty}</div>
                        <div>{applicant?.user.gender === "M" ? "Male" : "Female"}</div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ApplicantProfile;