import {createSlice} from "@reduxjs/toolkit";

interface User {
    name: string,
    email: string,
    address: string,
    isAdmin: boolean
}

const initialState: User = {
    name: "",
    email: "",
    address: "",
    isAdmin: false
};

const user = createSlice({
   name: "user",
   initialState: initialState,
    reducers: {
       setUserDetails: (state, {payload}) => {
           Object.assign(state, payload);
       }
    }
});

export const {setUserDetails} = user.actions;
export default user.reducer;