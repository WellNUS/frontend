import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Members from "./Members";
import "../groups/group.css";
import GroupDetails from "./GroupDetails";
import { GroupDetails as GroupDetailsType } from "../../../types/group/types";
import Navbar from "../../components/navbar/Navbar";
import Chat from "../../components/chat/Chat";
import { abortableGetRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import { WebSocketUnit } from "../../../api/websocketunit/websocketunit";

const Group = () => {
    const { group_id } = useParams();
    const [group, setGroup] = useState<GroupDetailsType>();
    const [socket, setSocket] = useState<WebSocketUnit>();

    useEffect(() => {
        const abortController = new AbortController();
        if (group_id === undefined) {
            console.error("group_id param is undefined");
            return;
        }
        const groupId = parseInt(group_id, 10);
        if (groupId === NaN) {
            console.error("group_id param is not a number");
            return;
        }
        
        setSocket(new WebSocketUnit("ws://localhost:8080/ws/" + group_id));
        fetch(config.API_URL + `/group/${groupId}`, abortableGetRequestOptions(abortController.signal))
            .then(response => response.json())
            .then(data => setGroup(data.group));
            
        if (socket === undefined) return;
        return () => {
            socket.close()
            abortController.abort();
        };
    }, []);

    if (socket === undefined || group === undefined) return null;
    return (
        <div>
            <Navbar hideTop={true}/>
            <div className="room-wrapper">
                <div className="room-left-col">
                    <GroupDetails group={group}/>
                    <Members socket={socket} />
                </div>
                <div className="room-middle-col">
                    <Chat
                        socket={socket}
                        groupId={group.id}
                    />
                </div>
            </div>
        </div>
    )
}

export default Group;