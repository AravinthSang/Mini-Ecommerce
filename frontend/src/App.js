
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Productdetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {
  const [cartitem,setcartitem]=useState([])

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' />
          <Header cartitem={cartitem}/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/search' element={<Home/>} />
            <Route path="/product/:id"element={<Productdetail cartitem={cartitem} setcartitem={setcartitem}/>}/>
            <Route path='/cart' element={<Cart  cartitem={cartitem} setcartitem={setcartitem}/>} />
          </Routes>
        </div>
      </Router>

      <Footer></Footer>

    </div>
  );
}

export default App;
