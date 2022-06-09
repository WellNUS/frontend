import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../../../state/slices/user";
import GeneralForm from "../../components/form/GeneralForm";
import "./authentication.css"

function Register(): React.ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn } = useSelector((state: any): any => state.user);
    const [ errMsg, setErrMsg ] = useState("");

    const onSubmit = (e: any) => {   
        e.preventDefault(); 
        const userDetails = {
            email: e.target[0].value,
            password: String(e.target[1].value),
            passwordConfirmation: e.target[2].value
        }
        if (userDetails.passwordConfirmation !== userDetails.password) {
            return setErrMsg("Password and password confirmation does not match.")
        }

        registerBE(userDetails);

        dispatch(userSlice.actions.add(userDetails))
        dispatch(userSlice.actions.authenticate(userDetails))
        navigate("/dashboard")
    }

    const registerBE = async ({ email, password } : { email: string, password: string }) => {
        const requestOptions = {
            method: 'POST',
            // TODO: Change the body and the form later
            body: JSON.stringify({
                "first_name": "Alice",
                "last_name": "Doe",
                "gender": "M",
                "faculty": "COMPUTING",
                "email": email,
                "user_role": "MEMBER",
                "password": password
            })
        }
        try {
            const response = await fetch("http://localhost:8080/user", requestOptions);
            console.log(response);
            console.log("status: " + response.status);
        } catch (err) {
            console.log(err);
        }
    }

    if (loggedIn) {
        return <h1>You are already Logged In</h1>;
    }

    return <div className="background flex-wrapper">
        <div className="register-container">
            <div className="auth-title">Sign up</div>
            <div className="form">
                <GeneralForm
                    onSubmit={onSubmit}
                    fields={[
                        {
                            id: "email",
                            type: "email",
                            label: "Email",
                            placeholder: "Enter your email...",
                            notes: "must be a valid NUS email (e.g. e1234567@u.nus.edu)"
                        },
                        {
                            id: "password",
                            type: "password",
                            label: "Password",
                            placeholder: "Enter your password...",
                            notes: ""
                        },
                        {
                            id: "password_confirmation",
                            type: "password",
                            label: "Password confirmation",
                            placeholder: "Confirm your password...",
                            notes: ""
                        },
                    ]}
                    error={errMsg}
                    displayError={errMsg !== ""}
                    closeError={() => setErrMsg("")}
                />
            <Link to="/login" className="no-decoration">
                <button className="link-button">
                    Already signed up? Click here!
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

export default Register;