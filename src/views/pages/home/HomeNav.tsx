import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonedLink = styled(Link)`
    padding: 15px 20px;
    margin: 0;
    color: pink;
    text-align: center;
    font-size: 2rem;
    background-color: white;
    border-radius: 10px;
    text-decoration: none;
`

const Spacer = styled.span`
    margin: 0 30px;
`

function HomeNav(props: any): React.ReactElement {
    const { loggedIn } = useSelector((state: any): any => state.user);
    if (loggedIn) {
        return <ButtonedLink to="/dashboard">Go To Dashboard</ButtonedLink>
    } 
    return  <Fragment>
                <Spacer>
                    <ButtonedLink to="/login">Login</ButtonedLink>
                </Spacer>
                <Spacer>
                    <ButtonedLink to="/register">Register</ButtonedLink>
                </Spacer>
            </Fragment>
}

export default HomeNav;