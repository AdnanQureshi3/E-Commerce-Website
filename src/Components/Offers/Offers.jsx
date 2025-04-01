import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

function Offers() {
  return (
    <div className='w-[80%] h-[60vh] flex m-auto justify-between py-0 px-[140px] bg-gradient-to-b mb-[150px] from-purple-200 to-white '>

        <div className='flex flex-col justify-center text-[#171717]'>
            <h1 className='text-5xl font-bold '>Exclusive</h1>
            <h1 className='text-5xl font-bold '>Offers For You</h1>
            <p className='font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[200px] bg-[#ff4141] active:bg-[#f7f7f7] hover:shadow-md duration-150 hover:bg-[#ff4111] rounded-[35px] h-16 text-white cursor-pointer font-medium mt-8 text-2xl '>Check Now</button>
        </div>
        <div className='flex items-center  '>

            <img src={exclusive_image} className='h-4/5' alt="" />
        </div>



    </div>
  )
}

export default Offers