import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserDetails } from "../../types/authentication/types";

type State = {
    loggedIn: boolean
    details: UserDetails | null
    users: UserDetails[]
};

const userSlice: Slice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false, 
        details: null,
        users: [{
            id: 0,
            first_name: "Hermione",
            last_name: "Granger",
            gender: "F",
            faculty: "COMPUTING",
            email: "test@gmail",
            password: "123",
            user_role: "MEMBER"
        }]
    } as State,
    reducers: {
        authenticate: (state: State, action: PayloadAction<UserDetails>) => {
            const users = state.users;
            // const user = users.find(user => user.email === email && user.password === password);
            const { first_name, last_name, gender, faculty, email, user_role } = action.payload;
            const user = { first_name, last_name, gender, faculty, email, user_role };
            if (user !== undefined) {
                return {
                    loggedIn: true,
                    details: user,
                    users: state.users
                }
            }
            return state;
        },
        update: (state: State, action: PayloadAction<UserDetails>) => {
            const { loggedIn, details } = state;
            if (loggedIn && details != null && details.id != null) {
                state.users[details.id].email = details.email
                state.users[details.id].password = details.password
            }
            return state;
        },
        add: (state: State, action: PayloadAction<UserDetails>) => {
            state.users[state.users.length] = {
                id: state.users.length,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                gender: action.payload.gender,
                faculty: action.payload.faculty,
                email: action.payload.email,
                user_role: action.payload.user_role
            }
            return state;
        },
        delete: (state: State) => {
            const { loggedIn, details } = state;
            if (loggedIn && details != null && details.id != null) {
                state.users.splice(details.id, 1)
            }
            return state;
        },
        logout: (state: State) => {
            return {
                loggedIn: false,
                details: null,
                users: state.users
            }
        }
    }
});

export default userSlice;