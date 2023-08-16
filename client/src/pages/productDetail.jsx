import React from "react"
import { useParams } from "react-router-dom"
import { productList } from "../data/items"
import { Row, Col, Button, Form } from "react-bootstrap"

import { useContext } from "react"
import { cartContext } from "../context/CartContext"


import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function ProductDetail() {

    const { productId } = useParams()
    const thisProduct = productList.find(prod => prod.id === productId)


    const cart = useContext(cartContext)
    const productQuantity = cart.getProductQuantity(thisProduct.id)


    console.log(productQuantity);

    return (
        <Row className="mt-5">
            <Col className="order-1 order-md-0" sm={12} md={8}>
                <div className="p-0 pm-5">
                    <h1>{thisProduct.title}</h1>
                    <p className="text-justify">
                        {thisProduct.description}
                    </p>
                    {/* add to cart button */}
                    <Row>
                        <Col sm={12} md={5}>
                            <div className="mt-3">
                                {productQuantity > 0 ? (
                                    <>
                                        <Form as={Row}>
                                            <Form.Label column="true" sm={6} className="text-color">
                                                تعداد : {productQuantity}
                                            </Form.Label>
                                            <Col sm="6">
                                                <Button sm="6" className="mx-2 text-color" variant="btn btn-outline-secondary"
                                                    onClick={() => cart.addItemToCart(thisProduct.id)}
                                                >+</Button>
                                                <Button sm="6" className="mx-2 text-color" variant="btn btn-outline-secondary"
                                                    onClick={() => cart.removeItemFromCart(thisProduct.id)}
                                                >-</Button>
                                            </Col>
                                        </Form>
                                    </>
                                ) : (
                                    <Button onClick={() => cart.addItemToCart(thisProduct.id)} variant="btn btn-outline-secondary" className="text-color">
                                        افزودن به سبد خرید
                                    </Button>
                                )}
                            </div>
                        </Col>
                    </Row>
                    {/* end add to button cart */}
                </div>
            </Col>
            <Col className="order-0 order-md-1" sm={12} md={4}>
                <div className="p-3">
                    <TransformWrapper>
                        <TransformComponent>
                            <img className="rounded" src={thisProduct.image} width="320" height="300" />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetail