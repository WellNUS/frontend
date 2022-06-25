import React from "react";
import { GroupDetails as GroupDetailsType } from "../../../types/group/types";

type Props = {
    group: GroupDetailsType | undefined
}

const GroupDetails = (props : Props) => {
    const { group } = props;
    return (
        <div className="group_details">
            <div className="group_details_name">{group?.group_name}</div>
            <div className="group_details_description">{group?.group_description}</div>
            <div className="group_details_box">{group?.category}</div>
        </div>
    )
}

export default GroupDetails;