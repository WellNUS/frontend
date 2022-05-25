import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../../../store/slices/user";
import GeneralForm from "../../partials/GeneralForm/GeneralForm";
import { AltRow, Container, Form, MainRow } from "./styled/styled";

function Login(): React.ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn, users } = useSelector((state: any): any => state).user;
    const [ errMsg, setErrMsg ] = useState("");

    // Remove when database implemented
    const authenticate = (payload: any): boolean => {
        const { email, password } = payload;
        for(let i = 0; i < users.length; i++) {
            if(users[i].email == email && users[i].password == password) {
                return true;
            }
        }
        return false;
    }

    const onSubmit = (e: any) => {   
        e.preventDefault(); 
        const authenticationPayload = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        if (authenticate(authenticationPayload)) {
            dispatch(userSlice.actions.authenticate(authenticationPayload))
            navigate("/dashboard")
        } else {
            setErrMsg("Invalid Credentials")
        }
    }

    if (loggedIn) {
        return <h1>You are already Logged In</h1>;
    }
    
    return  <Container>
                <MainRow>
                    Login
                </MainRow>    
                <Form>
                    <GeneralForm
                        onSubmit={onSubmit}
                        fields={[
                            {
                                id: "email",
                                type: "email",
                                label: "E-mail",
                                placeholder: "Enter your E-mail",
                                notes: ""
                            },
                            {
                                id: "password",
                                type: "password",
                                label: "Password",
                                placeholder: "Enter your Password",
                                notes: ""
                            }
                        ]}
                        error={errMsg}
                        displayError={errMsg !== ""}
                        closeError={() => setErrMsg("")}
                    />
                </Form>
                <AltRow>
                    Don't have an account? <Link to="/register">Click here!</Link>
                </AltRow>
                <AltRow>
                    Go back to <Link to="/">HomePage</Link>
                </AltRow>
            </Container>    
}

export default Login;