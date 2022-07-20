import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { useSelector } from "react-redux";
import GeneralForm from "../../components/form/GeneralForm";
import "./counselModal.css";

const availableTopics = [
    { label: "Anxiety", value: "Anxiety" },
    { label: "Off My Chest", value: "OffMyChest" },
    { label: "Self Harm", value: "SelfHarm" },
    { label: "Depression", value: "Depression" },
    { label: "Self Esteem", value: "SelfEsteem" },
    { label: "Stress", value: "Stress" },
    { label: "Casual", value: "Casual" },
    { label: "Therapy", value: "Therapy" },
    { label: "Bad Habits", value: "BadHabits" },
    { label: "Rehabilitation", value: "Rehabilitation" },
];

const CounselModal = () => {
    
    const { details, loggedIn } = useSelector((state: any) => state.user);
    // CounselRequest = { user_id, details, topics[], last_updated }
    const [counselRequest, setCounselRequest] = useState({ user_id: details.id, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ab.", topics: [
        'Anxiety', 'OffMyChest', 'SelfHarm', 'Depression', 'SelfEsteem', 'Stress', 'Casual', 'Therapy', 'BadHabits', 'Rehabilitation'
    ], last_updated: "1/1/2022" });

    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

    const [errMsg, setErrMsg] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleJoin = async (e: any) => {
        // e.preventDefault();
        // const requestOptions = {
        //     ...postRequestOptions,
        //     body: JSON.stringify({
        //         "group_id": parseInt(e.target[0].value, 10),
        //     })
        // }
        // await fetch(config.API_URL + "/join", requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     });
        // window.location.reload();
    }

    const getCounselRequest = async () => {

    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="layout_heading_button">
                Request Counsellor
            </Button>
            <Modal show={show} onHide={handleClose} className="create_group_modal">
                <Modal.Header closeButton>
                <Modal.Title>Counsel Request Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* Request Body : { details, topics[] } */}
                    <div>
                        <b>Details</b><br />
                        {counselRequest.details}
                        <br /><br />
                        <b>Last Updated</b><br />
                        {counselRequest.last_updated}
                    </div>
                    <hr />
                        <b>Topics</b><br />
                    <div className="counselRequest_topics">
                        {
                            counselRequest.topics.map((topic, id) => {
                                return (
                                    <div key={id} className="counselRequest_topic">
                                        {topic}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br />
                    <hr />
                    <Form>
                        <Form.Group className="mb-3 counselModal_textarea">
                            <Form.Control as="textarea" rows={3} placeholder="Enter some details for the counsellor to know..."/>
                        </Form.Group>
                    </Form>
                    <MultiSelect
                            options={availableTopics}
                            value={selectedOptions}
                            onChange={setSelectedOptions}
                            labelledBy="Select"
                            hasSelectAll={false}
                            className=""
                    />
                    <div className="centre_div">
                        <button className="modal_btn">Set Request</button>
                    </div>
                    <div className="centre_div">
                        <Button className="modal_btn">Clear Request</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CounselModal;