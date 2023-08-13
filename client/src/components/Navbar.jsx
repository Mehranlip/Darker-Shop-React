import { useState, useContext } from "react"
import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap"
import { BsCart } from 'react-icons/bs'
import { cartContext } from "../context/CartContext"
import CartProduct from "./CartProduct"


function Navbar() {
    const [showModal, setShowModal] = useState(false)
    const cart = useContext(cartContext)
    const productCounts = cart.items.reduce((sum, product) => sum + product.quantity, 0)

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
            <NavbarBs className="border-bottom border-secondary">
                <NavbarBs.Collapse className="justify-content-between align-items-center">
                    <div>
                        <a href="/">
                            <img width="170px" src="../../public/logo.svg" />
                        </a>
                    </div>
                    <Button onClick={handlerShow} variant="btn btn-outline-secondary" className="text-white">
                        ({productCounts})
                        <BsCart className="mx-2"></BsCart>
                        سبدخرید
                    </Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handlerClose} contentClassName="card-bg" dir="rtl">
                <Modal.Header>
                    <Modal.Body>
                        {productCounts > 0 ? (
                            <>
                                <h3 className='mb-4'>سبد خرید</h3>
                                {cart.items.map((item) => (
                                    <CartProduct
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
                        <Button onClick={handlerClose} variant="btn btn-outline-secondary" className="mt-4 mx-3 text-white">بستن</Button>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )
}

export default Navbar