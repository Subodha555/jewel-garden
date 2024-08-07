import Item from "./Item";
import { useEffect, useState } from "react";
import { fetchItems, Item as ItemType } from "../../store/redux/reducers/itemList";
import { useSelector } from "react-redux";
import {useAppDispatch} from "../../store/redux/store"
import { RootState } from "../../store/redux/store";
import {RotatingLines} from "react-loader-spinner";

const ItemList = () => {
    const [sortedItems, setSortedItems] = useState<ItemType[]>([]);
    // const [sortBy, setSortBy] = useState("recent");
    const [isLoading, setIsLoading] = useState(true);
    const items = useSelector((state: RootState) => state.itemList.items) || []; // removeditems.data since this is fixed by store
    // const items = [
    //     {
    //         id: "001",
    //         priceLast: 12,
    //         priceNow: 10.99,
    //         title: "Cloe Ring",
    //         date: "2024/03/01"
    //     },
    //     {
    //         id: "002",
    //         priceLast: 15,
    //         priceNow: 12.99,
    //         title: "Silver Necklace",
    //         date: "2024/02/01"
    //     },
    //     {
    //         id: "003",
    //         priceLast: 56,
    //         priceNow: 30.99,
    //         title: "Gold Chain",
    //         date: "2024/03/29"
    //     },
    //     {
    //         id: "004",
    //         priceLast: 12,
    //         priceNow: 8.99,
    //         title: "Silver Ring",
    //         date: "2024/04/01"
    //     },
    //     {
    //         id: "005",
    //         priceLast: 122,
    //         priceNow: 98.99,
    //         title: "Emarald Bracelet",
    //         date: "2024/03/05"
    //     },
    //     {
    //         id: "006",
    //         priceLast: 122,
    //         priceNow: 98.99,
    //         title: "Emarald Bracelet",
    //         date: "2024/03/09"
    //     },
    //     {
    //         id: "007",
    //         priceLast: 122,
    //         priceNow: 98.99,
    //         title: "Emarald Bracelet",
    //         date: "2024/03/03"
    //     },
    //     {
    //         id: "008",
    //         priceLast: 122,
    //         priceNow: 98.99,
    //         title: "Emarald Bracelet",
    //         date: "2023/03/01"
    //     }
    // ];
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