import logo from './logo.svg';
import './App.css';
import Items from "./Items";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './Item';
import logo1 from "./shopping-cart.png";
import {useSelector} from "react-redux"

import {useState} from "react";
import CartModal from "./CartModal";
import {useNavigate} from "react-router-dom";
import Search from './Search';
import Bookmark from "./Bookmark";
function App() {

  const navigate = useNavigate();
  const [show,setShow] = useState(false);
  const {total} = useSelector(state => state.product);
  return (
    
    <>
    {/* <Navbar /> */}
    
    <div className="heading">
      <div onClick={()=> navigate("/")}>Ebay</div>
      <div onClick={() =>navigate('/search')} className='search'>Search Item</div>
      <div className='cart' onClick={() =>{console.log("clicked",show); setShow(true)}}>Cart
      <img src={logo1} />
      <span >{total}</span></div>
      <div className='search' onClick={()=> navigate("/bookmark")}>Bookmarks</div>
    
    </div>
    {show && (<CartModal />)}
    <Routes>
      <Route path="/" element={<Items />} />
      <Route path="/:id" element={<Item />} />
      <Route path="/search" element={<Search />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
   
    </>
    
  );
}

export default App;
