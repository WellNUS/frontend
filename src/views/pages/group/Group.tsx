import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Group = () => {
    const [group, setGroup] = useState<any>(); // TODO: change the type later
    const [users, setUsers] = useState<any[]>();
    const { group_id } = useParams();

    const handleFetch = async () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include' as RequestCredentials,
        }
        await fetch(`http://localhost:8080/group/${group_id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setGroup(data.group);
                setUsers(data.users);
            });
    }
    
    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div>
            Group here.
            {/* <div>{group.id}</div> */}
            <div>{group?.group_name}</div>
            <div>{group?.group_description}</div>
            <div>{group?.category}</div>
            <div>{group?.owner_id}</div>

            Users here.
            {
                users?.map(user => {
                    return <div>{user.first_name}</div>
                })
            }
        </div>
    )
}

export default Group;