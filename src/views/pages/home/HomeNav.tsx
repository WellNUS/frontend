import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./styled/styles.css";
import logo from "../../../resource/icon/navIcons/logo.png"

const ButtonedLink = styled(Link)`
    margin: 0;
    color: pink;
    text-align: center;
    font-size: 1rem;
    background-color: white;
    border-radius: 10px;
    text-decoration: none;
`

function HomeNav(props: any): React.ReactElement {
    const { loggedIn } = useSelector((state: any): any => state.user);
    if (loggedIn) {
        return <Link to="/dashboard" className="btn">Go To Dashboard</Link>
    } 
    return <Fragment>
            <div className="wrapper">
                <div>
                    <img src={logo} className="logo"/>
                    <text className="wellnus-text">WellNUS</text>
                </div>
                <div className="btn-wrapper">
                    <Link to="/login" className="btn">Login</Link>
                    <Link to="/register" className="btn">Register</Link>
                </div>
            </div>
        </Fragment>
}

export default HomeNav;