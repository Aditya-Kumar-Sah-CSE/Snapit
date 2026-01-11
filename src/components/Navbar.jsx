import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

const Navbar = ({ onSearch }) => {
  const { cartCount } = useCart();

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
