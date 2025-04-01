import React from 'react'
import { Link } from 'react-router-dom'

function Items(props) {
  return (
    <div className='w-[220px] hover:scale-105 duration-500'>
      <Link to={`/product/${props.id}`}> 
        <img src={props.image} onClick={window.scrollTo(0,0)} />
        </Link>
        <p className='my-2 mx-0'>{props.name}</p>
        <div className='flex gap-5'>
            <span className='text-[#374151] text-xl font-semibold '>${props.newprice}</span>
            <span className='text-[#8c8c8c] font-medium line-through '>${props.oldprice}</span>
        </div>



    </div>
  )
}

export default Items