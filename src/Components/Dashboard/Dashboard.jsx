
import React from 'react';
import Piechart from '../materials/Piechart/Piechart';
import Card from '../materials/Card/Card';
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContextProvider';
import "./Dashboard.css"



const Dashboard = () => {
const {product_total,setProduct_total,all_product} = useContext(ShopContext);


useEffect(() => {
  const calculateTotal = () => {
    let totalStocks = 0;
    all_product.forEach(product => {
      totalStocks += parseInt(product.quantity, 10);
    });
    setProduct_total(totalStocks);
  };

  calculateTotal();
}, [all_product, setProduct_total]);

  return (<div className='main-container'>


  <div className='order-details'>
  <h3>Sales Activity</h3>
  <hr/>
  <div class="card-container">
    <Card product_total={228} text={"Items to be Packed"} c={"red"}/>
    <Card product_total={22} text={"Items to be Delivered"} c={"green"}/>
    <Card product_total={28} text={"Items to be Shipped"} c={"blue"}/>
  </div>
</div>

<div className='inventory'>
<h3>Inventory Status</h3>
<hr />
    <div className='inventory-charts'>
        <Piechart percentage={(product_total / 400) * 100} colour="blue" />
        <Card product_total={product_total} text={"Total Stock In Inventory"} c={"green"} />   
    </div>
    </div>
  </div>)

};

export default Dashboard;
