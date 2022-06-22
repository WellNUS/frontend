import React, { useEffect, useState } from "react";

const ChatHistory = ({ id } : { id: string | undefined }) => {

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
        <div>
            {
                messages?.map((message, id) => {
                    return (
                        <div key={id}>
                            <br />
                            <div>{message.sender_name}</div>
                            <div>{message.message.msg}</div>
                            <div>{message.message.time_added}</div>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ChatHistory;