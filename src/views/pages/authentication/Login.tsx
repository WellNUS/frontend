import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../../../state/slices/user";
import GeneralForm from "../../components/form/GeneralForm";
import "./authentication.css"

function Login(): React.ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn, users } = useSelector((state: any): any => state).user;
    const [ errMsg, setErrMsg ] = useState("");

    // Remove when database implemented
    const auth = (userDetails : { id: number, email: string, password: string }) => {
        // const { id, email, password } = userDetails;
        // const requestOptions = {
        //     method: 'GET'
        // }
        // const response = await fetch("http://localhost:8080/user/" + id, requestOptions);
        // return response.status;

        // Temporary
        const { email, password } = userDetails;
        for(let i = 0; i < users.length; i++) {
            if(users[i].email === email && users[i].password === password) {
                return true;
            }
        }
        return false;
    }

    const onSubmit = (e: any) => {   
        e.preventDefault(); 
        const authenticationPayload = {
            id: 0,
            email: e.target[0].value,
            password: e.target[1].value
        }

        // TODO: use a more secured method for storing user data
        // auth(authenticationPayload).then(status => {
        //     if (status === 200) {
        //         dispatch(userSlice.actions.authenticate(authenticationPayload))
        //         navigate("/dashboard")
        //     } else {
        //         setErrMsg("Invalid Credentials")
        //     }
        // });

        // Temporary
        if (auth(authenticationPayload)) {
            dispatch(userSlice.actions.authenticate(authenticationPayload))
            navigate("/dashboard")
        } else {
            setErrMsg("Invalid Credentials.")
        }
    }

    if (loggedIn) {
        return <div>You are already Logged In</div>;
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