import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import ToggleColorMode from "../components/DarkMode";


const Home = () => {
  console.log("home page");
  return ( 
    <div>
      <p>welcome to the home page</p>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
