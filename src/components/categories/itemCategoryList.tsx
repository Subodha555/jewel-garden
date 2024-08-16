import ItemCategory from "./ItemCategory";
import {categories} from "../../utils/utils"

const ItemCategoryList = ()=> {
    return (
        <div>
            <h2 data-testid="cypress-shop-category" className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid grid-cols-6 gap-6">
                {categories.map((category, index)=> (
                    <ItemCategory key={index} img={category.img} description={category.label}/>
                ))}
            </div>
        </div>
    );
}

export default ItemCategoryList;
