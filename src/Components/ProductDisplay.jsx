import React from 'react'
import star_icon from '../Components/Assets/star_icon.png'
import half_star from '../Components/Assets/star_dull_icon.png'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

function ProductDisplay({product}) {


    function Noti() {
        // Create a div element
            addTocart(product.id)
        let bar = document.createElement('div');
        bar.classList.add('w-[350px]', 'h-[70px]', 'bg-[#fff]', 'font-medium', 'p-4', 'flex', 'justify-start' , 'my-4' ,'mx-0',  'rounded', 'items-center');
        bar.style.boxShadow = '0 0px 20px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.06)';
        bar.innerHTML =   ' <i class="fa-solid fa-circle-check my-0 mx-3 text-[25px] text-green-700"></i> Item added  successfully';
        notiBar.appendChild(bar);
        setTimeout(() => {
            bar.remove();
        }, 2000);
    }
    function NotiWish() {
        // Create a div element
            // addTocart(product.id)
        let bar = document.createElement('div');
        bar.classList.add('w-[350px]', 'h-[70px]', 'bg-[#fff]', 'font-medium', 'p-4', 'flex', 'justify-start' , 'my-4' ,'mx-0',  'rounded', 'items-center');
        bar.style.boxShadow = '0 0px 20px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.06)';
        bar.innerHTML =   ' <i class="fa-solid fa-circle-check my-0 mx-3 text-[25px] text-green-700"></i>Added to WishList';
        notiBar.appendChild(bar);
        setTimeout(() => {
            bar.remove();
        }, 2000);
    }
    
    const {addTocart} = useContext(ShopContext)
  return (
    <div className='flex mt-5'>

        <div className='w-1/2'>

        
        <div className='flex gap-5 w-full'>


        <div className='flex flex-col gap-3 h-[450px] justify-center'>
        <img src= {product.image} className='w-24 rounded-xl hover:border-2 hover:border-blue-600 duration-300 hover:w-48' />
        <img src= {product.image} className='w-24 rounded-xl hover:border-2 hover:border-blue-600 duration-300 hover:w-48' />
        <img src= {product.image} className='w-24 rounded-xl hover:border-2 hover:border-blue-600 duration-300 hover:w-48'/>
        </div>

        <div>
        <img src= {product.image} className='rounded-2xl h-[450px]' />
        </div>
        
        </div>

        <p className='text-[16px] px-10 mb-0 font-medium pt-10'>
        This brand consistently delivers high-quality, stylish clothing that balances comfort and fashion. Their pieces are versatile, durable, and made with attention to detail, perfect for everyday wear or special occasions. The fabrics feel great against the skin, and the fits are flattering across various body types. A reliable choice for any wardrobe!              </p>


        </div>


            <div>
            <h1 className='font-semibold text-xl'> {product.name} </h1>
            <div id='notiBar' className=' fixed top-20 right-0 z-1000
            '></div>

        <div className='text-xl flex gap-3'>
            <p className='font-bold'> ${product.new_price} </p>

            <p> MRP <span className='line-through '>${product.old_price}</span> <span className='font-bold text-[#ff905a] '>(30% OFF)</span> </p>
        
        </div>
            <p className='font-semibold text-[#03a685] my-2'>inclusive of all taxes</p>
        <div className='flex'>
            <img src= {star_icon} />
            <img src= {star_icon} />
            <img src= {star_icon} />
            <img src= {star_icon} />
            <img src= {half_star} />
            <p className='ml-3 text-[12px] font-semibold'>(8.9K)</p>
            <h1 className='ml-3 text-[13px] font-semibold text-[#ff3f6c]'>Rating</h1>
        </div>

            <h1 className='text-xl font-semibold mt-4 mb-2'>Select Size</h1>
        <div className='flex gap-3 my-4'>
            <div className='rounded-full w-14 h-14 text-xl cursor-pointer font-medium hover:bg-slate-100 border-2 flex justify-center items-center'>S</div>
            <div className='rounded-full w-14 h-14 text-xl cursor-pointer font-medium hover:bg-slate-100 border-2 flex justify-center items-center'>M</div>
            <div className='rounded-full w-14 h-14 text-xl cursor-pointer font-medium hover:bg-slate-100 border-2 flex justify-center items-center'>L</div>
            <div className='rounded-full w-14 h-14 text-xl cursor-pointer font-medium hover:bg-slate-100 border-2 flex justify-center items-center'>XL</div>
            <div className='rounded-full w-14 h-14 text-xl cursor-pointer font-medium hover:bg-slate-100 border-2 flex justify-center items-center'>XXL</div>
        </div>
            <div className='flex gap-4'>

        <button className='bg-[#ff3f6c] flex items-center justify-center font-semibold active:bg-[#f7f7f7] hover:shadow-md duration-150 text-white py-3 w-60 rounded '
         onClick={Noti}  > <i class="fa-solid fa-cart-shopping mr-4 text-2xl"></i>ADD TO CART </button>
        <button onClick={NotiWish} className=' py-3 w-44 border-[1px] flex items-center justify-center font-semibold rounded hover:border-black hover:border-[1.2px] '> <i class="fa-solid mr-3 fa-heart text-2xl"></i> WISHLIST</button>


            </div>
            <hr className='mt-12 border-[1.2px]' />
            <div className='text-[#282c3f]'>
                <h1  className='text-xl font-semibold mt-4 mb-2'>DELIVERY OPTIONS </h1>
                <div className='border-[1px] w-72 rounded flex justify-around py-3'>
                <input type="number" placeholder='Enter pincode' className='outline-none w-3/5' />
                <button className='text-[#ff3f6c] font-semibold text-[14px]'>Check</button>
 
                </div>
                <p className='text-xs mt-2'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                <h1 className='mt-10'>100% Original Products</h1>
                <h1 className='mt-2'>Pay on delivery might be available</h1>
                <h1 className='mt-2'>Easy 14 days returns and exchanges </h1>
               
                
            </div>
            <div>
            <h1 className='text-xl font-semibold mt-4 mb-2'>BEST OFFERS</h1>
            <ul className='list-disc mt-5'>
                <h1 className='text-[15px]  font-semibold'>Coupons & Discounts</h1>
                <li>Applicable on: Orders above Rs. 599 (only on first purchase)</li>
                <li>Coupon code: STYLE20 (For 20% OFF)</li>
                <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
            </ul>
            <ul className='list-disc mt-5 '>
                <h1 className='text-[15px]  font-semibold'>10% Discount on Kotak Credit and Debit Cards.</h1>
                <li>Max Discount up to ₹1000 on every spends.</li>
            </ul>
            <ul className='list-disc mt-5 '>
                <h1 className='text-[15px]  font-semibold'>EMI option available</h1>
                <li>EMI starting from Rs.63/month</li>

            </ul>
            </div>
        
            </div>
            
         
    </div>
  )
}

export default ProductDisplay