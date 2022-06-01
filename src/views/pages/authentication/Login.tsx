import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../../../store/slices/user";
import GeneralForm from "../../components/form/GeneralForm";
import "./authentication.css"

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
    
    return  <div className="background">
        <div className="container">
            <div className="auth-title">Log in</div>    
            <div className="form">
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
                <hr />
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