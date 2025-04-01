import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/Offers/Offers'
import Collections from '../Components/NewCollection/Collections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'


function Shop() {
  return (
    <div className='mt-20'>
    < Hero className = 'bg-black'/>
    <Popular/>
    <Offers/>
    <Collections/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Shop