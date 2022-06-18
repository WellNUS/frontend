import React from "react";
import "../group.css";

const userMessages = [
    { profile: "A", 
      name: "Alice", 
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolore nemo laborum minus ut adipisci?" }
    ,
    { profile: "B", 
      name: "Bethany", 
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolore nemo laborum minus ut adipisci?" }
    ,
    { profile: "A", 
      name: "Alice", 
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolore nemo laborum minus ut adipisci?" }
]

const Messages = () => {
    return <div className="room-messages-wrapper">
        {userMessages.map((user, id) => <div key={id} className="room-message-wrapper">
            <div className="room-message-profile">
                {user.profile}
            </div>
            <div>
                <div className="room-message-name">{user.name}</div>
                <div>{user.message}</div>
            </div>
        </div>)}
    </div>
}

export default Messages;