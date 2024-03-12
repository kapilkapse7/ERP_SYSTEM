import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter }  from "react-router-dom";
import {ShopContextProvider} from "../src/Context/ShopContextProvider.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <ShopContextProvider>
//     <App />
//   </ShopContextProvider>
// </BrowserRouter>



  <BrowserRouter> <ShopContextProvider> <App /> </ShopContextProvider> </BrowserRouter>
  
,
)



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from "react-router-dom";
// import { ShopContextProvider } from "../src/Context/ShopContextProvider.jsx";

// ReactDOM.render(
//   <BrowserRouter>
//     <ShopContextProvider>
//       <App />
//     </ShopContextProvider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );