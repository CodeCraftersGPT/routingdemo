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



function App() {
  return (
   <div>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/* Define route for the product */}
                <Route path="/product" element={<Product/>}/>
                {/* Define route for the orders */}
                <Route path="/orders" element={<Orders/>}/>
                {/* Define route for the registration */}
                {/* define redirect to Home if path does not match any */}
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Router>

   </div>
  );
}

export default App;
