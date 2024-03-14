import React, { createContext, useEffect, useState } from "react";
import all_products from "../Assets/data"
import delivery_details from "../Assets/delivery";


export const ShopContext = createContext(null);

export const ShopContextProvider = (props)=>{
    const [all_product, setAll_Product] = useState(all_products);
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const[product_total, setProduct_total] = useState(0);
    const [events, setEvents] = useState(delivery_details);
    
   
    const contextValue = {all_product,setAll_Product, setShowAddProductForm, showAddProductForm, product_total,setProduct_total,events,setEvents}

    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider

