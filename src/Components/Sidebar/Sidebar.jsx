import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import add_product_icon from "../../Assets/Product_Cart.svg"
import list_product_icon from "../../Assets/Product_list_icon.svg"

const Sidebar = () => {


  return (<>
    <div className='sidebar'>
    

    <Link to={'//ERP_SYSTEM/'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
            <img src={list_product_icon} />
            <p>DashBoard </p>
        </div>
    </Link>

    <Link to={'/products'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
            <img src={list_product_icon} />
            <p>Product Management </p>
        </div>
    </Link>


    <Link to={'/orders'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
            <img src={list_product_icon} />
            <p>Order Management </p>
        </div>
    </Link>

    </div>

    </>
  )
}

export default Sidebar