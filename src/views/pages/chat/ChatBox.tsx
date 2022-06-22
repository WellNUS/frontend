import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { sendMsg } from "../../../api/websocket/websocket";

const ChatBox = ({ socket } : { socket: any }) => {

    const [message, setMessage] = useState("");

    const handleChange = (e: any) => {
        setMessage(e.target.value);
    }

    const send = (socket: any) => {
        sendMsg(socket, message);
    }

    return (
        <div>
            <form onSubmit={() => send(socket)}>
                <input type="text" value={message} onChange={handleChange} />
                <Button type="submit">Send</Button>
            </form>
        </div>
    )
}

export default ChatBox;