import React, { useEffect, useState } from "react";
import { Button, Table, Container, Row, Col, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getRequestOptions, postRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import Navbar from "../../components/navbar/Navbar";
import CreateGroup from "../groups/CreateGroup";
import "./match.css";
import { MatchSetting as MatchSettingType } from "../../../types/match/types";
import GeneralForm from "../../components/form/GeneralForm";
import { MultiSelect } from "react-multi-select-component";

const Match = () => {
    const mbtiList = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"];
    const hobbies = [
        { label: "Gaming", value: "GAMING" },
        { label: "Singing", value: "SINGING" },
        { label: "Dancing", value: "DANCING" },
        { label: "Music", value: "MUSIC" },
        { label: "Sports", value: "SPORTS" },
        { label: "Outdoor", value: "OUTDOOR" },
        { label: "Book", value: "BOOK" },
        { label: "Anime", value: "ANIME" },
        { label: "Movies", value: "MOVIES" },
        { label: "TV", value: "TV" },
        { label: "Art", value: "ART" },
        { label: "Study", value: "STUDY" }
    ];
    const [errMsg, setErrMsg] = useState("");
    const [setting, setSetting] = useState<MatchSettingType>();
    
    const [preference, setPreference] = useState("");
    const [mbti, setMbti] = useState("");
    // hobbies selected
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

    const handleChangeFaculty = (e: any) => {
        const value = e.target.options[e.target.selectedIndex].value;
        setPreference(value);
    }

    const handleChangeMBTI = (e: any) => {
        const value = e.target.options[e.target.selectedIndex].value;
        setMbti(value);
    }

    const getSetting = async () => {
        await fetch(config.API_URL + "/setting", getRequestOptions)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setSetting(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const postSetting = async (e: any) => {
        e.preventDefault();
        const requestOptions = {
            ...postRequestOptions,
            body: JSON.stringify({
                "faculty_preference": preference,
                "hobbies": selectedOptions.map(item => item.value),
                "mbti": mbti
            })
        }
        await fetch(config.API_URL + "/setting", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        window.location.reload();
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
                        <select
                            className="match_hobby_dropdown_toggle"
                            onChange={handleChangeFaculty}
                            defaultValue={"DEFAULT"}
                            >
                            <option value={"DEFAULT"} disabled>Enter your faculty preference...</option>
                            <option value={"MIX"}>Mixed</option>
                            <option value={"SAME"}>Same</option>
                            <option value={"NONE"}>No Preference</option>
                        </select>
                        <select
                            className="match_hobby_dropdown_toggle"
                            onChange={handleChangeMBTI}
                            defaultValue={"DEFAULT"}
                            >
                            <option value={"DEFAULT"} disabled>Enter your MBTI type...</option>
                            {
                                mbtiList.map((mbti, key) => {
                                    return (
                                        <option key={key} value={mbti}>{mbti}</option>
                                    )
                                })
                            }
                        </select>
                        <MultiSelect
                            options={hobbies}
                            value={selectedOptions}
                            onChange={setSelectedOptions}
                            labelledBy="Select"
                        />
                        <br/>
                        <Button onClick={postSetting} className="match_button">Submit</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Match;