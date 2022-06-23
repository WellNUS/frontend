import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./chat.css";


const ChatMessages = ({ id } : { id: string | undefined }) => {

    const { details } = useSelector((state: any) => state.user);
    const currentUserID = details.id;
    const [messages, setMessages] = useState<any[]>([]);

    /*
        message_payloads[0]: {tag: 0, sender_name: 'Harry', group_name: 'Gamma', message: {…}}
        message: {user_id: 1, group_id: 1, time_added: '2022-06-22T21:58:39.548191Z', msg: 'hello'}
    */

    const getChatHistory = async () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include' as RequestCredentials,
        }
        await fetch("http://localhost:8080/message/" + id + "?limit=5", requestOptions)
            .then(response => response.json())
            .then(data => {
                setMessages(data.message_payloads);
            });
    }

    useEffect(() => {
        getChatHistory();
    }, []);

    return (
        <div className="messages_wrapper">
            {
                messages?.map((message, id) => {
                    const messageTime = new Date(message.message.time_added).toTimeString().slice(0, 5);

                    if (currentUserID === message.message.user_id) {
                        return (
                            <div key={id} className="message_wrapper_self">
                                <div className="message_sender_self">{message.sender_name}</div>
                                <div className="message_content_self">{message.message.msg}</div>
                                <div className="message_time_self">{messageTime}</div>
                            </div>
                        )
                    }

                    return (
                        <div key={id} className="message_wrapper">
                            <div className="message_sender">{message.sender_name}</div>
                            <div className="message_content">{message.message.msg}</div>
                            <div className="message_time">{messageTime}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ChatMessages;