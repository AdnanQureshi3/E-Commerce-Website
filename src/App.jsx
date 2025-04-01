import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import ShopCategory from './Pages/ShopCategory'
import { BrowserRouter , Routes ,   createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Product from './Pages/Product'
import Shop from './Pages/Shop'
import kid from './Components/Assets/banner_kids.png'
import men from './Components/Assets/banner_mens.png'
import women from './Components/Assets/banner_women.png'
import Login from './Pages/Login'

function App() {


  return (
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path='/' element = {<Shop/>}/>
    <Route path='/men' element = {<ShopCategory banner = {men} category = "men"/>}/>
    <Route path='/women' element = {<ShopCategory banner = {women} category = "women"/>}/>
    <Route path='/kids' element = {<ShopCategory banner = {kid} category = "kid"/>}/>
    <Route path='/product' element = {<Product/>}>
    <Route path=':productID' element = {<Product/>}/>

    </Route>
    <Route path='/cart' element = {<Cart/>}/>
    <Route path='/signup' element = {<LoginSignup/>}/>
    <Route path='/login' element = {<Login/>}/>
    </Routes>

    </BrowserRouter>
  </div>
  )
}

export default App
