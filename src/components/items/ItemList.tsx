import Item from "./Item";
import img from "/imgs/jewel3.jpeg";
import {useEffect, useState} from "react";

const ItemList = ({items}) => {
    const [sortedItems, setSortedItems] = useState([]);
    const [sortBy, setSortBy] = useState("recent");

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
        <div className="mt-10">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">recommended for you</h2>
            <button className="bg-primary border border-primary px-8 py-3 font-medium mb-5
                    rounded-md hover:bg-transparent hover:text-primary" onClick={() => setSortBy("recent")}>Sort Most Recent</button>
            <button className="bg-primary border border-primary px-8 py-3 font-medium
                    rounded-md hover:bg-transparent hover:text-primary" onClick={() => setSortBy("price")}>Sort Best Price</button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {sortedItems.map((item)=>(
                    <Item key={item.id} img={img} currency="$" priceLast={item.priceLast} priceNow={item.priceNow} title={item.title} date={item.date}/>
                ))}
            </div>
        </div>
    )
};

export default ItemList;