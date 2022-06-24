import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Channels from "./Channels";
import Members from "./Members";
import Messages from "./Messages";
import "../groups/group.css";
import GroupDetails from "./GroupDetails";
import { GroupDetails as GroupDetailsType } from "../../../types/group/types";
import Navbar from "../../components/navbar/Navbar";
import Chat from "../chat/Chat";

const Group = () => {
    const [group, setGroup] = useState<GroupDetailsType>();
    const [users, setUsers] = useState<any[]>();
    const { group_id } = useParams();

    const handleFetch = async () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include' as RequestCredentials,
        }
        await fetch(`http://localhost:8080/group/${group_id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
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
                {/* <Channels /> */}
                <GroupDetails group={group}/>
                <Members />
            </div>
            <div className="room-middle-col">
                {/* <Messages /> */}
                <Chat />
            </div>
            {/* <div className="room-right-col">
                <Members />
            </div> */}
        </div>
        </div>
    )
}

export default Group;