import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import { cartContext } from "../context/CartContext"
import { Link } from "react-router-dom"




function ProductItem({ product }) {
    const cart = useContext(cartContext)
    const productQuantity = cart.getProductQuantity(product.id)


    return (
        <Card className="mt-3 card-bg">
            <Card.Body className="">
                <Link className="text-decoration-none" to={`/products/${product.id}`}>
                    <Card.Img className="rounded" variant="top" src={product.image} height="200px" style={{ objectFit: "cover" }} />
                    <Card.Title align="right" className="text-color pt-4">
                        {product.title}
                    </Card.Title>
                    <Card.Text align="right" className="text-color">
                        قیمت :  {product.price} تومان
                    </Card.Text>
                </Link>
                <div className="mt-3">
                    {productQuantity > 0 ? (
                        <>
                            <Form as={Row}>
                                <Form.Label column="true" sm={6} className="text-color">
                                    تعداد : {productQuantity}
                                </Form.Label>
                                <Col sm="6">
                                    <Button sm="6" className="mx-2 text-color" variant="btn btn-outline-secondary"
                                        onClick={() => cart.addItemToCart(product.id)}
                                    >+</Button>
                                    <Button sm="6" className="mx-2 text-color" variant="btn btn-outline-secondary"
                                        onClick={() => cart.removeItemFromCart(product.id)}
                                    >-</Button>
                                </Col>
                            </Form>
                        </>
                    ) : (
                        <Button onClick={() => cart.addItemToCart(product.id)} variant="btn btn-outline-secondary" className="text-color">
                            افزودن به سبد خرید
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductItem