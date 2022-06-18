import React from "react";
import "../group.css";

const onlineMembers = [
    { profile: "A", name: "Alice" },
    { profile: "B", name: "Bethany"}
]

const offlineMembers = [
    { profile: "C", name: "Carol" },
    { profile: "D", name: "Delta"}
]

const Members = () => {
    return <div className="room-members-wrapper">
        <div>
            Online
            {onlineMembers.map((user, id) => <div key={id} className="room-members-box">
                {user.profile} {user.name}
            </div>)}
        </div>
        <br />
        <div>
            Offline
            {offlineMembers.map((user, id) => <div key={id} className="room-members-box">
                {user.profile} {user.name}
            </div>)}
        </div>
    </div>
}

export default Members;