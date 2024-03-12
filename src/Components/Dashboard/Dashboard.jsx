
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

  return (<>
    <div className="piechart-container">
        <Piechart percentage={(product_total / 400) * 100} colour="blue" />
      </div>
      <div className="card-container">
        <Card product_total={product_total} />
      </div>

    
  </>)

};

export default Dashboard;
