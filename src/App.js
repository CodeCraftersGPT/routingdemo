import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import About from './Routing/About';
import Home from './Routing/Home';
import Navigation from './Routing/Navigation';
import Registration from './Registration';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Routing/Products';
import Orders from './Routing/Order';
import ProductDetail from './Routing/ProductDetail';
import FeaturedProducts from './Routing/FeaturedProducts';
import NewProducts from './Routing/NewProducts';



function App() {
  return (
   <div>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/* Define route for the product */}
                <Route path="/product" element={<Product/>}>
                   <Route path="featuredproducts" element={<FeaturedProducts/>}/>
                   <Route path="newproducts" element={<NewProducts/>}/>
                  </Route>
                {/* Define route for the product detail */}
                <Route path="/product/:id" element={<ProductDetail/>}/>
                {/* Define route for the featured products */}
             
                <Route path="/orders" element={<Orders/>}/>

                {/* define redirect to Home if path does not match any */}
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Router>

   </div>
  );
}

export default App;
