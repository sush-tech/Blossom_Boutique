import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
// import ToggleColorMode from "../components/DarkMode";


const Home = () => {
  console.log("home page");
  return ( 
    <div>
      <CategoryMenu />
      <ProductList />
      <Cart />
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;
