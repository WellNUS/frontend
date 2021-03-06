import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { abortableGetRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";

const GroupsGrid = () => {
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
        <div className="layout_content_container_grid">
        {
            groups &&
            groups.map((group, key) => {
                return (
                    <div key={key} className="groups_group_card">
                        <div className="groups_group_card_heading">
                            <div role="group_name" className="group_card_name">{group.group_name}</div>
                            {/* <div className="group_card_id">{group.id}</div> */}
                        </div>
                        <div className="groups_group_card_body">
                            <div role="group_description">{group.group_description}</div>
                        </div>
                        <div className="groups_group_card_footing">
                            <Link to={`/groups/${group.id}`}>
                                <Button className="group_card_view_button">MEET</Button>
                            </Link>
                            <div role="group_category" className={group.category === "SUPPORT" ? "group_card_category_support" : "group_card_category_counsel"}>{group.category}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    )
}

export default GroupsGrid;