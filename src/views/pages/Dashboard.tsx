import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Dashboard() {
    const { loggedIn } = useSelector((state: any): any => state.user);
    const navigate = useNavigate();
    if (!loggedIn) {
        navigate("/");
    }
    return  <Fragment>
                <h1>Welcome to your dashboard</h1>
                <Link to="/"> Go back to home </Link>
            </Fragment>
}

export default Dashboard;