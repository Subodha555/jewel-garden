import {useState} from "react";
import {useLocation} from "react-router-dom";
import {currencyFormatter} from "../utils/formatters";
import {maxItemsPurchaseCount} from "../utils/utils";

const ItemView = () => {
    const location = useLocation();
    const {img, title, priceLast, priceNow, currency, description} = location.state || {};
    const [quantity, setQuantity] = useState(1);
    const [imageLeft, setImageLeft] = useState(0);
    const [imageTop, setImageTop] = useState(0);
    const [showImagePreview, setShowImagePreview] = useState(false);

    const onHover = (event: React.MouseEvent) => {
        setShowImagePreview(true);
        setImageLeft(event.nativeEvent.offsetX);
        setImageTop(event.nativeEvent.offsetY);
    };

    const onMouseLeave = () => {
        setShowImagePreview(false);
    }

    return (
        <div>
            <div className="grid grid-cols-3 px-10 gap-4 h-[800px]">
                <div className="p-4">
                    <div>
                        <img src={img} alt="product 1" className="object-contain h-full group-hover: cursor-zoom-in" onMouseMove={onHover} onMouseLeave={onMouseLeave}/>
                    </div>
                </div>
                {!showImagePreview && (<div className="p-4 col-span-2">
                    <div className="text-6xl font-bold">{title}</div>
                    <div className="text-3xl text-gray-600 font-semibold">{description}</div>
                    <p className="text-3xl text-primary font-semibold ">{currencyFormatter(currency)}{priceNow}</p>
                    <p className="text-xl text-gray-400 line-through">{currencyFormatter(priceLast !== undefined ? currency : '')}{priceLast}</p>
                    <div className="flex items-center py-4">
                        <div className="pr-4">Quantity</div>
                        <button className="text-2xl bg-gray-200 h-8 w-8" disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                        <label className="text-xl px-4">{quantity}</label>
                        <button className="text-xl bg-gray-200 h-8 w-8" disabled={quantity === maxItemsPurchaseCount} onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <div className="flex">
                        <button className="py-1 px-4 text-xl text-center text-white bg-cyan-500 border border-cyan-500 rounded hover:bg-transparent hover:text-cyan-500 transition">Buy Now</button>
                        <span className="p-3"></span>
                        <button className="py-1 px-4 text-xl text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition">Add To Cart</button>
                    </div>
                </div>)}
                {showImagePreview && (<div className="p-4 col-span-2 overflow-hidden relative">
                    <img src={img} alt="product 1" className="object-contain absolute" style={{width: 2000, left: -imageLeft, top: -imageTop}}/>
                </div>)}
            </div>
        </div>
    )
};

export default ItemView;