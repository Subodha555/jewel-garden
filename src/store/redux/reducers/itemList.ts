import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getItems} from "../api/items";

export type Item = {
    name: string;
    exchange: string;
    type: string;
    currency: string;
    vendor?: string;
    provider?: string;
    id?:string
    description?: string
};

interface ItemListState {
    items: Item[];
    error: string | null;
}

const initialState: ItemListState = {
    items: [],
    error: null
};

export const fetchItems = createAsyncThunk<
    Symbol[],
    void,
    { rejectValue: string }
    >("itemList/fetchItems", async (_, {rejectWithValue}) => {
    try {
        const response = await getItems();
        console.error('fetchFavoriteWatchlistSymbols :: ', response);
        return response;
    } catch (error) {
        console.error('fetchFavoriteWatchlistSymbols :: ', error)
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue("An unexpected error occurred");
        }
    }
});

const ItemListSlice = createSlice({
    name: "itemList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.fulfilled, (state, action) => {
                console.log(action.payload);
                state.items = action.payload;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

export default ItemListSlice.reducer;