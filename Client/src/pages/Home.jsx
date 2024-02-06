import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";

const Home = () => {
  console.log("home page");
  return ( 
    <div>
      <p>welcome to the home page</p>
      <CategoryMenu> category menu </CategoryMenu>
      <ProductList />
    </div>
  );
};

export default Home;
