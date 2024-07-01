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

    const getImages = async (res) => {
        for (let i=0; i< res.data.length; i++) {
            let itemImage = "";
            try {
                itemImage = await API.get(`/products/image/${res.data[i].image}`, {
                    responseType: 'blob' // Ensure we get the image as a blob
                });
                console.error("itemImage", itemImage, res.data[i].name);
            } catch (e) {
                console.error("image loading failed");
            }
            if (itemImage.data) {
                res.data[i].image  = URL.createObjectURL(itemImage.data)
            } else {
                res.data[i].image = itemImage;
            }
        }

        return res;
    };

    let updatedResWithImage = await getImages(res);

    return updatedResWithImage.data;
  } catch (error) {
    return handleApiError(error);
  }
};