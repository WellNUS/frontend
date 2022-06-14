import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./group.css";

const groupsTestData = [
    { group_name: "Group A", group_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group B", group_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group C", group_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group D", group_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group E", group_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
];

const Group = () => {
    return (
        <div>
            <Navbar />
            <div className="group_heading_row">
                <div className="group_title">Groups</div>
                <button>Create Group</button>
            </div>
            <div className="groups">
                {groupsTestData.map((group) => {
                    return (
                        <div className="group">
                            <div>{group.group_name}</div>
                            <div>{group.group_description}</div>
                            <div>{group.category}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Group;