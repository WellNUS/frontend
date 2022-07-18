import Navbar from "../../components/navbar/Navbar";
import CreateGroup from "./CreateGroup";
import GroupsGrid from "./GroupsGrid";
import "./group.css";

const Groups = () => {
    return (
        <div className="layout_container">
            <Navbar hideTop={false}/>
            <div className="layout_heading_container">
                <div className="layout_heading_title">Meet your friends!</div>
                <div className="layout_heading_buttons">
                    <CreateGroup />
                </div>
            </div>
            <GroupsGrid />
        </div>
    );
}

export default Groups;