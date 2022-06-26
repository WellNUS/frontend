import React, { useEffect, useState } from "react";
import { Button, Table, Container, Row, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getRequestOptions, postRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import Navbar from "../../components/navbar/Navbar";
import CreateGroup from "../groups/CreateGroup";
import "./match.css";
import { MatchSetting as MatchSettingType } from "../../../types/match/types";
import GeneralForm from "../../components/form/GeneralForm";

const Match = () => {

    const [errMsg, setErrMsg] = useState("");
    const [setting, setSetting] = useState<MatchSettingType>();
    const [selected, setSelected] = useState<any[]>([]);
    const [showHobbies, setShowHobbies] = useState<any[]>([]);

    const handleChange = (e: any) => {
        e.preventDefault();
        const value = Array.from(e.target.selectedOptions, (option: any) => option.value);
        const set = new Set([...selected, ...value]);
        const uniqueArray = Array.from(set);
        setSelected(uniqueArray);
        setShowHobbies(uniqueArray.map(hobby => {
            return {"hobby": hobby, "show": true};
        }));
        console.log(selected);
    }

    const getSetting = async () => {
        await fetch(config.API_URL + "/setting", getRequestOptions)
            .then(response => response.json())
            .then(data => {
                setSetting(data)
            });
    }

    const postSetting = async (e: any) => {
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(selected);
        e.preventDefault();
        const requestOptions = {
            ...postRequestOptions,
            body: JSON.stringify({
                "faculty_preference": e.target[0].value,
                "hobbies": selected,
                "mbti": e.target[1].value
            })
        }
        await fetch(config.API_URL + "/setting", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    const removeHobby = (hobbyInput: string) => {
        selected.filter(hobby => hobby !== hobbyInput);
        showHobbies.map(hobbyObject => {
            hobbyObject.show = false;
        })
    }

    useEffect(() => {
        getSetting();
    }, []);

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
                        <div>
                            <div className="match_field">Faculty Preference:</div> 
                            <div className="match_field_value">{setting?.faculty_preference}</div>
                        </div>
                        <div>
                            <div className="match_field">MBTI Type:</div>
                            <div className="match_field_value">{setting?.mbti}</div>
                        </div>
                        <div>
                            <div className="match_field">Hobbies:</div>
                            <div className="match_field_values_grid">
                                {
                                    setting?.hobbies?.map((hobby, key) => {
                                        return (
                                            <div key={key} className="match_field_value">
                                                {hobby}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col className="match_col_right">
                        <div className="match_field">Update your preferences:</div>
                        <div className="match_selected_wrapper">
                            {selected.map((hobby, key) => {
                                return (
                                    <div key={key}>
                                        <Button 
                                            hidden={!showHobbies.find(hobbyObject => hobbyObject.hobby === hobby).show} 
                                            onClick={() => removeHobby(hobby)}
                                            className="match_button">{hobby}</Button>
                                    </div>
                                )
                            })}
                        </div>
                        <Dropdown className="match_hobby_dropdown">
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="match_hobby_dropdown_toggle">
                                Select your hobbies...
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="match_hobby_dropdown_menu">
                                <select 
                                className="match_hobby_dropdown_menu_select"
                                multiple={true} 
                                onChange={handleChange}
                                >
                                    <option value={"GAMING"}>Gaming</option>
                                    <option value={"SINGING"}>Singing</option>
                                    <option value={"DANCING"}>Dancing</option>
                                </select>
                            </Dropdown.Menu>
                        </Dropdown>
                        <form onSubmit={postSetting} className="match_setting_form">
                            <input type="text" placeholder="Enter faculty preference..." />
                            <input type="text" placeholder="Enter MBTI type..." />
                            <Button type="submit" className="match_button">Submit</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Match;