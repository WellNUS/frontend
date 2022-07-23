import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { postRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import GeneralForm from "../../components/form/GeneralForm";
import "./counselGrid.css";

const BookingModal = ({ provider_id } : { provider_id: string }) => {
    const [errMsg, setErrMsg] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const getBooking = async () => {
    //     await fetch(config.API_URL + "/booking/")
    // }

    const [details, setDetails] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const handleBooking = async (provider_id: string) => {
        const requestOptions = {
            ...postRequestOptions,
            body: JSON.stringify({
                provider_id: provider_id,
                details: details,
                start_time: "2006-01-02T15:04:05+07:00",
                end_time: "2006-01-02T15:04:05+07:00"
            })
        }
        await fetch(config.API_URL + "/booking", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            {/* Request Counselling Session */}
            <Button variant="primary" onClick={handleShow} className="bookingModal_request_button">
                Request Session
            </Button>
            {/* <Button onClick={() => handleBooking(counsellor.user.id)}>Request Session</Button> */}
            <Modal show={show} onHide={handleClose} className="create_group_modal">
                <Modal.Header closeButton>
                <Modal.Title>Request for On-Demand Counselling</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your booking request will be sent to the provider you have chosen. There will be no formation of groups upon
                    approval by the chosen provider. To request for group formation with a counsellor, go to the COUNSEL page and
                    click on Request Group Counsellor.
                    <br /><br />
                    <Form>
                        <Form.Group className="mb-3" onChange={(e: any) => setDetails(e.target.value)}>
                            <Form.Label>Details</Form.Label>
                            <Form.Control type="text" placeholder="Enter details..." />
                        </Form.Group>
                    </Form>
                    {/* TODO: Add start and end date here */}
                    <Button onClick={() => handleBooking(provider_id)}>Send Request</Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BookingModal;