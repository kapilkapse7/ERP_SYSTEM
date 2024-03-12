import React, { useContext, useEffect, useState } from 'react'
import "./ListProduct.css"
import cross_icon from "../../Assets/cross_icon.png"

// import allproduct from "../../Assets/all_product.js"
import Addproduct from '../AddProduct/AddProduct.jsx'


import { ShopContext } from "../../Context/ShopContextProvider.jsx";

const Listproduct = () => {
  const{all_product} = useContext(ShopContext);
  const{setAll_Product, showAddProductForm, setShowAddProductForm} = useContext(ShopContext);


  const remove_product = async (name)=>{
    let arrayOfObjects = all_product.filter(obj => obj.name !== name);
    setAll_Product(arrayOfObjects);
  }



  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className='listproduct-allproduct'>
        <hr></hr>
        {all_product.map((product,index)=>{
          return <><div key ={index} className='listproduct-format-main listproduct-format'> 
          <img src ={product.image} className='listproduct-product-icon' />
          <p className='text'>{product.name} </p>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
          <p>{product.category}</p>
          <img onClick={() =>{remove_product(product.name)}} className='listproduct-remove-icon' src={cross_icon} ></img>
          </div>
          <hr></hr>

          </>
        })}
        <button onClick={()=>{setShowAddProductForm(true)}} className='btn'>Add New Prodcut</button>
      </div>
      {showAddProductForm && <Addproduct />}
    </div>

  )
}

export default Listproduct


{/* <select value={productDetails.category} onChange={changeHandler} name='category' className='addproduct-selector'>
                    <option value="Charchaters">Charchaters</option>
                    <option value="Anime">Anime</option>
                    <option value="Idols">Idols</option>
                </select> */}