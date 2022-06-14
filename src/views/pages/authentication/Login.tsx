import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../../../state/slices/user";
import GeneralForm from "../../components/form/GeneralForm";
import "./authentication.css"
import { UserDetails as UserDetailsType } from "../../../types/authentication/types";

function Login(): React.ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn, users } = useSelector((state: any): any => state).user;
    const [ errMsg, setErrMsg ] = useState("");

    const handleAuth = async (userDetails : UserDetailsType) => {
        const { email, password } = userDetails;
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }
        const response = await fetch("http://localhost:8080/session", requestOptions);
        const data = await response.json();
        return data;
    }

    const onSubmit = (e: any) => {   
        e.preventDefault(); 
        const userDetails = {
            first_name: "",
            last_name: "",
            gender: "",
            faculty: "",
            email: e.target[0].value,
            password: e.target[1].value,
            user_role: ""
        }

        // TODO: use a more secured method for storing user data
        // Calling backend API
        handleAuth(userDetails).then((data: any) => {
            if (data.logged_in) {
                dispatch(userSlice.actions.authenticate(data.user));
                navigate("/dashboard");
            } else {
                setErrMsg("Invalid Credentials");
            }
        });
    }

    if (loggedIn) {
        return <div>You are already Logged In</div>;
    }
    
    return  <div className="background">
        <div className="container">
            <div className="auth-title">Log in</div>   
            <div className="form-login">
                <GeneralForm
                    onSubmit={onSubmit}
                    fields={[
                        {
                            id: "email",
                            type: "email",
                            label: "Email",
                            placeholder: "Enter your email...",
                            notes: ""
                        },
                        {
                            id: "password",
                            type: "password",
                            label: "Password",
                            placeholder: "Enter your password...",
                            notes: ""
                        }
                    ]}
                    error={errMsg}
                    displayError={errMsg !== ""}
                    closeError={() => setErrMsg("")}
                />
                <br />
                <Link to="/register" className="no-decoration">
                    <button className="link-button">
                        Don't have an account? Click here!
                    </button>
                </Link>
                <Link to="/" className="no-decoration">
                    <button className="link-button">
                        Go back to home page.
                    </button>
                </Link>
            </div>
        </div>    
    </div>
}

export default Login;