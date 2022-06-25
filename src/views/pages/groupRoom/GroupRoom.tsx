import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Members from "./Members";
import "../groups/group.css";
import GroupDetails from "./GroupDetails";
import { GroupDetails as GroupDetailsType } from "../../../types/group/types";
import Navbar from "../../components/navbar/Navbar";
import Chat from "../../components/chat/Chat";
import { getRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";

const Group = () => {
    const [group, setGroup] = useState<GroupDetailsType>();
    const [users, setUsers] = useState<any[]>([]);
    const { group_id } = useParams();
    
    const handleFetch = async () => {
        await fetch(config.API_URL + "/group/" + group_id, getRequestOptions)
            .then(response => response.json())
            .then(data => {
                setGroup(data.group);
                setUsers(data.users);
            });
    }

    useEffect(() => {
        handleFetch();
    }, []);
    
    return (
        <div>
            <Navbar hideTop={true}/>
            <div className="room-wrapper">
                <div className="room-left-col">
                    <GroupDetails group={group}/>
                    <Members group_id={group_id} users={users}/>
                </div>
                <div className="room-middle-col">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}

export default Group;