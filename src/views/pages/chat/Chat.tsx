import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "../../../api/websocket";

const Chat = () => {
    const { group_id } = useParams();

    const getSocket = () => new WebSocket("ws://localhost:8080/ws/" + group_id);

    useEffect(() => {
        const socket = getSocket();
        connect(socket);
    }, []);

    return (
        <div>Chat Room</div>
    )
}

export default Chat;