import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../../../store/slices/user";
import GeneralForm from "../../partials/GeneralForm/GeneralForm";
import { AltRow, Container, Form, MainRow } from "./styledComponents/styled";

function Register(): React.ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn } = useSelector((state: any): any => state).user;
    const [ errMsg, setErrMsg ] = useState("");

    const onSubmit = (e: any) => {   
        e.preventDefault(); 
        const userDetails = {
            email: e.target[0].value,
            password: e.target[1].value,
            passwordConfirmation: e.target[2].value
        }
        if (userDetails.passwordConfirmation !== userDetails.password) {
            return setErrMsg("Password and password confirmation does not match")
        }
        dispatch(userSlice.actions.add(userDetails))
        dispatch(userSlice.actions.authenticate(userDetails))
        navigate("/dashboard")
    }

    if (loggedIn) {
        return <h1>You are already Logged In</h1>;
    }

    return  <Container>
                <MainRow>Register a new Account</MainRow>
                <Form>
                    <GeneralForm
                        onSubmit={onSubmit}
                        fields={[
                            {
                                id: "email",
                                type: "email",
                                label: "E-mail",
                                placeholder: "Enter your E-mail",
                                notes: "E-mail must be a valid NUS email (e.g. e1234567@u.nus.edu)"
                            },
                            {
                                id: "password",
                                type: "password",
                                label: "Password",
                                placeholder: "Enter your Password",
                                notes: ""
                            },
                            {
                                id: "password_confirmation",
                                type: "password",
                                label: "Password Confirmation",
                                placeholder: "Confirm your Password",
                                notes: ""
                            },
                        ]}
                        error={errMsg}
                        displayError={errMsg !== ""}
                        closeError={() => setErrMsg("")}
                    />
                </Form>
                <AltRow>
                    Already have an account? <Link to="/login">Click here to login!</Link>
                </AltRow>
                <AltRow>
                    Go back to <Link to="/">HomePage</Link>
                </AltRow>
            </Container>
}

export default Register;