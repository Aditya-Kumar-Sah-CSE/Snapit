import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

import { Button } from "./ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { setUser } from '../redux/authSlice'
const Navbar = ({ onSearch }) => {
  const { cartCount } = useCart();

// for login / logout 

  const {user} = useSelector(store => store.auth)
 
const  dispatch = useDispatch()
const navigate = useNavigate()
const logoutHandler = async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/v1/user/logout`,
      {withCredentials:true}
    )
if(res.data.success){
  navigate("/")
  dispatch(setUser(null))
  toast.success(res.data.message)
}

  } catch (error) {
    console.log('error', error)
    toast.error(error)
  }
}

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <Link to={'/'}>
          <img src={logo} alt="Snapit Logo" className="logo" />
        </Link>
        <h2>SNAPIT</h2>
      </div>

      {/* DIV 1 : NAV + SEARCH */}
      <div className="nav-middle">
        <ul className="nav-links">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/category'}>Category</Link></li>
          <li><Link to={'/orders'}>Orders</Link></li>
          <li><Link to="/track">Track Order</Link></li>
        </ul>

        <div className="nav-search">
          <input
            placeholder="Search groceries..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* DIV 2 : LOGIN + CART */}
      <div className="nav-right">
        <div className="account">
{/* login /log out */}

         {
    user ? 
    <div>
<div className="ml-7 md:flex gap-2 "> 
 <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
      <Button onClick={logoutHandler}>Logout</Button> 
</div>
    </div> : <div
    className='ml-7 md:flex gap-2'
    >
      <Link to={"/login"}>
      <Button >Login</Button>  </Link>
      <Link to={"/signup"}><Button>Signup</Button></Link>
      
    
    </div>
  }
        </div>
        <div className="cart">
          <Link to='/cart'> 🛒
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
