import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";



import { Container } from "react-bootstrap";

import { CartProvider } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";


import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Success from "./pages/success";
import Footer from "./components/Footer";

import ProductDetail from "./pages/productDetail";
import LoginForm from "./pages/Login";
import RegistrationForm from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Checkout from "./pages/Checkout";


function App() {

  const { isAuthenticated } = useAuth()


  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (

    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <CartProvider>
        <Container>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>

            <Route index element={<Shop />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route
              path="/success"
              element={
                isAuthenticated ? <Success /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/checkout"
              element={
                isAuthenticated ? <Checkout /> : <Navigate to="/login" />
              }
            />
          </Routes>
          <Footer />
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;
