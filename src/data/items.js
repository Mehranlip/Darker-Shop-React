const productList = [
    {
        id: "1",
        title: "MacBook Pro",
        price: 99,
        image: "/images/product.jpg"
    },
    {
        id: "2",
        title: "MacBook Pro",
        price: 99,
        image: "/images/product.jpg"
    },
    {
        id: "3",
        title: "MacBook Pro",
        price: 99,
        image: "/images/product.jpg"
    },
    {
        id: "4",
        title: "MacBook Pro",
        price: 99,
        image: "/images/product.jpg"
    }
]

function getProductData(id) {
    let productData = productList.find((item) => item.id === id)
    return productData
}

export { productList, getProductData }