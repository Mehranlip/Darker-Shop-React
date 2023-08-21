import { useState, useContext, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { cartContext } from "../context/CartContext"
import { Row, Col, Form, Button } from "react-bootstrap"
import CartProduct from "../components/CartProduct"





function Checkout() {
    const cart = useContext(cartContext)
    const productCounts = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    const { token, userId } = useAuth();


    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [darkMode, setDarkMode] = useState(true)

    const userData = { name, lastName, address }

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setDarkMode(true)
        }
        if (localStorage.getItem("theme") === "light") {
            setDarkMode(false)
        }
    }, [])




    async function checkout() {
        try {
            const response = await fetch('http://localhost:3000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ items: cart.items, userId: userId, userData: userData }),
            });

            if (!response.ok) {
                const errorData = await response.text(); // Get the actual error response
                console.error('Checkout request failed:', errorData);
                return;
            }

            const data = await response.json();

            if (data.url) {
                window.location.assign(data.url);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }


    return (
        <>
            <h3 className="mt-3 mb-3">تسویه نهایی</h3>
            <Row>
                <Col sm={12} md={6}>
                    <Form>
                        <h3>   اطلاعات کاربر</h3>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label> نام تحویل گیرنده </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="مهران"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>نام خانوادگی  </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="اسدی"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>آدرس تحویل گیرنده </Form.Label>
                            <Form.Control
                                as="textarea" rows={4}
                                type="text"
                                placeholder="تهران قیطریه خیابان بهاران"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>

                    </Form>
                </Col>
                <Col sm={12} md={6}>
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
                            <Row>
                                <Col sm={12} md={8}>
                                    <h3 className="">مجموع قیمت: {cart.getTotalAmount()}</h3>
                                </Col>
                                <Col sm={12} md={4}>
                                    <Button variant="btn btn-outline-success" onClick={checkout}>
                                        خرید نهایی
                                    </Button>
                                </Col>
                            </Row>

                        </>
                    ) : (
                        <h3>سبد خرید خالی است</h3>
                    )}
                </Col>
            </Row>

        </>
    )
}

export default Checkout