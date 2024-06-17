import { API, handleApiError } from "./utils";

export const saveItem = async (item) => {
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
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};