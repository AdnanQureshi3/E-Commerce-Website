import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/BreadCrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay';
import SimilarItems from '../Components/SimilarItems';
import Footer from '../Components/Footer/Footer';

function Product() {
  const {productID} = useParams();
  const {all_product} = useContext(ShopContext);
  const product = all_product.find((e) => e.id === Number(productID));

  return (
    <div className='mt-20 pt-5 px-5'>
    <Breadcrums product = {product} />
    <ProductDisplay product = {product} />
    <div className='flex justify-center'><hr className='border-[1.5px] mt-10 w-4/5 '/></div>
    <h1 className='text-center text-4xl font-bold my-10'>Similar Products</h1>
    <SimilarItems category = {product.category}/>
    <div className='mt-20'>

    <Footer/>
    </div>
    
    </div>
  )
}

export default Product