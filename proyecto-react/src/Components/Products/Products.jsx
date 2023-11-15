import React, { useContext } from 'react';
import './Products.css';
import {AiOutlinePlus} from "react-icons/ai"
import { Context } from '../../Context';




// "https://lavaindumentaria.com.ar/wp-content/uploads/2023/05/Sin-titulo-12.jpg"

function Products(data){
  console.log(data)
  // {title, imgSrc, price, category}
  const{product,setProduct,cartProducts,setCartProducts}= useContext(Context)
 
  function addToCart(productData){
   setProduct(productData)
console.log(productData)
  }

  return (

      <div className="releases-product-container">
        <div className="realases-products">
          <AiOutlinePlus onClick={()=>addToCart(data)} className='add-icon'/>
          <div className="realeses-image-container">
            <img className="realeses-img" src={data.imgSrc} alt={data.title}/>
          </div>
          <div className="realeses-description-container">
            <p className="realeses-type">{data.category}</p>
            <p className="realeses-name">{data.title}</p>
            <p className="realeses-price">${data.price}</p>
          </div>
        </div>
      </div>
  );
}

export default Products;
