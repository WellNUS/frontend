import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import profile from "../../../static/icon/navIcons/profile.png";
import "./profile.css";

const ProfileModal = () => {
    const { details } = useSelector((state: any) => state.user);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow} className="profile_button">
            <div className="profile">
                <img src={profile} alt="Profile" />
                <p>{details.first_name} {details.last_name}</p>
            </div>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="profile_name">{details.first_name} {details.last_name}</div>
            <div className="profile_detail">Gender: {details.gender === "F" ? "Female" : "Male"}</div>
            <div className="profile_detail">Faculty: {details.faculty}</div>
            <div className="profile_detail">Email: {details.email}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
export default ProfileModal;


// const Profile = () => {
//     const { loggedIn, details } = useSelector((state: any) => state.user);

//     return (
//         <div className="profile_container">
            // <div className="profile_name">{details.first_name} {details.last_name}</div>
            // <div className="profile_detail">Gender: {details.gender === "F" ? "Female" : "Male"}</div>
            // <div className="profile_detail">Faculty: {details.faculty}</div>
            // <div className="profile_detail">Email: {details.email}</div>
//         </div>
//     )
// }

// export default Profile;