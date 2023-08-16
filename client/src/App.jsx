import { Route, Routes } from "react-router-dom"

import { Container } from "react-bootstrap"

import { CartProvider } from "./context/CartContext"

import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import Success from "./pages/success"
import Footer from "./components/Footer"

import ProductDetail from "./pages/productDetail"
import { useState } from "react"




function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <CartProvider>
        <Container >
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route index element={<Shop />} />
            <Route path='/success' element={<Success />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </Container>
      </CartProvider>
    </div>

  )
}

export default App