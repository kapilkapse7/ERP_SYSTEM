import React from 'react'
import './admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route  } from 'react-router-dom'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Orders from '../../Components/Orders/Orders'
import MyCalendar from '../../Components/Calendar/Calendar'



const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/ERP_SYSTEM' element={<Dashboard />} />
        <Route path='/products' element = {<ListProduct/>}/>
        <Route path='/orders' element = {<Orders/>}/>
        <Route path='/Calendar' element={<MyCalendar/>} />

      </Routes>
    </div>
  )
}

export default Admin