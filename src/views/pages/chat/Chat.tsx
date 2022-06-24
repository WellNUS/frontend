import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { connect } from "../../../api/websocket/websocket";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat = () => {
    const { group_id } = useParams();
    let socket;

    useEffect(() => {
        socket = new WebSocket("ws://localhost:8080/ws/" + group_id);
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