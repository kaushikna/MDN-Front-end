import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [product, setProduct] = useState({})
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [])
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const updateAuthenticationStatus = () => {
        const token = localStorage.getItem("token")
        if (token && token?.length) {
            setIsAuthenticated(true)
            return true
        } else {
            setIsAuthenticated(false)
            return false
        }

    }
    useEffect(() => {
        updateAuthenticationStatus()
    }, [])


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartData))
    }, [cartData])

    const addToCart = (itemData) => {
        const existedVariantId = cartData.findIndex(elem => elem.product_variant_id === itemData.selectedVariant._id)
        if (existedVariantId >= 0) {
            setCartData(prevState => {
                prevState[existedVariantId].quantity = prevState[existedVariantId].quantity + 1
                return prevState
            })
        } else {
            const newCartData = {
                product_id: itemData._id,
                product_variant_id: itemData.selectedVariant?._id,
                product_name: itemData.name,
                product_image: itemData.selectedVariant?.images?.[0],
                price: itemData.price,
                color_name: itemData.selectedVariant?.color_name,
                color_code: itemData.selectedVariant?.color_code,
                quantity: 1
            }
            setCartData(prevState => {
                return [...prevState, newCartData]
            })
        }
    }

    const incrementQuantity = (value) => {
        const index = cartData.findIndex(elem => elem.product_variant_id === value.product_variant_id)
        if (index >= 0) {
            setCartData(prevState => {
                const prevClone = [...prevState]
                prevClone[index].quantity = prevClone[index].quantity + 1
                return prevClone
            })
        }
    }

    const decrementQuantity = (value) => {
        const index = cartData.findIndex(elem => elem.product_variant_id === value.product_variant_id)
        if (index >= 0) {
            setCartData(prevState => {
                const prevClone = [...prevState]
                if (prevClone[index].quantity === 1) {
                    prevClone.splice(index, 1)
                    return prevClone
                }
                prevClone[index].quantity = prevClone[index].quantity - 1
                return prevClone
            })
        }
    }

    const removeItemFromCart = (variantIndex) => {
        setCartData(prevState => {
            const prevClone = [...prevState]
            prevClone.splice(variantIndex, 1)
            return prevClone
        })
    }

    const handleSubTotal = () => {
        const subTotal = cartData.reduce((curValue, object) => {
            let sum = object.quantity * object.price
            return curValue + sum
        }, 0);
        return subTotal
    }

    useEffect(() => {
        handleSubTotal()
    }, [cartData])


    const value = { product, setProduct, cartData, setCartData, addToCart, incrementQuantity, decrementQuantity, handleSubTotal, isAuthenticated, updateAuthenticationStatus, removeItemFromCart }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;
