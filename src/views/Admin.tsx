import axios from "axios";
import {ChangeEvent, useState, useRef} from "react";
import {InitialItem} from "../store/redux/reducers/itemList";
import {brands, currencies, categories, dropdownOptionType} from "../utils/utils";
import Dropdown from "../components/Dropdowm";
let BASE_URL = import.meta.env.VITE_APP_API_URL;

const Admin = () => {
    const fileInput = useRef<HTMLInputElement>(null);

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

    const addItem = () => {
        console.error("add item", product);
        // Todo: move this to store


        const formData = new FormData();
        formData.append("name", product.name as string);
        formData.append("description", product.description as string);
        formData.append("brand", product.brand as string);
        formData.append("price", product.price as any);
        formData.append("priceLast", product.priceLast as any);
        formData.append("currency", product.currency as string);
        formData.append("category", product.category as string);
        formData.append("countInStock", product.countInStock as any);
        formData.append("rating", product.rating as string);
        formData.append("numReviews", product.numReviews as any);
        formData.append("isFeatured", product.isFeatured as any);

        const input = fileInput.current?.files && fileInput.current?.files[0];
        if (input) {
            formData.append('image', input);
        }
        axios
            .put(`${BASE_URL}/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
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

    // check these callbacks have performance issues
    const onSelectBrand = (option: dropdownOptionType) => {
        setProduct({...product, ...{brand: option.id}});
        console.error("product", product);
    };

    const onSelectCurrency = (option: dropdownOptionType) => {
        setProduct({...product, ...{currency: option.id}});
        console.error("product", product);
    };

    const onSelectCategory = (option: dropdownOptionType) => {
        setProduct({...product, ...{category: option.id}});
        console.error("product", product);
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
              <input ref={fileInput} className="p-4 col-span-2" type="file"/>
              <div className="p-4">Brand</div>
              <div className="p-4 col-span-2">
                  <Dropdown options={brands} onSelect={onSelectBrand}/>
              </div>
              <div className="p-4">Price</div>
              <input type="number"  className="p-4 col-span-2" value={product.price} onChange={(e)=>onInputChange(e, "price")} placeholder="Price"/>
              <div className="p-4">Price Earlier</div>
              <input type="number"  className="p-4 col-span-2" value={product.priceLast} onChange={(e)=>onInputChange(e, "priceLast")} placeholder="Price Earlier"/>
              <div className="p-4">Currency</div>
              <div className="p-4 col-span-2">
                  <Dropdown options={currencies} onSelect={onSelectCurrency}/>
              </div>
              {/*<input type="text"  className="p-4 col-span-2" value={product.currency} onChange={(e)=>onInputChange(e, "currency")} placeholder="Currency"/>*/}
              <div className="p-4">Category</div>
              <div className="p-4 col-span-2">
                  <Dropdown options={categories} onSelect={onSelectCategory}/>
              </div>
              {/*<input type="text"  className="p-4 col-span-2" value={product.category} onChange={(e)=>onInputChange(e, "category")}  placeholder="Category"/>*/}
              <div className="p-4">Stock</div>
              <input type="number"  className="p-4 col-span-2" value={product.countInStock} onChange={(e)=>onInputChange(e, "countInStock")} placeholder="Stock"/>
              {/*<div className="p-4">Rating</div>*/}
              {/*<input type="text"  className="p-4 col-span-2" value={product.rating} onChange={(e)=>onInputChange(e, "rating")} placeholder="Rating"/>*/}
              {/*<div className="p-4">No.of Reviews</div>*/}
              {/*<input type="text"  className="p-4 col-span-2" value={product.numReviews} onChange={(e)=>onInputChange(e, "numReviews")} placeholder="No.of Revies"/>*/}
              {/*<div className="p-4">Is Featured</div>*/}
              {/*<input type="text"  className="p-4 col-span-2" value={product.isFeatured} onChange={(e)=>onInputChange(e, "isFeatured")} placeholder="Is Featured"/>*/}
              <button className="col-span-3 p-10 bg-black border-primary text-white" onClick={()=> addItem()}>Add</button>
              <button className="col-span-3 p-10 bg-black border-primary text-white" onClick={()=> clearAll()}>Clear All</button>
          </div>
      </div>
  )
};

export default Admin;