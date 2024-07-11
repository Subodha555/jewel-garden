import { API, handleApiError } from "./utils";
import {Item} from "../reducers/itemList";

export const saveItem = async (item: Item) => {
  try {
    const res = await API.post("/products", item);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getItems = async (): Promise<Item[]> => {
  try {
    const res = await API.get("/products");

    const getImages = async (res: {data: Item[]}) => {
        for (let i=0; i< res.data.length; i++) {
            let itemImage: {data: Blob};
            try {
                itemImage = await API.get(`/products/image/${res.data[i].image}`, {
                    responseType: 'blob' // Ensure we get the image as a blob
                });

                if (itemImage.data) {
                    res.data[i].image  = URL.createObjectURL(itemImage.data)
                }
            } catch (e) {
                console.error("image loading failed");
            }
        }

        return res;
    };

    let updatedResWithImage = await getImages(res);
    return updatedResWithImage.data;
  } catch (error) {
     // handleApiError(error);
    return [];
  }
};