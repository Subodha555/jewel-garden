import {createSlice} from "@reduxjs/toolkit";

interface User {
    name: string,
    email: string,
    image: string,
    isAdmin: boolean
}

const initialState: User = {
    name: "",
    email: "",
    image: "",
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