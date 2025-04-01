import React, { useContext } from 'react'
import Logo from '../Assets/logo.png'
import { Link , NavLink } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function Navbar() {
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='flex z-10 bg-white justify-around items-center p-4 h-20 shadow fixed top-0 left-0 right-0'>
        <div className='flex items-center gap-3'>
        <Link to="/">
            <img src={Logo} className='w-16' alt="logo" /></Link>
            <Link to="/">
            <h1 className='text-[#171717] text-2xl font-semibold ' >Style Web</h1></Link>
        </div>
        <ul className='flex gap-12 text-[#626262] text-xl font-medium'>

          <li><NavLink to = "/"
          className={({ isActive }) =>
            isActive ? 'border-b-2 pb-2 border-[#ff4141] font-bold ' :'text-[#626262] hover:text-gray-700 '
          }
          >Shop </NavLink></li>
          <li><NavLink to = "/Men"
          className={({ isActive }) =>
            isActive ? 'border-b-2 pb-2 border-[#ff4141] font-bold' : 'text-[#626262] hover:text-gray-700 '
          }
          >Mens</NavLink></li>
          <li><NavLink to = "/Women"
          className={({ isActive }) =>
            isActive ? 'border-b-2 pb-2 border-[#ff4141] font-bold' : 'text-[#626262] hover:text-gray-700 '
          }
          >Women</NavLink></li>
          <li><NavLink to = "/Kids"
          className={({ isActive }) =>
            isActive ? 'border-b-2 pb-2 border-[#ff4141] font-bold' : 'text-[#626262] hover:text-gray-700 '
          }
          >Kids</NavLink></li>
        </ul>

        <div className='flex gap-11 items-center'>
          <div className='border-2 gap-1 flex items-center justify-center outline-none font-medium text-[15px] active:bg-[#f7f7f7] w-36 h-12 border-[#7a7a7a]
           rounded-full cursor-pointer bg-white text-[#515151]'>
            <Link to="/login">Login </Link> /
            <Link to="/signup"> SignUp</Link>
          </div>
    
          <div className=' flex items-center'>
            <Link to = "/cart" >
          <div><i className="fa-solid fa-cart-shopping  text-4xl"></i></div></Link>
          <div className='items-center text-white text-xs flex justify-center -mt-8 -ml-2 z-10 w-4 h-4 rounded-full bg-[#ff0000] font-semibold '>{getTotalCartItems()}</div>
          </div>

        </div>

    </div>
  )
}


export default Navbar