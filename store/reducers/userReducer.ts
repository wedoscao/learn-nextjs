import { createSlice } from "@reduxjs/toolkit";

export interface User {
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
    uid: string;
}

const userSlice = createSlice({
    name: "user",
    initialState: { displayName: "", email: "", phoneNumber: null, photoURL: "", uid: "" } as User,
    reducers: {
        setUser(state, action) {
            if (Object.keys(action.payload).length === 0 && action.payload.constructor === Object) {
                return {};
            }
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
