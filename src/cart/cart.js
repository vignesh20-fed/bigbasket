import React,{useContext} from 'react'
import { stateContext } from '../context/statecontext.js';
const Cart = () => {
    const {state:{cart},dispatch}= useContext(stateContext)
    console.log(cart)
  return (
    <div>
        {cart.map((value,index)=>{
                      return <>
                       <h3>{value.heading}</h3>
   
    </>
})}
 </div>
  )
}

export default Cart