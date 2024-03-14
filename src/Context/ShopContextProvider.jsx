import React, { createContext, useEffect, useState } from "react";
import all_products from "../Assets/data"


export const ShopContext = createContext(null);

export const ShopContextProvider = (props)=>{
    const [all_product, setAll_Product] = useState(all_products);
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const[product_total, setProduct_total] = useState(0);

   
    const contextValue = {all_product,setAll_Product, setShowAddProductForm, showAddProductForm, product_total,setProduct_total}

    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider

