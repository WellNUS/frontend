import { UserDetail } from "../authentication/types"

export type StoreState = {
    user: {
        loggedIn: boolean,
        details: UserDetail | null,
        users: UserDetail[]
    }
}

