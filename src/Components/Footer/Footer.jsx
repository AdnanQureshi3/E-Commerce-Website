import React from 'react'

import { Link } from 'react-router-dom'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-12'>
        <div className='flex items-center gap-5'>
            <Link to="/">
            <img src={footer_logo} alt="" /></Link>
            <p className='text-[#383838] text-3xl font-bold'>Style Web</p>
        </div>
        <ul className='flex gap-12 text-[#252525] text-xl '>
            <li ><Link to = "/" className='hover:underline'>Company</Link></li>
            <li className='hover:underline'><Link to = "/">Products</Link></li>
            <li className='hover:underline'><Link to = "/">Offices</Link></li>
            <li className='hover:underline'><Link to = "/">About</Link></li>
            <li className='hover:underline'><Link to = "/">Contact</Link></li>
        </ul>
        <div className='flex gap-5 '>
            <img src={instagram_icon} className='p-3 cursor-pointer bg-[#fbfbfb] border-2'  />
            <img src={pintester_icon} className='p-3 cursor-pointer bg-[#fbfbfb] border-2' />
            <img src={whatsapp_icon}  className='p-3 cursor-pointer bg-[#fbfbfb] border-2'/>
        </div>
            <hr className='w-4/5 border-[1.5px] border-gray-500 rounded-full'/>
        <div className='mb-5
        '>
            <p>Copyright @ 2024 - All Rights Reserved || Adnan Qureshi</p>
        </div>

    </div>
  )
}

export default Footer