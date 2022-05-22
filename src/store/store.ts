import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";

const store = configureStore({
    reducer: {
        user: user.reducer,
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

export default store;