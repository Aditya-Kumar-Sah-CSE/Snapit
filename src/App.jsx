import { useEffect, useState } from "react";
import { Routes,Route } from "react-router-dom";
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
// import About from "./pages/About";
// import Contact from "./pages/Contact";

//   const router = createBrowserRouter([
//  {
//    path:"/",
//    element:<><Navbar/><Home/> </>
//   },
//  {
//    path:"/category",
//   element:<> <Navbar/><Category/> <Footer /></>
  
//  },
//  {
//    path:"/orders",
//   element:<><Navbar/><Orders/>  <Footer /></>
//  },
//   {
//    path:"/track",
//   element:<><Navbar/><TrackOrder/>  <Footer /></>
//  },
//  {
//    path:"/login",
//   element:<><Navbar/><Login/><Footer/> </>
//  },
//  {
//    path:"/signup",
//   element:<><Navbar/><Signup/><Footer/> </>
//  },


// ])
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }



  return (
    <>
      {/* ROUTES HERE */}
       {/* <RouterProvider router={router} /> */}

             <Navbar />
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/track" element={<TrackOrder />}/> 
         <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     
   


      <Footer />
    </>
  );
}

export default App;
