import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Channels from "./Channels";
import Members from "./Members";
import Messages from "./Messages";
import "../group.css";
import GroupDetails from "./GroupDetails";
import { GroupDetails as GroupDetailsType } from "../../../../types/group/types";

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
        <div className="room-wrapper">
            <div className="room-left-col">
                {/* <Channels /> */}
                <GroupDetails group={group}/>
            </div>
            <div className="room-middle-col">
                <Messages />
            </div>
            <div className="room-right-col">
                <Members />
            </div>
        </div>
        // <div>
        //     Group here.
        //     {/* <div>{group.id}</div> */}
        //     <div>{group?.group_name}</div>
        //     <div>{group?.group_description}</div>
        //     <div>{group?.category}</div>
        //     <div>{group?.owner_id}</div>

        //     Users here.
        //     {
        //         users?.map(user => {
        //             return <div>{user.first_name}</div>
        //         })
        //     }
        // </div>
    )
}

export default Group;