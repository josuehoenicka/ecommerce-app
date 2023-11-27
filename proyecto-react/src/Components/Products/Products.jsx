import React from "react";
import "./Products.css";

import { useContext } from "react";
import { Context } from "../../Context";

import { AiOutlinePlus } from "react-icons/ai";

function Products(data) {


  const {setOpenProductDetail, setProductCard, setOpenCartAside, counter, setCounter, cartProducts, setCartProducts} = useContext(Context);


  const showProduct = (productData) => {
    setOpenProductDetail(true);
    setProductCard(productData);
    setOpenCartAside(false);
  }

  const addToCart = (e, productData) => {
    e.stopPropagation();
    setCounter(counter + 1);
    setCartProducts([...cartProducts, productData])


    console.log(cartProducts);
    console.log(productData);
  }


  return (

      <div className="releases-product-container" onClick={()=> showProduct(data)}>
        <div className="realases-products">
          <AiOutlinePlus className='add-icon' onClick={(e) => addToCart(e, data)}/>
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
