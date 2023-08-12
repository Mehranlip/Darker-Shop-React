const productList = [
    {
        id: "1",
        title: "MacBook Pro",
        price: 180000000,
        image: "/images/product.jpg",
        cat: "LopTop"
    },
    {
        id: "2",
        title: "AirPad",
        price: 15000000,
        image: "/images/airpads.jpg",
        cat: "headphone"
    },
    {
        id: "3",
        title: "headphones",
        price: 50000000,
        image: "/images/headphone.jfif",
        cat: "headphone"
    },
    {
        id: "4",
        title: "iPad",
        price: 60000000,
        image: "/images/ipad.jpg",
        cat: "Tablet"
    },
    {
        id: "5",
        title: "MacBook Air",
        price: 45000000,
        image: "/images/macbook-air.jfif",
        cat: "LopTop"
    },
    {
        id: "6",
        title: "Apple Mouse",
        price: 8000000,
        image: "/images/mouse.jfif",
        cat: "Mouse"
    },
    {
        id: "7",
        title: "Apple Watch",
        price: 45000000,
        image: "/images/watch.jpg",
        cat: "Watch"
    },
    {
        id: "8",
        title: "iPhone",
        price: 12000000,
        image: "/images/iphone.jpg",
        cat: "Phone"
    },
]

function getProductData(id) {
    let productData = productList.find((item) => item.id === id)
    return productData
}

export { productList, getProductData }