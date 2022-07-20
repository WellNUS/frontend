import "./counselGrid.css";
import { FiUserCheck, FiUserPlus, FiUserX } from "react-icons/fi";

const CounselGrid = () => {

    // { id, first_name, last_name, gender, faculty, email, user_role, password, password_hash }
    const counsellors = [
        {
            first_name: "Minerva",
            last_name: "McGonagall",
            gender: "F",
            user_role: "COUNSELLOR",
            available: false,
            specialities: ['Anxiety', 'OffMyChest', 'SelfHarm']
        },
        {
            first_name: "Albus",
            last_name: "Dumbledore",
            gender: "M",
            user_role: "VOLUNTEER",
            available: true,
            specialities: ['Anxiety', 'OffMyChest', 'SelfHarm', 'Depression', 'SelfEsteem', 'Stress', 'Casual', 'Therapy', 'BadHabits', 'Rehabilitation', ]
        },
        {
            first_name: "Albus",
            last_name: "Dumbledore",
            gender: "M",
            user_role: "VOLUNTEER",
            available: true,
            specialities: ['Therapy', 'BadHabits', 'Rehabilitation']
        },        {
            first_name: "Albus",
            last_name: "Dumbledore",
            gender: "M",
            user_role: "VOLUNTEER",
            available: true,
            specialities: ['Therapy', 'BadHabits', 'Rehabilitation']
        },        {
            first_name: "Albus",
            last_name: "Dumbledore",
            gender: "M",
            user_role: "VOLUNTEER",
            available: true,
            specialities: ['Therapy', 'BadHabits', 'Rehabilitation']
        },
    ]

    return (
        <div className="layout_content_container_grid">
            {
                counsellors &&
                counsellors.map((counsellor, index) => {
                    return (
                        <div key={index} className="counsellor_card">
                            <div className="counsellor_card_heading">
                                <div className="counsellor_name">{counsellor.available ? <FiUserCheck /> : <FiUserX />} {counsellor.first_name} {counsellor.last_name}</div>
                                <div className={counsellor.gender === "M" ? "counsellor_male" : "counsellor_female"}>{counsellor.gender}</div>
                            </div>
                            <div className={counsellor.user_role === "COUNSELLOR" ? "counsellor_counsellor": "counsellor_volunteer"}>{counsellor.user_role}</div>
                            <div className="counsellor_specialities">
                                {
                                    counsellor.specialities.map((speciality, i) => {
                                        return (
                                            <div key={i} className="counsellor_speciality">
                                                {speciality}
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