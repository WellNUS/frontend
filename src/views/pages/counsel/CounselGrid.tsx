import "./counselGrid.css";
import { FiUserCheck, FiUserPlus, FiUserX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { config } from "../../../config";
import { getRequestOptions } from "../../../api/fetch/requestOptions";

const CounselGrid = () => {

    // { id, first_name, last_name, gender, faculty, email, user_role, password, password_hash }
    const [counsellors, setCounsellors] = useState([{
        setting: {
            intro: "",
            topics: [],
            user_id: ""
        },
        user: {
            first_name: "",
            last_name: "",
            user_role: "",
            gender: ""
        }
        // first_name: "Minerva",
        // last_name: "McGonagall",
        // gender: "F",
        // user_role: "COUNSELLOR",
        // available: false,
        // specialities: ['Anxiety', 'OffMyChest', 'SelfHarm']
    }]);

    const getCounsellors = async () => {
        await fetch(config.API_URL + "/provider", getRequestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCounsellors(data);
            });
    }

    useEffect(() => {
        getCounsellors();
    }, []);

    // const counsellors = [
        // {
        //     first_name: "Minerva",
        //     last_name: "McGonagall",
        //     gender: "F",
        //     user_role: "COUNSELLOR",
        //     available: false,
        //     specialities: ['Anxiety', 'OffMyChest', 'SelfHarm']
        // },
    //     {
    //         first_name: "Albus",
    //         last_name: "Dumbledore",
    //         gender: "M",
    //         user_role: "VOLUNTEER",
    //         available: true,
    //         specialities: ['Anxiety', 'OffMyChest', 'SelfHarm', 'Depression', 'SelfEsteem', 'Stress', 'Casual', 'Therapy', 'BadHabits', 'Rehabilitation', ]
    //     },
    //     {
    //         first_name: "Albus",
    //         last_name: "Dumbledore",
    //         gender: "M",
    //         user_role: "VOLUNTEER",
    //         available: true,
    //         specialities: ['Therapy', 'BadHabits', 'Rehabilitation']
    //     },        {
    //         first_name: "Albus",
    //         last_name: "Dumbledore",
    //         gender: "M",
    //         user_role: "VOLUNTEER",
    //         available: true,
    //         specialities: ['Therapy', 'BadHabits', 'Rehabilitation']
    //     },        {
    //         first_name: "Albus",
    //         last_name: "Dumbledore",
    //         gender: "M",
    //         user_role: "VOLUNTEER",
    //         available: true,
    //         specialities: ['Therapy', 'BadHabits', 'Rehabilitation']
    //     },
    // ]

    return (
        <div className="layout_content_container_grid">
            {
                counsellors &&
                counsellors.map((counsellor, index) => {
                    return (
                        <div key={index} className="counsellor_card">
                            <div className="counsellor_card_heading">
                                <div className="counsellor_name">{
                                    // counsellor.setting.available 
                                    true
                                    ? <FiUserCheck /> : <FiUserX />} {counsellor.user.first_name} {counsellor.user.last_name}</div>
                                <div className={counsellor.user.gender === "M" ? "counsellor_male" : "counsellor_female"}>{counsellor.user.gender}</div>
                            </div>
                            <div className={counsellor.user.user_role === "COUNSELLOR" ? "counsellor_counsellor": "counsellor_volunteer"}>{counsellor.user.user_role}</div>
                            <div>{counsellor.setting.intro}</div>
                            <div className="counsellor_specialities">
                                {
                                    counsellor.setting.topics.map((topic, i) => {
                                        return (
                                            <div key={i} className="counsellor_speciality">
                                                {topic}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CounselGrid;