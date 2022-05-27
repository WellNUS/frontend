import React from "react";
import Channels from "./Channels";
import Members from "./Members";
import Messages from "./Messages";
import "./style/styles.css"

const Room = () => {
    return <div className="room-wrapper">
        <div className="room-left-col">
            <Channels />
        </div>
        <div className="room-middle-col">
            <Messages />
        </div>
        <div className="room-right-col">
            <Members />
        </div>
    </div>
}

export default Room;