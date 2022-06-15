import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import userSlice from "../../../state/slices/user";
import { Button, Modal } from "react-bootstrap";
import exit from "../../../static/icon/navIcons/exit.png";

// export const Logout = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const user = useSelector((state: any) => state);
//     const logout = userSlice.actions.logout;
//     dispatch(logout(user));
//     navigate("/");
// }

const LogoutModal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = async () => {
        // await fetch("http://localhost:8080/session", 
        //     { method: 'DELETE' })
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        const logout = userSlice.actions.logout;
        dispatch(logout(user));
        navigate("/");
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="logout_button">
                <img src={exit} alt="exit"/>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Click on the Log out button below.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleLogout}>
                        Log out
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LogoutModal;