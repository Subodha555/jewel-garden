interface Props {
    img: string,
    description: string
}

const ItemCategory = ({img, description}: Props)=> {
    return (
        <div className="relative rounded-sm overflow-hidden group">
            <img src={img} alt="category 1" className="w-full"/>
            <a href="#"
               className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{description}</a>
        </div>
    );
}

export default ItemCategory;
