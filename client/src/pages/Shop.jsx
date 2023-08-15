import { useState } from "react";
import { Row, Col } from "react-bootstrap"

import { productList } from "../data/items"
import productCat from "../data/categoeis";


import ProductItem from './../components/ProductItem';


function Shop() {
    const [query, setQuery] = useState("")
    const [checkBoxValue, setCheckboxValue] = useState("All")
    const [rangePrice, setRangePrice] = useState(0)

    const allItems = [...productList];

    const filteredItems = allItems.filter(itme => {
        const withinPriceRange = itme.price >= rangePrice
        const matchesCategory = checkBoxValue === "All" || itme.cat === checkBoxValue
        const matchesSearchTerm = itme.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())

        return withinPriceRange && matchesCategory && matchesSearchTerm;
    });


    const handleCheckBoxValue = (e) => {
        const newData = e.target.value;
        setCheckboxValue(newData);

        if (e.target.checked) {
            setCheckboxValue(e.target.value)
        } else {
            setCheckboxValue("All")
        }
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
                            <ul key={item.cat} className="list-unstyled">
                                <li >
                                    <label>
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
                        <label htmlFor="customRange2" className="form-label">{`از 0 تا ${rangePrice}`} {" "}تومان</label>
                        <input type="range" className="form-range" min="0" max="180000000" id="customRange2" onChange={(e) => setRangePrice(e.target.value)}></input>
                        {/* end filtered price  */}

                    </div>
                </Col>
                <Col sm={12} md={10}>
                    <Row xs={1} md={3} className="g-3 p-4">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <Col key={item.id} align="center">
                                    <ProductItem product={item} />
                                </Col>
                            ))
                        ) : (
                            productList.map((item) => (
                                <Col key={item.id} align="center">
                                    <ProductItem product={item} />
                                </Col>
                            ))
                        )}
                    </Row>
                </Col>
            </Row>


        </div>
    )
}

export default Shop