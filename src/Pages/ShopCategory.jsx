import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import drop from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items';
import Footer from '../Components/Footer/Footer'
import SimilarItems from '../Components/SimilarItems';

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div  className='mt-20'>
      <img className='bg-gray-700 w-full m-auto my-7 block' src={props.banner} alt="" />
      <div className='flex my-0 mx-40 justify-between items-center'>
        <p>
          <span className='font-semibold'>Showing 1-12 </span>out of 36 Products
        </p>
        <div className='py-3 px-5 items-center gap-2 border-[1.3px] border-[#888] rounded-[40px] flex ' >
          Sort by <img className='h-3' src={drop}alt="" />
        </div>
      </div >
      <SimilarItems category = {props.category}/>
    <Footer/>
    </div>
  )
}

export default ShopCategory