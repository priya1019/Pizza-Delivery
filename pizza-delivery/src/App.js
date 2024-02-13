import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import Menu from './Component/Menu';
import AddingCart from './Component/AddingCart';
import Profile from './Component/Profile';
import Checkout from './Component/Checkout'
import Order from './Component/Order';
import Allorder from './Component/Allorder';
import UpdProfile from './Component/UpdProfile'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/cart" element={<AddingCart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="allorders" element={<Allorder/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/upd_profile" element={<UpdProfile/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;