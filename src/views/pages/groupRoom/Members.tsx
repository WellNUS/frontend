import React, { useEffect, useState } from "react";
import "../groups/group.css";

const Members = ({group_id, users}: {group_id: string | undefined, users: any[] | undefined}) => {

    const [inChatMembers, setInChatMembers] = useState<any[]>([]);
    const [onlineMembers, setOnlineMembers] = useState<any[]>([]);
    const [offlineMembers, setOfflineMembers] = useState<any[]>([]);

    useEffect(() => {
        // socket = new WebSocket("ws://localhost:8080/ws/" + group_id);
    }, []);

    return <div className="room-members-wrapper">
        {/* <div>
             <div>In Chat</div>
            {inChatMembers?.map((member, key) => {
                return (
                    <div key={key}></div>
                )
            })}
        </div>
        <div>
            <div>Online</div>
            {onlineMembers?.map((member, key) => {
                return (
                    <div key={key}></div>
                )
            })}
        </div>
        <div>
            <div>Offline</div>
            {offlineMembers?.map((member, key) => {
                return (
                    <div key={key}></div>
                )
            })}
        </div> */}
        <div>
            Members
            {users?.map((user, id) => <div key={id} className="room-members-box">
                {user.first_name}
            </div>)}
        </div>
    </div>
}

export default Members;