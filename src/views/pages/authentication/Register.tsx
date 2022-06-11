import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../../../state/slices/user";
import GeneralForm from "../../components/form/GeneralForm";
import { UserDetails as UserDetailsType } from "../../../types/authentication/types";
import "./authentication.css"

function Register(): React.ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn } = useSelector((state: any): any => state.user);
    const [ errMsg, setErrMsg ] = useState("");
    const [ status, setStatus ] = useState(0);

    const onSubmit = (e: any) => {   
        e.preventDefault(); 
        const userDetails = {
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            gender: e.target[2].value,
            faculty: e.target[3].value,
            email: e.target[4].value,
            password: String(e.target[5].value),
            passwordConfirmation: e.target[6].value
        }
        if (userDetails.passwordConfirmation !== userDetails.password) {
            return setErrMsg("Password and password confirmation does not match.")
        }
        registerBE(userDetails);
    }

    const registerBE = async (userDetails : UserDetailsType) => {
        const { first_name, last_name, gender, faculty, email, password } = userDetails;
        const requestOptions = {
            method: 'POST',
            // TODO: Change the body and the form later
            body: JSON.stringify({
                "first_name": first_name,
                "last_name": last_name,
                "gender": gender,
                "faculty": faculty,
                "email": email,
                "user_role": "MEMBER", // default user role is member
                "password": password
            })
        }
        const response = await fetch("http://localhost:8080/user", requestOptions);
        try {
            if (response.status === 200) {
                dispatch(userSlice.actions.add(userDetails)) // TODO: remove this later
                dispatch(userSlice.actions.authenticate(userDetails)) // update redux loggedIn state
                navigate("/dashboard")
            } else {
                // TODO: Create an alert to indicate invalid input(s).
                // setErrMsg here
                console.log("Invalid input(s).")
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (loggedIn) {
        return <div>You are already logged in.</div>;
    }

    return <div className="background flex-wrapper">
        <div className="register-container">
            <div className="auth-title">Sign up</div>
            <div className="form">
                <GeneralForm
                    onSubmit={onSubmit}
                    fields={[
                        {
                            id: "first_name",
                            type: "text",
                            label: "First name",
                            placeholder: "Enter your first name...",
                            notes: ""
                        },
                        {
                            id: "last_name",
                            type: "text",
                            label: "Last name",
                            placeholder: "Enter your last name...",
                            notes: ""
                        },
                        {
                            id: "gender",
                            type: "text",
                            label: "Gender",
                            placeholder: "Enter your gender...",
                            notes: "options: M / F"
                        },
                        {
                            id: "faculty",
                            type: "text",
                            label: "Faculty",
                            placeholder: "Enter your faculty...",
                            notes: "e.g. COMPUTING"
                        },
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
                        }
                        
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