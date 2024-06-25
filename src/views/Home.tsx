import Card from "../components/Card"
import img from "/imgs/jewel3.jpeg";
import ItemCategoryList from "../components/categories/itemCategoryList";
import ItemList from "../components/items/ItemList";
import {useState} from "react";

const items = [
    {
        id: "001",
        priceLast: 12,
        priceNow: 10.99,
        title: "Cloe Ring",
        date: "2024/03/01"
    },
    {
        id: "002",
        priceLast: 15,
        priceNow: 12.99,
        title: "Silver Necklace",
        date: "2024/02/01"
    },
    {
        id: "003",
        priceLast: 56,
        priceNow: 30.99,
        title: "Gold Chain",
        date: "2024/03/29"
    },
    {
        id: "004",
        priceLast: 12,
        priceNow: 8.99,
        title: "Silver Ring",
        date: "2024/04/01"
    },
    {
        id: "005",
        priceLast: 122,
        priceNow: 98.99,
        title: "Emarald Bracelet",
        date: "2024/03/05"
    },
    {
        id: "006",
        priceLast: 122,
        priceNow: 98.99,
        title: "Emarald Bracelet",
        date: "2024/03/09"
    },
    {
        id: "007",
        priceLast: 122,
        priceNow: 98.99,
        title: "Emarald Bracelet",
        date: "2024/03/03"
    },
    {
        id: "008",
        priceLast: 122,
        priceNow: 98.99,
        title: "Emarald Bracelet",
        date: "2023/03/01"
    }
];

const Home = () => {
    const [sortBy, setSortBy] = useState("recent");

  return (
      <>
          <ItemCategoryList/>

          <div>Sort By</div>
          <button className="bg-primary border border-primary px-8 py-3 font-medium
                    rounded-md hover:bg-transparent hover:text-primary" onClick={() => setSortBy("recent")}>Most Recent</button>
          <button className="bg-primary border border-primary px-8 py-3 font-medium
                    rounded-md hover:bg-transparent hover:text-primary" onClick={() => setSortBy("price")}>Best Price</button>
          <ItemList sortBy={sortBy} items={items}/>
      </>
  )
};

export default Home;