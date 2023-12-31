import { createContext, useState } from "react";
import { getProductData } from "../data/items";
import { toast } from 'react-toastify';



export const cartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteFromCart: () => { },
    getTotalAmount: () => { }
})

export function CartProvider({ children }) {
    const [cartProduct, setCartProduct] = useState([])


    // getProductQuantity function

    function getProductQuantity(id) {
        const quantity = cartProduct.find((item) => item.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    // addItemToCart fucntion
    function addItemToCart(id) {
        const quantity = getProductQuantity(id)
        if (quantity === 0) {
            setCartProduct([...cartProduct, { id: id, quantity: 1 }])
        } else {
            setCartProduct(
                cartProduct.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
            )
        }
        toast.success("محصول به سبد خرید افزوده شد")
    }

    // deleteFromCart function
    function deleteFromCart(id) {
        setCartProduct((cartProduct) => cartProduct.filter((item) => {
            return item.id !== id
        }))

        toast.error("محصول به کلی از سبد خرید حذف شد")
    }

    //  removeItemFromCart function
    function removeItemFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProduct(
                cartProduct.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            )
        }

        toast.warn("یک عدد از محصول مورد نظر حذف شد")
    }

    // getTotalAmount function
    function getTotalAmount() {
        let totalAmount = 0

        cartProduct.map((item) => {
            const productData = getProductData(item.id)

            totalAmount += productData.price * item.quantity
        })

        return totalAmount
    }




    const ContextValue = {
        items: cartProduct,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount
    }

    return (
        <cartContext.Provider value={ContextValue}>{children}</cartContext.Provider>
    )
}