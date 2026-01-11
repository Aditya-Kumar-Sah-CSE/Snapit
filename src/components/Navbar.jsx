import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  const cartCount = 3;
// const user = false;
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

         <Link to={'/'} 
          // className="text-gray-700 hover:text-black visited:text-gray-700 transition"
         >
         <li>Home</li>
         </Link>
         <Link to={'/category'}
          // className="text-gray-700 hover:text-black visited:text-gray-700 transition"
         >
         <li>Category</li>
         </Link>
          <Link to={'/orders'}> 
          <li>Orders</li>
          </Link>
         <Link to="/track">
          <li>Track Order</li>
          </Link>
         
        </ul>

        <div className="nav-search">
          <input placeholder="Search groceries..." />
        </div>
      </div>

      {/* DIV 2 : LOGIN + CART */}
      <div className="nav-right">


        <div className="account">
         <Link to='/login'>Login</Link> 
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
