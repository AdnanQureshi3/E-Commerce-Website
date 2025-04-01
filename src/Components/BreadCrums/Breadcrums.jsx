import React from 'react'
import arrow from '../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';

function Breadcrums(props) {
  const {product} = props;
  // let li = `men`
  return (
    <div className='flex'>
      <Link to="/">Home </Link><img src={arrow} /> <Link to="/">Shop</Link> <img src={arrow} /> <Link to= "/">{product.category}</Link>  <img src={arrow} /> {product.name}
    </div>
  )
}

export default Breadcrums