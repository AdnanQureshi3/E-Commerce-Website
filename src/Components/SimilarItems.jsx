import React , {useContext} from 'react'
import Items from './Items/Items'
import { ShopContext } from '../context/ShopContext'

function SimilarItems(props) {
    const {all_product} = useContext(ShopContext);
  return (
    <div>
        
        <div className='my-5 mx-44 grid grid-cols-4 gap-x-20 gap-y-10'>
        {all_product.map((item, i)=>{
          if(props.category === item.category ){
            return <Items key ={i} id ={item.id} name={item.name} image = {item.image}
            newprice = {item.new_price} oldprice = {item.old_price}/>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className='flex justify-center mx-auto my-20 w-[230px] h-[70px] bg-[#ededed] cursor-pointer font-medium text-[#787878] text-xl rounded-[75px] items-center '>Explore More...</div>

    </div>
  )
}

export default SimilarItems