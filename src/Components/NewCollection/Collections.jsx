import React from 'react'
import Items from '../Items/Items'
import new_collection from '../Assets/new_collections'

function Collections() {
  return (
    <div className='flex items-center flex-col gap-3 '>
        <h1 className='text-5xl font-bold'>NEW COLLECTIONS</h1>
        <hr className='w-[180px] bg-[#252525] rounded-3xl font-extrabold h-[6px]' />
        <div className='grid grid-cols-4 gap-8'>
            {new_collection.map((item , i) =>{{
                return <Items key ={i} id ={item.id} name={item.name} image = {item.image}
            newprice = {item.new_price} oldprice = {item.old_price} />
            }})}
        </div>

    </div>
  )
}

export default Collections