import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import removeIcon from '../Components/Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function CartItems() {
    
    const {all_product , deleteFromcart ,getTotalCartAmount, setCartItems ,addTocart, removeFromcart , cartItems} = useContext(ShopContext);
    useEffect(() => {
        const todos = Number(localStorage.getItem("item"))
    
        console.log("hiiii")
        if (todos && todos.length > 0) {
          setCart(todos)
        }
      }, [])
    useEffect(() => {
        console.log("hiiii")
        localStorage.setItem("item", cartItems)
      }, [cartItems])
  return (
    <div className='mt-20 mb-40 pt-6 w-full flex flex-col items-center'>
        <div className='flex w-[90%] justify-around text-xl font-medium'>
            <p className='w-28 p-0 text-center'>Products</p>
            <p className='w-[30%] text-center'>Title</p>
            <p className='w-20 text-center'>Price</p>
            <p className='w-20 text-center'>Quantity</p>
            <p className='w-20 text-center'>Total</p>
            <p className='w-20 text-center'>Remove</p>
        </div>
        <hr className='border-[1px] my-3 border-black w-[90%]'/>
        


        <div  className='w-[90%] flex justify-center items-center flex-col gap-4 '>
        {all_product.map((e) =>{
            if(cartItems[e.id] > 0){
                return  <div className='w-full'>
                <div className='flex w-full justify-around mb-3 '>
                    <Link to = {`/product/${e.id}`} className='w-28 flex justify-center text-center'>  <img className='w-20 hover:scale-125 duration-300' src={e.image} alt="" /> </Link>
                    <Link to = {`/product/${e.id}`} className='w-[30%] hover:scale-110 duration-500  flex justify-center items-center'>{e.name}</Link>
                    <p className='w-20 flex justify-center items-center'> ${e.new_price}</p>
                    <div className='w-20 flex justify-center items-center'>  
                        <button className='w-6 h-6 flex items-center justify-center mr-3 text-2xl border-[1.2px] ' onClick={() => {removeFromcart(e.id)}}> - </button>
                         {cartItems[e.id]}
                         <button  className='w-6 ml-3 h-6 flex items-center justify-center mr-3 text-2xl border-[1.2px] ' onClick={() => {addTocart(e.id)}} > + </button>   </div>

                    
                    <p className='w-20 flex justify-center items-center'> ${e.new_price*cartItems[e.id]} </p>
                    <div className='w-20 flex justify-center items-center'>

                    <img  src={removeIcon} onClick={() => {deleteFromcart(e.id)}} />
                    </div>
    
                     
                </div>
                <hr className='border-[1.5px] w-full '/>
            </div> 
            }
            
            return null;
        })
        
    }

    <div  className='flex justify-between w-[90%] '>

        <div className='flex justify-between w-1/2 flex-col py-4 px-0'>


    <h1 className='text-4xl font-semibold'>Cart Totals</h1>
    <div className='w-full h-12 flex  justify-between items-center '>
        <p>SubTotal</p>
        <p>${getTotalCartAmount()}</p>
    </div>
    <hr className='border-[1.2px] w-full ' />
    <div className='w-full h-12 flex  justify-between items-center '>
        <p>Shipping Fee</p>
        <p>Free</p>
    </div>
    <hr className='border-[1.2px] w-full ' />
    <div  className='w-full h-12 flex font-semibold text-xl justify-between items-center '>
        <h2>Total</h2>
        <h2>${getTotalCartAmount()}</h2>
    </div>
    <hr className='border-[1.5px] w-full' />

    <button className='w-[300px] bg-[#ff4141] m-auto  h-12 text-white cursor-pointer font-medium mt-8 text-xl '>Proceed To CheckOut</button>
    </div>
    

    <div className=' w-1/2 flex flex-col items-center justify-center py-10 gap-4'>

    <p className='text-left w-4/5 text-[#616161]'>If you have promo code, apply it here</p>
    <div className='flex items-center justify-between text-[16px]  bg-white w-4/5 h-12 rounded-[80px] border-2 border-[#e3e3e3]'>
            <input  type="email" placeholder='Promo Code'
            className='w-[500px] ml-7 text-[#616161] border-none outline-none' />
            <button className='w-[200px] h-12 bg-black text-white rounded-r-[80px]  '> Submit</button>
        </div>
    </div>
       
        </div>

    </div>
    </div>
  )
}

export default CartItems