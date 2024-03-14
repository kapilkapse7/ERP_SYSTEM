import React from 'react'
import './admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route  } from 'react-router-dom'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Orders from '../../Components/Orders/Orders'



const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/products' element = {<ListProduct/>}/>
        <Route path='/orders' element = {<Orders/>}/>

      </Routes>
    </div>
  )
}

export default Admin