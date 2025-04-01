import React, { createContext, useState , useEffect} from 'react'
import all_product from '../Components/Assets/all_product'


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {}
    for(let index = 0; index < all_product.length + 1; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItems , setCartItems] = useState(getDefaultCart)
    const addTocart = (itemID) =>{
        setCartItems((prev) => ({...prev , [itemID]:prev[itemID]+1}))
        // console.log(cartItems)
    }
    const removeFromcart = (itemID) =>{
        setCartItems((prev) => ({...prev , [itemID]:prev[itemID]-1}))
    }
    const deleteFromcart = (itemID) =>{
        setCartItems((prev) => ({...prev , [itemID]:prev[itemID] = 0 }))
    }
    // useEffect(() => {
    //     const cart = Number(localStorage.getItem("item"))
    //     setCartItems(cart)
    //     console.log("byeee")
        
    //   }, [])
    useEffect(() => {
        const storedCart = localStorage.getItem("item");
        if (storedCart) {
          try {
            const parsedCart = JSON.parse(storedCart);
            setCartItems(parsedCart);
          } catch (error) {
            console.error("naahi hua:", error);
          }
        }
      }, []);
      
    useEffect(() => {
        console.log("hiiii")
        // localStorage.setItem("item", cartItems)
        localStorage.setItem("item", JSON.stringify(cartItems)); 
      }, [cartItems])
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item)) 
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                
                total += cartItems[item];
            }
        }
        return total;
    }
    const contextvalue = {all_product ,setCartItems,  getTotalCartItems, getTotalCartAmount, cartItems , deleteFromcart , addTocart, removeFromcart};
    return (
        <ShopContext.Provider value = {contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider