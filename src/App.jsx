
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/onlineShop/Navbar"
import Hero from "./components/onlineShop/Hero"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <div className="w-screen">
                <Navbar />
                <div className="pt-24 px-16">
                  <Hero />
                </div>
              </div>
            </>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
