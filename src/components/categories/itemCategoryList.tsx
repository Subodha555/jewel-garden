import img from "/imgs/jewel3.jpeg";
import ItemCategory from "./ItemCategory";

const ItemCategoryList = ()=> {
    return (
        <div>
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid grid-cols-6 gap-6">
                <ItemCategory img={img} description={"Necklaces"}/>
                <ItemCategory img={img} description={"Rings"}/>
                <ItemCategory img={img} description={"Bracelets"}/>
                <ItemCategory img={img} description={"Earings"}/>
                <ItemCategory img={img} description={"Anklets"}/>
                <ItemCategory img={img} description={"Pendants"}/>
            </div>
        </div>
    );
}

export default ItemCategoryList;
