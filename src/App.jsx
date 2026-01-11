import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <>
      <Navbar />

      {/* ROUTES HERE */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
