import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
// import ToggleColorMode from "../components/DarkMode";
import Header from "../components/Header";


const Home = () => {
  console.log("home page");
  return ( 
    <div>
      <CategoryMenu />
      <Header/>
      <ProductList />
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;
