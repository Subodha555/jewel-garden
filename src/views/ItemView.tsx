import Item from "../components/items/Item";
import img from "/imgs/jewel3.jpeg";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const ItemView = () => {
    const param = useParams();
    useEffect(() => {
        return () => {
            console.log("param", param);
        };
    }, []);

    return (
        <div>
            <Item  img={img} currency="$" priceLast={12} priceNow={10.99} title={"Cloe Ring - "+param.itemId} date="2090/10/01"/>
        </div>
    )
};

export default ItemView;