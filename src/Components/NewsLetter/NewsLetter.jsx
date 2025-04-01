import React from 'react'

function NewsLetter() {
  return (
    <div className='w-[80%] mt-20 mb-[100px] h-[40vh] flex text-center  flex-col m-auto justify-centre py-10 px-[140px] gap-4 bg-gradient-to-b  from-[#fde1ff] from-0% to-[#e1ffea22] to-60% '>
        <h1 className='capitalize text-[#454545] text-4xl font-bold'>Get Exclusive offers On Your email </h1>
        <p className='text-[#454545] text-2xl '>Subscribe to our newsletter ans stay updated</p>

        <div className='flex items-center justify-between text-[16px]  bg-white w-[700px] h-16 rounded-[80px] border-2 border-[#e3e3e3]'>
            <input  type="email" placeholder='your Email Id'
            className='w-[500px] ml-7 text-[#616161] border-none outline-none' />
            <button className='w-[200px] h-16 bg-black text-white rounded-r-[80px]  '> Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter