import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <Navbar></Navbar>
      <CartSidebar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
           <Route path="/category/:name" element={<CategoryPage></CategoryPage>} />
        </Routes>
      <Footer></Footer>
    </div>
  );
}
