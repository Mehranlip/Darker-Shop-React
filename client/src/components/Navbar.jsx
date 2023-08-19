import { useState, useContext, useEffect } from "react"
import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap"
import { BsCart } from 'react-icons/bs'
import { cartContext } from "../context/CartContext"
import CartProduct from "./CartProduct"

import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom"

import { useAuth } from "../context/AuthContext"


function Navbar({ darkMode, toggleDarkMode }) {
    const [showModal, setShowModal] = useState(false)
    const cart = useContext(cartContext)
    const productCounts = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const { isAuthenticated, logout } = useAuth();


    const handlerShow = () => {
        setShowModal(true)
    }
    const handlerClose = () => {
        setShowModal(false)
    }

    async function checkout() {
        const response = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: cart.items }),
        })

        const data = await response.json()

        if (data.url) {
            window.location.assign(data.url)
        }
    }





    return (
        <>
            <ToastContainer position="bottom-right mt-6" theme={darkMode ? "dark" : "light"} limit={3} autoClose={2000} />

            <NavbarBs className="border-bottom border-secondary">

                <NavbarBs.Collapse className="justify-content-between align-items-center">
                    <div>
                        <a href="/">
                            {darkMode ? <img width="170px" src="../../public/logo.svg" /> : <img width="170px" src="../../public/logo-dark.svg" />}
                        </a>
                    </div>
                    <div>

                        {darkMode ? <img onClick={toggleDarkMode} src="../../public/light-mode-icon.png" width={50} /> : <img onClick={toggleDarkMode} src="../../public/dark-mode-icon.png" width={50} />}

                    </div>
                    <div>
                        {/* login and register button */}
                        {isAuthenticated ? (
                            // If token is present (user is logged in)
                            <>
                                <Button onClick={logout} variant="btn btn-outline-secondary" className={darkMode ? "text-white mx-1" : "text-dark mx-1"}>خروج</Button>
                                <Button variant="btn btn-outline-secondary" className={darkMode ? "text-white mx-1" : "text-dark mx-1"}><a href="/dashboard">داشبورد</a></Button>
                            </>
                        ) : (
                            // If token is not present (user is not logged in)
                            <>
                                <Button variant="btn btn-outline-secondary" className={darkMode ? "text-white mx-1" : "text-dark mx-1"}><Link to="/login">ورود</Link></Button>
                                <Button variant="btn btn-outline-secondary" className={darkMode ? "text-white mx-1" : "text-dark mx-1"}><Link to="/register">ثبت نام</Link></Button>
                            </>
                        )}
                        {/* end login and register button */}
                        <Button onClick={handlerShow} variant="btn btn-outline-secondary" className={darkMode ? "text-white" : "text-dark"}>
                            ({productCounts})
                            <BsCart className="mx-2"></BsCart>
                            سبدخرید
                        </Button>
                    </div>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handlerClose} contentClassName="card-bg" dir="rtl">
                <Modal.Header className={darkMode ? "dark-mode" : "light-mode"}>
                    <Modal.Body >
                        {productCounts > 0 ? (
                            <>
                                <h3 className='mb-4'>سبد خرید</h3>
                                {cart.items.map((item) => (
                                    <CartProduct darkMode={darkMode}
                                        key={item.id}
                                        id={item.id}
                                        quantity={item.quantity}
                                    ></CartProduct>
                                ))}
                                <hr />
                                <h4>مجموع قیمت: {cart.getTotalAmount()}</h4>
                            </>
                        ) : (
                            <h3>سبد خرید خالی است</h3>
                        )}
                        <Button className="mt-4" variant="btn btn-light" onClick={checkout}>ثبت سفارش</Button>
                        <Button onClick={handlerClose} variant="btn btn-outline-secondary" className={darkMode ? "mt-4 mx-3 text-white" : "mt-4 mx-3 text-dark"}>بستن</Button>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )
}

export default Navbar