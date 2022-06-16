import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import CreateGroup from "./CreateGroup";
import "./group.css";

const groupsTestData = [
    { group_name: "Group Asgard", group_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group B", group_description: "Lorem dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Social" },
    { group_name: "Group Circe", group_description: "Lorem ipsum sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group D", group_description: "Lorem ipsum dolor amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group E", group_description: "Lorem ipsum dolor sit consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
];

const Group = () => {
    const [groups, setGroups] = useState([]);

    const handleFetch = async () => {
        // const response = await fetch("http://localhost:8080/group", { method: 'GET'});
        // const data = response.json();
        // return data;
        await fetch("http://localhost:8080/group", { method: 'GET' })
            .then(response => {
                // console.log(response.json())
                return response.json()
            })
            .then(data => {
                console.log(data)
                setGroups(data)
            });
    }

    const handleCreate = async () => {
        // const requestOptions = {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         "group_name": group_
        //     })
        // }
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="group_heading_row">
                <div className="group_title">Groups</div>
                {/* <button className="group_create_button" onClick={handleCreate}>Create Group</button> */}
                <CreateGroup />
            </div>
            <div className="groups">
                <div className="group table_head">
                    <div className="group_name">Your Groups</div>
                    <div className="group_description">Description</div>
                    <div className="group_category">Categories</div>
                    <div className="group_button">Action</div>
                </div>
                {groups.map((group, id) => {
                    return (
                        <div className="group" key={id}>
                            {/* <div className="group_name">{group.group_name}</div>
                            <div className="group_description">{group.group_description}</div>
                            <div className="group_category">{group.category}</div>
                            <div className="group_button"><button>View</button></div> */}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Group;