import { useState } from "react";
import { Row, Col } from "react-bootstrap"

import { productList } from "../data/items"
import productCat from "../data/categoeis";


import ProductItem from './../components/ProductItem';


const getFilteredItem = (query, items, checkBoxValue, rangePrice) => {
    if (rangePrice) {
        return items.filter((item) => item.price >= rangePrice)
    }
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
    const [rangePrice, setRangePrice] = useState(0)

    const filteredItems = getFilteredItem(query, productList, checkBoxValue, rangePrice)


    const handleCheckBoxValue = (e) => {
        const newData = e.target.value;
        setCheckboxValue(newData);
    };

    return (
        <div dir="rtl">
            <Row>
                <Col sm={12} md={2}>
                    <div className="row">
                        {/* input search */}
                        <input className="mt-2 rounded p-1" type="text" placeholder="جستجو محصول" dir="rtl" onChange={(e) => setQuery(e.target.value)} />
                        {/* end input search */}
                        {/* start filtered cat */}
                        <hr className="m-2" />
                        <span>فیلتر بر اساس دسته بندی</span>
                        <hr className="m-2" />
                        {productCat.map((item) => (
                            <ul className="list-unstyled">
                                <li >
                                    <label key={item.cat}>
                                        <input className="mx-2"
                                            onChange={handleCheckBoxValue}
                                            type="checkbox"
                                            value={item.cat} />
                                        {item.namecat}
                                    </label>
                                </li>
                            </ul>
                        ))}
                        {/* end filtered cat */}
                        {/* start filtered price */}
                        <hr className="m-2" />
                        <span>فیلتر بر اساس قیمت</span>
                        <hr className="m-2" />
                        <label for="customRange2" class="form-label">{`از 0 تا ${rangePrice}`} {" "}تومان</label>
                        <input type="range" class="form-range" min="0" max="180000000" id="customRange2" onChange={(e) => setRangePrice(e.target.value)}></input>
                        {/* end filtered price  */}

                    </div>
                </Col>
                <Col sm={12} md={10}>
                    <Row xs={1} md={3} className="g-3 p-4">
                        {filteredItems.map((item) => (
                            <Col key={item.id} align="center">
                                <ProductItem product={item} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>


        </div>
    )
}

export default Shop