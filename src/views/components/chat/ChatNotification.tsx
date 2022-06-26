import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MessagePayload, WebSocketUnit } from "../../../api/websocketunit/websocketunit";

type Props = {
    socket: WebSocketUnit;
    groupId: number;
}

export const ChatNotification = (props: Props) => {
    const { socket, groupId } = props;
    const [display, setDisplay] = useState<boolean>(false);
    const [redirect, setRedirect] = useState<string>("/");
    const [messagePayload, setMessagePayload] = useState<MessagePayload>();
    const navigate = useNavigate();

    useEffect(() => {
        let chatNotifTimeOut;
        socket.addMessageHandler("otherGroupMessages", (payload: MessagePayload) => {
            const { group_id } = payload.message;
            if (group_id !== groupId) {
                setMessagePayload(payload);
                setRedirect(`/groups/${group_id}`);
                setDisplay(true);
                setTimeout(() => setDisplay(false), 3000);
            }
        })
    }, [])

    const handleDimiss = ()=>{
        setDisplay(false)
    };
    const handleNav = ()=>{
        navigate(redirect)
        window.location.reload();
    }

    if (!display || messagePayload === undefined) return null;

    const { sender_name, group_name } = messagePayload;
    return (
        <div className="chat-notif" >
            <button onClick={handleNav}>
                New message from <span className="chat-notif-bold">{sender_name}</span> in <span className="chat-notif-bold">{group_name}</span>
            </button>
            <button className="chat-notif-close" onClick={handleDimiss}> [X] </button>
        </div>
    )
}