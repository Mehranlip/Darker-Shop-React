import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap"

import { productList } from "../data/items"

import ProductItem from './../components/ProductItem';


const getFilteredItem = (query, items) => {
    if (!query) {
        return items
    }
    if (query) {
        return items.filter((item) => item.cat.includes(query))
    }

    return items.filter((item) => item.cat.toLowerCase().includes(query.toLowerCase()))

}


function Shop() {
    const [query, setQuery] = useState("")
    const [handelCheck, setHandelCheckd] = useState()

    const filteredItems = getFilteredItem(query, productList)


    const removeFilterHandler = () => {
        setQuery("")
        setHandelCheckd(false);
    }





    return (
        <div dir="rtl">
            <div>
                <input className="mt-3 rounded p-1" type="text" placeholder="جستجو محصول" dir="rtl" onChange={(e) => setQuery(e.target.value)} />
                <label className="mx-1">
                    <input className="mx-1"
                        type="checkbox"
                        onChange={(e) => setQuery(e.target.value)}
                        value="LopTop"
                        checked={handelCheck}
                    />
                    لپ تاپ
                </label>
                <label className="mx-1">
                    <input className="mx-1"
                        type="checkbox"
                        onChange={(e) => setQuery(e.target.value)}
                        value="headphone"
                        checked={handelCheck}
                    />
                    هدفون
                </label>
                <label className="mx-1">
                    <input className="mx-1"
                        type="checkbox"
                        onChange={(e) => setQuery(e.target.value)}
                        value="Tablet"
                        checked={handelCheck}
                    />
                    تبلت
                </label>
                <label className="mx-1">
                    <input className="mx-1"
                        type="checkbox"
                        onChange={(e) => setQuery(e.target.value)}
                        value="Mouse"
                        checked={handelCheck}
                    />
                    موس
                </label>
                <label className="mx-1">
                    <input className="mx-1"
                        type="checkbox"
                        onChange={(e) => setQuery(e.target.value)}
                        value="Watch"
                        checked={handelCheck}
                    />
                    ساعت
                </label>
                <label className="mx-1">
                    <input className="mx-1"
                        type="checkbox"
                        onChange={(e) => setQuery(e.target.value)}
                        value="Phone"
                        checked={handelCheck}
                    />
                    موبایل
                </label>
                <Button variant="btn btn-outline-secondary" className="mx-1 text-white" onClick={removeFilterHandler} >حذف فیلتر</Button>
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