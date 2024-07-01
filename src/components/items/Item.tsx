import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/redux/store"
import {updateName} from "../../store/redux/reducers/jewelleryItem";
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {currencyFormatter} from "../../utils/formatters";

interface Props {
    id: string,
    img: string,
    priceLast?: number,
    priceNow: number,
    currency: string,
    title: string,
    description: string,
    date: string
}

const Item = ({id, img, title, priceLast, priceNow, currency, date, description}: Props) => {
    const itemName = useSelector((state: RootState) => state.jewelleryItem.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        console.log("itemName", itemName);
    }, []);

    const onClickItem = () => {
        dispatch(updateName("Jade Ring"));
        navigate(`/dashboard/item/${id}`, {state: {id, img, title, priceLast, priceNow, currency, date, description}});
    };
    return (
        <div className="bg-white shadow rounded overflow-hidden group" onClick={onClickItem}>
            <div className="relative h-64 flex items-center justify-center">
                <img src={img} alt="product 1" className="object-contain h-full"/>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a
                           className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                           title="view product">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </a>
                        <a
                           className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                           title="add to wishlist">
                            <FontAwesomeIcon icon={faHeart}/>
                        </a>
                    </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <a>
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{title}</h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold ">{currencyFormatter(currency)}{priceNow}</p>
                    <p className="text-sm text-gray-400 line-through">{currencyFormatter(priceLast !== undefined ? currency : '')}{priceLast}</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                    </div>
                    <div className="text-xs text-gray-500 ml-3">(150)</div>
                    <div className="text-xs text-gray-500 ml-3">{date}</div>
                </div>
            </div>
            <a
               className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                to cart</a>
        </div>
    )
};

export default Item;