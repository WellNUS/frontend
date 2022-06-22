import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "../../../api/websocket/websocket";
import ChatBox from "./ChatBox";
import ChatHistory from "./ChatHistory";

const Chat = () => {
    const { group_id } = useParams();

    const socket = new WebSocket("ws://localhost:8080/ws/" + group_id);

    useEffect(() => {
        connect(socket);
    }, []);

    return (
        <div>
            <ChatBox socket={socket}/>
            <ChatHistory id={group_id} />
        </div>
    )
}

export default Chat;