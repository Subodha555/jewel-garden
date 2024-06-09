import {createSlice} from "@reduxjs/toolkit";

interface JewelleryItem {
    name: string,
    type: string,
    price: number
}

const initialState: JewelleryItem = {
    name: "Untitled-name",
    type: "",
    price: 0
};

const JewelleryItemSlice = createSlice({
    name: "JewelleryItem",
    initialState: initialState,
    reducers: {
        updateName: (state, {payload}) => {
            state.name = payload;
        }
    }
});

export const {updateName} = JewelleryItemSlice.actions;
export default JewelleryItemSlice.reducer;