import React from 'react'
import data_product from '../Assets/data'
import Items from '../Items/Items'

function Popular() {
  return (
    <div className='flex items-center mt-20 flex-col gap-3 '>
        <h1 className='text-5xl  font-bold '>Popular in Women</h1> 
        <hr className='w-[180px] bg-[#252525] rounded-3xl font-extrabold h-[6px]' />
        <div className='flex m-[50px] gap-[30px] '> {data_product.map((item , i)=>{
            return <Items key ={i} id ={item.id} name={item.name} image = {item.image}
            newprice = {item.new_price} oldprice = {item.old_price} />

        })} </div>
 



    </div>
  )
}

export default Popular