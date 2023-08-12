import { useState } from "react";
import { Row, Col } from "react-bootstrap"

import { productList } from "../data/items"

import ProductItem from './../components/ProductItem';


const getFilteredItem = (query, items) => {
    if (!query) {
        return items
    }
    return items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
}


function Shop() {
    const [query, setQuery] = useState("")

    const filteredItems = getFilteredItem(query, productList)

    return (
        <div dir="rtl">
            <div>
                <input className="mt-3 rounded p-1" type="text" placeholder="جستجو محصول" dir="rtl" onChange={(e) => setQuery(e.target.value)} />
            </div>
            <Row xs={1} md={4} className="g-4">
                {filteredItems.map((item) => (
                    <Col key={item.id} align="center">
                        <ProductItem product={item} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Shop