import React, { createContext, useState } from 'react';
export const Context = createContext();

function ContextProvider({children}) {

    const[product,setProduct]= useState(null)
    const[cartProducts,setCartProducts]= useState(null)
console.log(children)
    return (
    
      <Context.Provider value={{product,setProduct,cartProducts,setCartProducts}}>
        {children}
      </Context.Provider>
  )
}
export default ContextProvider;


