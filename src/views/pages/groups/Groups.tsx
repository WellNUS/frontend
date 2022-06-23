import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import CreateGroup from "./CreateGroup";
import "./group.css";
import JoinGroup from "./JoinGroup";

const groupsTestData = [
    { group_name: "Group Asgard", group_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group B", group_description: "Lorem dolor sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Social" },
    { group_name: "Group Circe", group_description: "Lorem ipsum sit amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group D", group_description: "Lorem ipsum dolor amet consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
    { group_name: "Group E", group_description: "Lorem ipsum dolor sit consectetur adipisicing elit. Corrupti, vel.", category: "Counselling" },
];

const Group = () => {
    const [groups, setGroups] = useState<any[]>([]);

    const handleFetch = async () => {
        await fetch("http://localhost:8080/group", { 
            method: 'GET',
            credentials: 'include' as RequestCredentials,
        })
            .then(response => {
                // console.log(response.json())
                return response.json()
            })
            .then(data => {
                setGroups(data)
            });
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div>
            <Navbar hideTop={false}/>
            <div className="group_heading_row">
                <div className="group_title">Groups</div>
                <div className="group_heading_buttons">
                    <Link to="/join">            
                        <Button variant="primary" className="group_heading_button">Join Group</Button>
                    </Link>
                    <CreateGroup />
                </div>
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
                            <div className="group_name">{group.group_name}</div>
                            <div className="group_description">{group.group_description}</div>
                            <div className="group_category">{group.category}</div>
                            <div className="group_button">
                                <Link to={`/groups/${group.id}`}>
                                    <Button className="group_view_button">View</Button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Group;