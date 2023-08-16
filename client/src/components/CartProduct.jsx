import { useContext } from 'react'
import { Button, Row, Col } from 'react-bootstrap'

import { cartContext } from '../context/CartContext'

import { getProductData } from '../data/items'

function CartProduct({ id, quantity, darkMode }) {
    const cart = useContext(cartContext)

    const productData = getProductData(id)

    return (
        <>
            <Row>
                <Col sm={3}>
                    <img className='rounded' src={productData.image} width={100} height={100} />
                </Col>
                <Col sm={9}>
                    <p>اسم محصول : {productData.title}</p>
                    <p>تعداد: {quantity}</p>
                    <p>قیمت: {quantity * productData.price}</p>

                    <Button
                        size='sm'
                        className={darkMode ? 'mb-5 text-white' : 'mb-5 text-dark'}
                        variant='btn btn-outline-secondary'
                        onClick={() => cart.deleteFromCart(id)}
                    >
                        حذف محصول
                    </Button>
                </Col>
            </Row>

        </>
    )
}

export default CartProduct