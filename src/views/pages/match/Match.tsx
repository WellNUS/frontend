import React, { useEffect, useState } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import Navbar from "../../components/navbar/Navbar";
import CreateGroup from "../groups/CreateGroup";
import "./match.css";

const Match = () => {

    const [setting, setSetting] = useState({faculty_preference: ""});

    // const getSetting = async () => {
    //     await fetch(config.API_URL + "/setting", getRequestOptions)
    //         .then(response => response.json())
    //         .then(data => setSetting(data));
    // }

    // useEffect(() => {
    //     getSetting();
    // }, []);

    return (
        <div>
            <Navbar hideTop={false}/>
            <div className="group_heading_row">
                <div className="group_title">Match</div>
                <div className="group_heading_buttons">
                    {/* <Link to="/join">            
                        <Button variant="primary" className="group_heading_button">Join Group</Button>
                    </Link> */}
                </div>
            </div>
            <Container fluid>
                <Row>
                    <Col className="match_col_left" lg={5}>
                        <div>Faculty Preference: {setting.faculty_preference}</div>
                    </Col>
                    <Col className="match_col_right">
                        Col 2
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Match;