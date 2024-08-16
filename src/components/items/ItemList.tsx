import { useEffect, useState } from "react";
import { fetchItems, Item as ItemType } from "../../store/redux/reducers/itemList";
import { useSelector } from "react-redux";
import {useAppDispatch} from "../../store/redux/store"
import { RootState } from "../../store/redux/store";
import {RotatingLines} from "react-loader-spinner";
import Item from "./Item";

const ItemList = () => {
    const [sortedItems, setSortedItems] = useState<ItemType[]>([]);
    // const [sortBy, setSortBy] = useState("recent");
    const [isLoading, setIsLoading] = useState(true);
    const items = useSelector((state: RootState) => state.itemList.items) || [];
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchItems());
        } else {
            setIsLoading(false);
        }
    }, [dispatch, items.length]);


    useEffect(() => {
        if (items.length > 0) {
            let tempSort = [];
            // if (sortBy === "recent") {
                tempSort = [...items].sort((a, b) => {
                    const firstDate = new Date(a.dateCreated).getTime();
                    const secondDate = new Date(b.dateCreated).getTime();
                    return secondDate - firstDate;
                });
            // } else {
            //     tempSort = [...items].sort((a, b) => a.price - b.price);
            // }
            setSortedItems(tempSort);
        }
    }, [items]);

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Recommended for You</h2>
            {/*<button*/}
            {/*    className="bg-primary border border-primary px-8 py-3 font-medium mb-5 rounded-md hover:bg-transparent hover:text-primary"*/}
            {/*    onClick={() => setSortBy("recent")}*/}
            {/*>*/}
            {/*    Sort Most Recent*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className="bg-primary border border-primary px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"*/}
            {/*    onClick={() => setSortBy("price")}*/}
            {/*>*/}
            {/*    Sort Best Price*/}
            {/*</button>*/}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        img={item.image}
                        currency={item.currency}
                        priceLast={item.priceLast}
                        priceNow={item.price}
                        title={item.name}
                        description={item.description}
                        date={item.dateCreated}
                    />
                ))}
            </div>
            {isLoading &&
                <div className="flex justify-center">
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}/>
                </div>}
        </div>
    );
};

export default ItemList;