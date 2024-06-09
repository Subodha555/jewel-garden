import Item from "./Item";
import img from "/imgs/jewel3.jpeg";
import {useEffect, useState} from "react";

const ItemList = ({sortBy, items}) => {
    const [sortedItems, setSortedItems] = useState([]);
    useEffect(() => {
        if (sortBy === "recent") {
            const tempSort = [...items].sort((a, b) => {
                const firstDate = new Date(a.date).getTime();
                const secondDate = new Date(b.date).getTime();
                return secondDate - firstDate;
            });
            setSortedItems(tempSort);
            console.log("on sort recent", tempSort);
        } else {
            const tempSort = [...items].sort((a, b) => a.priceNow - b.priceNow);
            setSortedItems(tempSort);
            console.log("on sort best offer", tempSort);
        }
    }, [sortBy, items]);
    return (
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">recommended for you</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {sortedItems.map((item)=>(
                    <Item key={item.id} img={img} currency="$" priceLast={item.priceLast} priceNow={item.priceNow} title={item.title} date={item.date}/>
                ))}
            </div>
        </div>
    )
};

export default ItemList;