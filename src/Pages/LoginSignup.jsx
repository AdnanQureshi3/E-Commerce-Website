import React from 'react'
import { Link } from 'react-router-dom'

function LoginSignup() {
  return (
    <div  className=' bg-[#fce3fe] h-screen flex w-full pt-10'>
        <div className='border-2 w-[580px] h-[460px] m-auto px-14 py-10 bg-white' >
        <h1 className='mt-0 font-medium mb-2 text-3xl mx-0 '>Sign Up</h1>
        <div className=' flex flex-col gap-5  '>
          <input type="text" placeholder='Your Name' className='w-full h-14 pl-5 border-[2px] outline-none text-[#5c5c5c] text-xl ' />
          <input type="text" placeholder='Email Address' className=' w-full h-14 pl-5 border-[2px] outline-none text-[#5c5c5c] text-xl ' />
          <input type="number" placeholder='Mobile number' className=' w-full h-14 pl-5 border-[2px] outline-none text-[#5c5c5c] text-xl '  />
        </div>
          <button className='w-full h-14 border-none text-2xl mt-5 mb-3 text-white bg-[#ff4141] '  >Continue</button>
          <p className='text-xs mb-1'>Already have an account? <Link to= "/login"className='text-[#ff4141] font-semibold text-[14px] underline '> Login here</Link> </p>
          <p className='text-xs flex items-center gap-1'>
            <input type="checkbox" /> by continuing, I agree to the terms of use & privacy policy.
          </p>

        </div>
    </div>
  )
}

export default LoginSignup