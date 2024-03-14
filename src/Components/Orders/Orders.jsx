
import React, { useState, useEffect } from 'react';
import orders from '../../Assets/order_data';
import "./Orders.css";
import { Link } from 'react-router-dom';
import calendar from "../../Assets/calendar.png"

const Orders = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Packed":
        return "rgb(251, 251, 48)";
      case "Shipped":
        return "orange";
      case "Delivered":
        return "rgb(40, 244, 40)";
      default:
        return "white";
    }
  };

  const [orderStatuses, setOrderStatuses] = useState(orders.map(order => order.status));

  const handleChangeStatus = (index, event) => {
    const newOrderStatuses = [...orderStatuses];
    newOrderStatuses[index] = event.target.value;
    setOrderStatuses(newOrderStatuses);
  };

  useEffect(() => {
    const selectElements = document.querySelectorAll('.custom-select');
    selectElements.forEach((select, index) => {
      select.style.backgroundColor = getStatusColor(orderStatuses[index]);
    });
  }, [orderStatuses]);

  return (
    <div className='list-order'>
  <h1>All Orders List</h1>
  <div className='order-format-main'>
    <p>Order ID</p>
    <p>Customer Name</p>
    <p>Order Date</p>
    <p>Status</p>
  </div>

  <div className='order-all-orders'>
    {orders.map((order, index) => (
      <div key={index} className={`order-format-main order-format`}>
        <p>{order.order_id}</p>
        <p>{order.customername}</p>
        <p>{order.order_date}</p>
        <div className='select-wrapper'>
          <select value={orderStatuses[index]} className='custom-select' onChange={(event) => handleChangeStatus(index, event)}>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Packed">Packed</option>
          </select>
        </div>
      </div>
    ))}
  </div>
  
  <div className='cal'>
  <Link to={'/Calendar'} >
  <img src={calendar} />
     <button>Orders In Transist</button></Link>
  </div>
</div>


  );
};

export default Orders;

