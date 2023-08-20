import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap"

import { productList } from "../data/items"
import productCat from "../data/categoeis";


import ProductItem from './../components/ProductItem';



function Shop() {
    // state for category
    const [query, setQuery] = useState("")
    const [checkBoxValue, setCheckboxValue] = useState("All")
    const [rangePrice, setRangePrice] = useState(0)
    const selectedCategory = checkBoxValue === "All" ? "همه محصولات" : productCat.find(item => item.cat === checkBoxValue)?.namecat || "";

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;



    const allItems = [...productList];
    // logic for  filter product form category
    const filteredItems = allItems.filter(itme => {
        const withinPriceRange = itme.price >= rangePrice
        const matchesCategory = checkBoxValue === "All" || itme.cat === checkBoxValue
        const matchesSearchTerm = itme.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())

        return withinPriceRange && matchesCategory && matchesSearchTerm;
    });

    // check and checkeout input category
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
            <Row className="m-0">
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
                    {/* render category */}
                    <Row className="justify-content-center px-4 py-1 mt-3">
                        <Col>
                            <span>
                                {selectedCategory && (
                                    <span className="mx-2">
                                        دسته‌بندی/ {selectedCategory}
                                    </span>
                                )}
                            </span>
                        </Col>
                    </Row>
                    {/* render category */}
                    {/* render products */}
                    <Row xs={1} md={3} className="g-3 px-4 py-1">
                        {filteredItems.length > 0 ? (
                            filteredItems.slice(startIndex, endIndex).map((item) => (
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
                    {/* end render products */}
                    {/* Pagination  */}
                    <Row className="d-flex justify-content-center  mt-5">
                        <Col sm={12} md={6} className="d-flex justify-content-center mt-3">
                            <Button
                                className="mx-3"
                                variant="outline-secondary"
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                قبلی
                            </Button>
                            <span className="p-2 border border-light rounded ">
                                {currentPage}
                            </span>
                            <Button
                                className="mx-3"
                                variant="outline-secondary"
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={endIndex >= filteredItems.length}
                            >
                                بعدی
                            </Button>
                        </Col>
                    </Row>
                    {/* end Pagination */}
                </Col>

            </Row>


        </div>
    )
}

export default Shop