import logo from "../assets/logo.png";

const Navbar = () => {
  const cartCount = 3;

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="Snapit Logo" className="logo" />
        <h2>SNAPIT</h2>
      </div>

      {/* DIV 1 : NAV + SEARCH */}
      <div className="nav-middle">
        <ul className="nav-links">
          <li>Home</li>
          <li>All Products</li>
          <li>Orders</li>
          <li>Track Order</li>
        </ul>

        <div className="nav-search">
          <input placeholder="Search groceries..." />
        </div>
      </div>

      {/* DIV 2 : LOGIN + CART */}
      <div className="nav-right">
        <div className="account">👤 Login</div>
        <div className="cart">
          🛒
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
