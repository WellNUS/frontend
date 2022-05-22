import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserDetail } from "../../types/authentication/types";

type State = {
    loggedIn: boolean
    details: UserDetail | null
    users: UserDetail[]
};

const userSlice: Slice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false, 
        details: null,
        users: [{
            email: "test@gmail",
            password: "123"
        }]
    } as State,
    reducers: {
        authenticate: (state: State, action: PayloadAction<UserDetail>) => {
            const users = state.users;
            const { email, password } = action.payload;
            for(let i = 0; i < users.length; i++) {
                if(users[i].email == email && users[i].password == password) {
                    return {
                        loggedIn: true,
                        details: users[i],
                        users: state.users
                    };
                }
            }
            return state;
        },
        update: (state: State, action: PayloadAction<UserDetail>) => {
            const { loggedIn, details } = state;
            if (loggedIn && details != null && details.id != null) {
                state.users[details.id].email = details.email
                state.users[details.id].password = details.password
            }
            return state;
        },
        add: (state: State, action: PayloadAction<UserDetail>) => {
            state.users[state.users.length] = {
                id: state.users.length,
                email: action.payload.email,
                password: action.payload.password,
            }
        },
        delete: (state: State) => {
            const { loggedIn, details } = state;
            if (loggedIn && details != null && details.id != null) {
                state.users.splice(details.id, 1)
            }
            return state;
        }
    }
});

export default userSlice;