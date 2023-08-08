import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import { cartContext } from "../context/CartContext"


function ProductItem({ product }) {
    const cart = useContext(cartContext)
    const productQuantity = cart.getProductQuantity(product.id)


    return (
        <Card className="mt-5 card-bg">
            <Card.Body>
                <Card.Img className="rounded" variant="top" src={product.image} height="200px" style={{ objectFit: "cover" }} />
                <Card.Title align="right" className="text-light pt-4">
                    {product.title}
                </Card.Title>
                <Card.Text align="right" className="text-light">
                    قیمت :  {product.price} تومان
                </Card.Text>
                {productQuantity > 0 ? (
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm={6} className="text-white">
                                تعداد : {productQuantity}
                            </Form.Label>
                            <Col sm="6">
                                <Button sm="6" className="mx-2 text-white" variant="btn btn-outline-secondary"
                                    onClick={() => cart.addItemToCart(product.id)}
                                >+</Button>
                                <Button sm="6" className="mx-2 text-white" variant="btn btn-outline-secondary"
                                    onClick={() => cart.removeItemFromCart(product.id)}
                                >-</Button>
                            </Col>
                        </Form>
                    </>
                ) : (
                    <Button onClick={() => cart.addItemToCart(product.id)} variant="btn btn-outline-secondary" className="text-white">
                        افزودن به سبد خرید
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default ProductItem