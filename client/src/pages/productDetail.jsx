import React from "react"
import { useParams } from "react-router-dom"
import { productList } from "../data/items"

function ProductDetail() {
    const { productId } = useParams()
    const thisProduct = productList.find(prod => prod.id === productId)

    return (
        <div>
            <h1>{thisProduct.title}</h1>
        </div>
    )
}

export default ProductDetail