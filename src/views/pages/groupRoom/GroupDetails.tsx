import React from "react";
import { GroupDetails as GroupDetailsType } from "../../../types/group/types";
import "./groupRoom.css";

type Props = {
    group: GroupDetailsType
}

const GroupDetails = (props : Props) => {
    const { group } = props;
    // console.log(group)
    return (
        <div className="">
            <div className="groupRoom_title">{group.group_name}</div>
            <div className="groupRoom_detail"><b>Group ID: #{group.id}</b></div>
            <br />
            <div className="groupRoom_detail">{group.group_description}</div>
            <div className="groupRoom_category">{group.category}</div>
        </div>
    )
}

export default GroupDetails;