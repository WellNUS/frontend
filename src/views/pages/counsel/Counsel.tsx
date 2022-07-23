import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import CounselGrid from "./CounselGrid";
import CounselModal from "./CounselModal";

const Counsel = () => {
    const navigate = useNavigate();
    const { details } = useSelector((state: any) => state.user);

    if (details.user_role !== "MEMBER") {
        // navigate("/");
        return <Navigate to="/dashboard" />
    }

    return (
        <div className="layout_container">
            <Navbar hideTop={false} />
            <div className="layout_heading_container">
                <div className="layout_heading_title">Find a counsellor</div>
                <div className="layout_heading_buttons">
                    <CounselModal />
                </div>
            </div>
            <CounselGrid />
        </div>
    )
}

export default Counsel;