// import React, { useState , useContext} from 'react'
// import "./AddProduct.css"
// import upload_area from "../../Assets/upload_area.svg"
// import { ShopContext } from '../../Context/ShopContextProvider';
// import axios from 'axios';


// const Addproduct = () => {

//     const[image,setImage] = useState(false);
//     const{all_product , setAll_Product,setShowAddProductForm}  = useContext(ShopContext);

//     const [productDetails , setProductDetails] = useState({
//         name:"" ,
//     image:"" ,
//     category:"Charchaters",
//     new_price:"",
//     old_price:"",
// })

//     const imageHandler = (e)=>{
//         setImage(e.target.files[0]);

//     }

//     const changeHandler = (e) =>{
//         setProductDetails({...productDetails,[e.target.name] : e.target.value})
//     }

//     const Add_product = async()=>{
//         console.log({productDetails})
//         const updatedProductList = [...all_product, productDetails];

//         console.log("check")
//         console.log(all_product)
//         setAll_Product(updatedProductList);
//         setShowAddProductForm(false);



//     }




//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append('image', image);
    
//         try {
//           const response = await axios.post('/upload', formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           });
    
//           console.log('Image uploaded. URL:', response.data.imageUrl);
//         } catch (error) {
//           console.error('Error uploading image:', error);
//         }
//       };

//   return (
//     <div className='add-product'>
//     <div className='addproduct-itemfield'>
//         <p>Product title</p>
//         <input value = {productDetails.name } onChange={changeHandler} type='text' name='name' placeholder='Type here' />
//     </div>
//     <div className='addproduct-price'>
//         <div className='addproduct-itemfield'>
//             <p>Price</p>
//             <input  value = {productDetails.old_price } onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
//         </div>
//         <div className='addproduct-itemfield'>
//             <p>Offer Price</p>
//             <input   value = {productDetails.new_price } onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
//         </div>
//     </div>

//     <div className='addproduct-itemfield'>
//         <p>Prodcut Category</p>
//         <select  value = {productDetails.category } onChange={changeHandler} name='category' className='addproduct-selector'>
//             <option value="Charchaters">Charchaters</option>
//             <option value="Anime">Anime</option>
//             <option value="Idols">Idols</option>
//         </select>
//     </div>

//     <div className='addproduct-itemfield'>
//     <label htmlFor='file-input'>
//         <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img'/>
//     </label>
//     <input  onChange ={imageHandler} type='file' name='image' id='file-input' hidden />
//     </div>
//     <button onClick={()=>{Add_product()}} className='addproduct-btn'>ADD</button>
//     <button onClick={()=>{setShowAddProductForm(false)}} className='Cancle'>Cancle</button>
    

//     </div>
//   )
// }

// export default Addproduct


import React, { useState , useContext} from 'react';
import "./AddProduct.css";
import upload_area from "../../Assets/upload_area.svg";
import axios from 'axios';
import { ShopContext } from '../../Context/ShopContextProvider';

const Addproduct = () => {
    const[image, setImage] = useState(null);
    const { all_product, setAll_Product, setShowAddProductForm } = useContext(ShopContext);

    const [productDetails , setProductDetails] = useState({
        name: "",
        image: "",
        category: "Charchaters",
        price: "",
        quantity: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value});
    };

    const Add_product = async () => {
        try {
            const reader = new FileReader();
            reader.onload = async () => {
                const imageDataUrl = reader.result;

                const updatedProductList = [...all_product, { ...productDetails, image: imageDataUrl }];

                setAll_Product(updatedProductList);

                setShowAddProductForm(false);
            };
            reader.readAsDataURL(image);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className='add-product'>
            <div className='addproduct-itemfield'>
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
            </div>
            <div className='addproduct-price'>
                <div className='addproduct-itemfield'>
                    <p>Price</p>
                    <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Type here' />
                </div>
                <div className='addproduct-itemfield'>
                    <p>Quantity</p>
                    <input value={productDetails.quantity} onChange={changeHandler} type='text' name='quantity' placeholder='Type here' />
                </div>
            </div>

            <div className='addproduct-itemfield'>
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='addproduct-selector'>
                    <option value="Charchaters">Charchaters</option>
                    <option value="Anime">Anime</option>
                    <option value="Idols">Idols</option>
                </select>
            </div>

            <div className='addproduct-itemfield'>
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' alt="Upload" />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>

            <button onClick={Add_product} className='addproduct-btn'>ADD</button>
            <button onClick={() => setShowAddProductForm(false)} className='Cancel'>Cancel</button>
        </div>
    );
};

export default Addproduct;
