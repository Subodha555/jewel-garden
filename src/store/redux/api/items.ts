import { API, handleApiError } from "./utils";
import {Item} from "../reducers/itemList"

export const saveItem = async (item: Item) => {
  try {
    const res = await API.post("/products", item);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getItems = async () => {
  try {
    const res = await API.get("/products");
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};