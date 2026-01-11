import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category from "./components/Category";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* ROUTES HERE */}
      {/* <RouterProvider router={router} /> */}

      <Navbar onSearch={setSearchTerm} />
      <div className={isHomePage ? "" : "main-content-wrapper"}>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category" element={<Categories searchTerm={searchTerm} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop searchTerm={searchTerm} />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
