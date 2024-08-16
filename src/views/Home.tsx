import ItemCategoryList from "../components/categories/itemCategoryList";
import ItemList from "../components/items/ItemList";

const Home = () => {
    // Todo: add a carousal
  return (
      <div className="py-16 px-16">
          <ItemCategoryList/>
          <ItemList/>
      </div>
  )
};

export default Home;