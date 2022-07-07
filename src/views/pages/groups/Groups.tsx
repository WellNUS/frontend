import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { abortableGetRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import Navbar from "../../components/navbar/Navbar";
import CreateGroup from "./CreateGroup";
import "./group.css";

const Groups = () => {
    const [groups, setGroups] = useState<any[]>([]);

    const handleFetch = (): AbortController => {
        const abortController = new AbortController();
        fetch(config.API_URL + "/group", abortableGetRequestOptions(abortController.signal))
            .then(response => response.json())
            .then(data => {
                setGroups(data)
            });
        return abortController;
    }

    useEffect(() => {
        const abortController = handleFetch();
        return () => {
            abortController.abort();
        }
    }, []);

    return (
        <div>
            <Navbar hideTop={false}/>
            <div className="layout_heading_container">
                <div className="layout_heading_title">Meet your friends!</div>
                <div className="layout_heading_buttons">
                    <CreateGroup />
                </div>
            </div>
            <div className="layout_content_container_grid">
                {
                    groups.map((group, key) => {
                        return (
                            <div key={key} className="groups_group_card">
                                <div className="groups_group_card_heading">
                                    <div className="group_card_name">{group.group_name}</div>
                                    <div className="group_card_id">{group.id}</div>
                                </div>
                                <div className="groups_group_card_body">
                                    <div>{group.group_description}</div>
                                </div>
                                <div className="groups_group_card_footing">
                                    <Link to={`/groups/${group.id}`}>
                                        <Button className="group_card_view_button">MEET</Button>
                                    </Link>

                                    {
                                        group.category === "SUPPORT"
                                        ? <div className="group_card_category_support">{group.category}</div>
                                        : <div className="group_card_category_counsel">{group.category}</div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className="layout_content_container_columns">
                <div className="group table_head">
                    <div className="group_name">Your Groups</div>
                    <div className="group_description">Description</div>
                    <div className="group_category">Categories</div>
                    <div className="group_button">Action</div>
                </div>
                {groups.map((group, id) => {
                    return (
                        <div className="group" key={id}>
                            <div className="group_name">{group.group_name}#{group.id}</div>
                            <div className="group_description">{group.group_description}</div>
                            <div className="group_category">{group.category}</div>
                            <div className="group_button">
                                <Link to={`/groups/${group.id}`}>
                                    <Button className="group_view_button">View</Button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div> */}
        </div>
    );
}

export default Groups;