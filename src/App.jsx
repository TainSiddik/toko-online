import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Navbar from "./components/onlineShop/Navbar"
import Hero from "./components/onlineShop/Hero"
import Sidebar from "./components/onlineShop/Sidebar"
import Produk from "./components/onlineShop/Produk"
import Detailproduk from "./components/onlineShop/Detailproduk"

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div className="pt-24">
                <Hero />
              </div>
            </>
          } />

          <Route path="/produk" element={
            <>
              <Navbar />
              <div className="produk pt-4 mb-2 px-8 md:px-16 flex gap-4">
                <div className="sidebar hidden md:flex">
                  <Sidebar onSelectCategory={handleSelectCategory} />
                </div>
                <Produk selectedCategory={selectedCategory} />
              </div>
            </>
          } />

          <Route path="/produk/:kategori_id/:id" element={
            <>
              <Navbar />
              <div className="detail pt-4 mb-2 px-8 md:px-16">
                <Detailproduk />
              </div>
            </>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
