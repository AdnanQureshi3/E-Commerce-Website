import React from 'react'
import hand from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import heroImg from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div style={{height: "calc(100vh - 5rem)"}} className='flex pb-0 bg-gradient-to-t from-purple-50 to-pink-200'>
          
    <div className='w-1/2 mt-12 h-4/5 flex flex-col justify-center gap-5 pl-44 leading-none'>
      <h1 className='text-[#090909] text-2xl font-semibold '>New Arrivals Only</h1>
      <div className='flex items-center gap-5'>
      <p className='text-[#171717] text-6xl font-bold '>New</p>
      <img src={hand} className='w-20' alt="" /></div>
      <p className='text-[#171717] text-6xl font-bold '>collections</p>
        <p className='text-[#171717] text-6xl font-bold '>for everyone</p>
      <button  className='flex active:bg-[#f7f7f7] hover:bg-[#ff4111] hover:shadow-md duration-150 justify-center items-center gap-4 w-80 bg-[#ff4141] mt-7 text-white text-2xl font-medium h-16 rounded-full'>Latest Collection  
        <img src= {arrow} onClick={window.scrollTo(0,0)} />

      </button>
    </div>

    <div className='w-1/2 h-full flex justify-center items-center'> 
    <img src={heroImg} className='h-full' alt="" />
    </div>


    </div>
  )
}

export default Hero