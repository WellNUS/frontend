import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css";
import logo from "../../../resource/icon/navIcons/logo.png"

function HomeNav(props: any): React.ReactElement {
    const { loggedIn } = useSelector((state: any): any => state.user);
    if (loggedIn) {
        return <Link to="/dashboard" className="btn">Go To Dashboard</Link>
    } 
    return <div className="homenav">
        <div>
            <img src={logo} className="homenav_logo"/>
            <text className="homenav_logotext">WellNUS</text>
        </div>
        <div className="homenav_buttons">
            <Link to="/login" className="homenav_btn btn">Login</Link>
            <Link to="/register" className="homenav_btn btn">Register</Link>
        </div>
    </div>
}

export default HomeNav;