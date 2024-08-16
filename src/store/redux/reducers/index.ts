import {combineReducers} from "@reduxjs/toolkit";
import JewelleryItem from "./jewelleryItem";
import User from "./user";
import ItemList from "./itemList";

const rootReducer = combineReducers({
   jewelleryItem:  JewelleryItem,
    user: User,
    itemList: ItemList
});

export default rootReducer;