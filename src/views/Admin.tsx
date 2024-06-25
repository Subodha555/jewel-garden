import axios from "axios";
import {ChangeEvent, useEffect, useState} from "react";
import {InitialItem} from "../store/redux/reducers/itemList"
let BASE_URL = "http://localhost:3000"

const Admin = () => {
    const initialProduct = {
        name: "",
        description: "",
        image: "",
        brand: "",
        price: 0,
        priceLast: 0,
        currency: "",
        category: "",
        countInStock: 0,
        rating: "",
        numReviews: 0,
        isFeatured: false,
    };
    const [product, setProduct] = useState<InitialItem>(initialProduct);
    useEffect(() => {
        // axios
        //     .get(`${BASE_URL}/api/v1/products`, {
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((er) => {
        //         console.error(er);
        //     });
    }, []);

    const addItem = () => {
        console.error("add item");
        // Todo: move this to store
        axios
            .put(`${BASE_URL}/api/v1/products`, product)
            .then((res) => {
                console.log(res);
            })
            .catch((er) => {
                // setLoading(false);
                console.error(er);
            });
    };

    const clearAll = () => {
        setProduct(initialProduct);
    };

    const isStringField = (key: keyof InitialItem): key is keyof Omit<InitialItem, 'price' | 'priceLast' | 'countInStock' | 'numReviews' | 'isFeatured'> => {
        return typeof product[key] === 'string' || typeof product[key] === 'undefined';
    };

    const isNumberField = (key: keyof InitialItem): key is 'price' | 'priceLast' | 'countInStock' | 'numReviews' => {
        return key === 'price' || key === 'priceLast' || key === 'countInStock' || key === 'numReviews';
    };

    const isBooleanField = (key: keyof InitialItem): key is 'isFeatured' => {
        return key === 'isFeatured';
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>, field: keyof InitialItem) => {
        console.error(e.target.value, field);
        let tempProduct = {...product}
        // tempProduct[field] = e.target.value;

        if (isStringField(field)) {
            tempProduct[field] = e.target.value as any;
        } else if (isNumberField(field)) {
            tempProduct[field] = parseFloat(e.target.value) as any;
        } else if (isBooleanField(field)) {
            tempProduct[field] = e.target.checked as any;
        }

        setProduct(tempProduct);
    };
  return (
      <div className="p-10">
          <div className="grid grid-cols-3 px-10 gap-4">
              <div className="col-span-3 text-center p-10 text-4xl">Add Products</div>
              <div className="p-4">Name</div>
              <input type="text" className="p-4 col-span-2" value={product.name} onChange={(e)=>onInputChange(e, "name")} placeholder="Name"/>
              <div className="p-4">Description</div>
              <input type="text"  className="p-4 col-span-2" value={product.description} onChange={(e)=>onInputChange(e, "description")} placeholder="Description"/>
              <div className="p-4">Image</div>
              <input type="text"  className="p-4 col-span-2" value={product.image} onChange={(e)=>onInputChange(e, "image")} placeholder="image upload support"/>
              <div className="p-4">Brand</div>
              <input type="text"  className="p-4 col-span-2" value={product.brand} onChange={(e)=>onInputChange(e, "brand")} placeholder="Brand"/>
              <div className="p-4">Price</div>
              <input type="number"  className="p-4 col-span-2" value={product.price} onChange={(e)=>onInputChange(e, "price")} placeholder="Price"/>
              <div className="p-4">Price Earlier</div>
              <input type="number"  className="p-4 col-span-2" value={product.priceLast} onChange={(e)=>onInputChange(e, "priceLast")} placeholder="Price Earlier"/>
              <div className="p-4">Currency</div>
              <input type="text"  className="p-4 col-span-2" value={product.currency} onChange={(e)=>onInputChange(e, "currency")} placeholder="Currency"/>
              <div className="p-4">Category</div>
              <input type="text"  className="p-4 col-span-2" value={product.category} onChange={(e)=>onInputChange(e, "category")}  placeholder="Category"/>
              <div className="p-4">Stock</div>
              <input type="number"  className="p-4 col-span-2" value={product.countInStock} onChange={(e)=>onInputChange(e, "countInStock")} placeholder="Stock"/>
              <div className="p-4">Rating</div>
              <input type="text"  className="p-4 col-span-2" value={product.rating} onChange={(e)=>onInputChange(e, "rating")} placeholder="Rating"/>
              <div className="p-4">No.of Reviews</div>
              <input type="text"  className="p-4 col-span-2" value={product.numReviews} onChange={(e)=>onInputChange(e, "numReviews")} placeholder="No.of Revies"/>
              {/*<div className="p-4">Is Featured</div>*/}
              {/*<input type="text"  className="p-4 col-span-2" value={product.isFeatured} onChange={(e)=>onInputChange(e, "isFeatured")} placeholder="Is Featured"/>*/}
              <button className="col-span-3 p-10 bg-black border-primary text-white" onClick={()=> addItem()}>Add</button>
              <button className="col-span-3 p-10 bg-black border-primary text-white" onClick={()=> clearAll()}>Clear All</button>
          </div>
      </div>
  )
};

export default Admin;