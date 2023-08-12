import { useState } from "react";
import { Row, Col } from "react-bootstrap"

import { productList } from "../data/items"
import productCat from "../data/categoeis";


import ProductItem from './../components/ProductItem';


const getFilteredItem = (query, items, checkBoxValue) => {
    if (checkBoxValue) {
        return items.filter((item) => item.cat.includes(checkBoxValue))
    }
    if (!query) {
        return items
    }
    return items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
}


function Shop() {
    const [query, setQuery] = useState("")
    const [checkBoxValue, setCheckboxValue] = useState()

    const filteredItems = getFilteredItem(query, productList, checkBoxValue)

    console.log(checkBoxValue);

    const handleCheckBoxValue = (e) => {
        const newData = e.target.value;
        setCheckboxValue(newData);
    };

    return (
        <div dir="rtl">
            <div>
                <input className="mt-3 rounded p-1" type="text" placeholder="جستجو محصول" dir="rtl" onChange={(e) => setQuery(e.target.value)} />
                {productCat.map((item) => (
                    <label className="mx-2" key={item.cat}>
                        <input className="mx-1"
                            onChange={handleCheckBoxValue}
                            type="checkbox"
                            value={item.cat} />
                        {item.namecat}
                    </label>
                ))}

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