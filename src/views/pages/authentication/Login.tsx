import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../../../state/slices/user";
import GeneralForm from "../../components/form/GeneralForm";
import "./authentication.css"
import { UserDetails as UserDetailsType } from "../../../types/authentication/types";
import { postRequestOptions } from "../../../api/fetch/requestOptions";
import { config } from "../../../config";
import { Button } from "react-bootstrap";
import logo from "../../../static/icon/navIcons/logo.png";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn } = useSelector((state: any): any => state).user;
    const [ errMsg, setErrMsg ] = useState("");

    const handleAuth = async (userDetails : UserDetailsType) => {
        const { email, password } = userDetails;
        const requestOptions = {
            ...postRequestOptions,
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }
        const response = await fetch(config.API_URL + "/session", requestOptions);
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

    return (
        <div className="auth_container">
            <div className="auth_left_col">
                <div className="auth_logo_row">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="auth_content_row">
                    <h1>Are you new here?</h1>
                    <p>Click here to create a new account.</p>
                    <Button className="auth_btn">Register</Button>
                </div>
            </div>
            <div className="auth_right_col">
                <h1>Login to an existing account.</h1>
                <GeneralForm
                    onSubmit={onSubmit}
                    fields={[
                        {
                            id: "email",
                            type: "email",
                            label: "Email",
                            placeholder: "Email",
                            notes: "Please enter only a valid NUS Email (e.g. E1234567@u.nus.edu)."
                        },
                        {
                            id: "password",
                            type: "password",
                            label: "Password",
                            placeholder: "Password",
                            notes: ""
                        }
                    ]}
                    error={errMsg}
                    displayError={errMsg !== ""}
                    closeError={() => setErrMsg("")}
                    hideSubmit={false}
                />
            </div>
        </div>
    )
    
    // return  <div className="background">
    //     <div className="container">
    //         <div className="auth-title">Log in</div>   
    //         <div className="form-login">
                // <GeneralForm
                //     onSubmit={onSubmit}
                //     fields={[
                //         {
                //             id: "email",
                //             type: "email",
                //             label: "Email",
                //             placeholder: "Enter your email...",
                //             notes: ""
                //         },
                //         {
                //             id: "password",
                //             type: "password",
                //             label: "Password",
                //             placeholder: "Enter your password...",
                //             notes: ""
                //         }
                //     ]}
                //     error={errMsg}
                //     displayError={errMsg !== ""}
                //     closeError={() => setErrMsg("")}
                //     hideSubmit={false}
                // />
    //             <br />
    //             <Link to="/register" className="no-decoration">
    //                 <button className="link-button">
    //                     Don't have an account? Click here!
    //                 </button>
    //             </Link>
    //             <Link to="/" className="no-decoration">
    //                 <button className="link-button">
    //                     Go back to home page.
    //                 </button>
    //             </Link>
    //         </div>
    //     </div>    
    // </div>
}

export default Login;