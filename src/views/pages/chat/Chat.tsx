import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "../../../api/websocket/websocket";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat = () => {
    const { group_id } = useParams();

    const socket = new WebSocket("ws://localhost:8080/ws/" + group_id);

    useEffect(() => {
        connect(socket);
    }, []);

    return (
        <div>
            <ChatMessages id={group_id} />
            <ChatInput socket={socket}/>
        </div>
    )
}

export default Chat;