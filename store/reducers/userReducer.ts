import { createSlice } from "@reduxjs/toolkit";

interface IUSer {
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
    uid: string;
}

const userSlice = createSlice({
    name: "user",
    initialState: { displayName: "", email: "", phoneNumber: null, photoURL: "", uid: "" } as IUSer,
    reducers: {
        setUser(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
