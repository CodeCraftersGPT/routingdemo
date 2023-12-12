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
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Router>

   </div>
  );
}

export default App;
