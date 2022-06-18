import React from "react";
import { GroupDetails as GroupDetailsType } from "../../../../types/group/types";

type Props = {
    group: GroupDetailsType | undefined
}

const GroupDetails = (props : Props) => {
    const { group } = props;
    return (
        <div>
            <div>ID: {group?.id}</div>
            <div>{group?.group_name}</div>
            <div>{group?.group_description}</div>
            <div>{group?.category}</div>
            <div>{group?.owner_id}</div>
        </div>
    )
}

export default GroupDetails;