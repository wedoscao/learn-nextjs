import { User } from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

export interface State {
    user: User;
}

const store = configureStore({
    reducer,
});

export default store;
