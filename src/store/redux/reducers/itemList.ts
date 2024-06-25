import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getItems} from "../api/items";

export interface InitialItem {
    name: string;
    currency: string;
    description?: string,
    price: number,
    priceLast: number | undefined,
    image: string,
    brand: string,
    category: string,
    countInStock: number,
    rating: string,
    numReviews: number,
    isFeatured: boolean
}

export interface Item extends InitialItem {
    id?:string
    dateCreated: string,
}

type ItemListState = {
    items: Item[];
    error: string | null;
}

const initialState: ItemListState = {
    items: [],
    error: null
};

export const fetchItems = createAsyncThunk<
    Item[],
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
            .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
                console.log(action.payload);
                state.items = action.payload;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

export default ItemListSlice.reducer;