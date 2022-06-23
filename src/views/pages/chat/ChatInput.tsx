import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { sendMsg } from "../../../api/websocket/websocket";

const ChatInput = ({ socket } : { socket: any }) => {

    const [message, setMessage] = useState("");

    const handleChange = (e: any) => {
        setMessage(e.target.value);
    }

    const send = (socket: any) => {
        sendMsg(socket, message);
    }

    return (
        <div>
            <form onSubmit={() => send(socket)} className="chatinput_wrapper">
                <input type="text" value={message} onChange={handleChange} className="chatinput_input" />
                <Button type="submit" className="chatinput_send">Send</Button>
            </form>
        </div>
    )
}

export default ChatInput;