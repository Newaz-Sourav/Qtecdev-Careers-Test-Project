import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import { useRef,useEffect, useState } from "react";

export default function App() {

   const count = useRef(0); 
  const [val, setVal] = useState(0); 

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (count.current !== val) {
        setVal(count.current);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [val]);
  
  
  
  return (
    <div className="bg-gray-100 font-sans">
      <Navbar nav_val={val}></Navbar>
      <CartSidebar ref={count} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
           <Route path="/category/:name" element={<CategoryPage></CategoryPage>} />
        </Routes>
      <Footer></Footer>
    </div>
  );
}
