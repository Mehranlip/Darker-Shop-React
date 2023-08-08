import { useState, useContext } from "react"
import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap"
import { BsCart } from 'react-icons/bs'
import { cartContext } from "../context/CartContext"


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

    return (
        <>
            <NavbarBs className="border-bottom border-secondary">
                <NavbarBs.Collapse className="justify-content-end">
                    <Button onClick={handlerShow} variant="btn btn-outline-secondary" className="text-white">
                        ({productCounts})
                        <BsCart className="mx-2"></BsCart>
                        سبدخرید
                    </Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handlerClose} contentClassName="card-bg" dir="rtl">
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title>
                        سبد خرید
                    </Modal.Title>
                    <Modal.Body>
                        محصول
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )
}

export default Navbar