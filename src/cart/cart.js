import React,{useContext,useState} from 'react'
import { stateContext } from '../context/statecontext.js';
import './cart.css'
const Cart = () => {
    const {state:{cart},dispatch}= useContext(stateContext)
    console.log(cart)
    const extracard = () => {
      let a = {}
      for(let i=0; i<cart.length ;i++){
           a[cart[i].id] = 1;
      }
      return a;
  }
  console.log(extracard());
  const [func,setFunc]=useState(extracard())
  console.log(func);
  const decrement = (id) =>{
     
      if(func[id] > 0){
        setFunc(prevcount => ({...prevcount,[id] : prevcount[id] - 1}))
      }
 
    }

    const increment = (id,stock) =>{
      if(func[id] < stock){
        setFunc(prevcount => ({...prevcount, [id] : prevcount[id] + 1}))
      }
    }
  return (
    <div>
      <div className='cartcontainer'>
      <div className='cartrow'>
        {cart.map((value,index)=>{
                      return <>
                      <div>
                          {value.img}
                      </div>
                      <div>
                          <h5>{value.heading}</h5>
                          <h6>{value.details}</h6>
                      </div>
                      <div>  
                                <button className='btn' onClick={()=>decrement(value.id)}>-</button>
                                <input class="inputcard" value={func[value.id] } size={1}/>
                                 <button className='btn' onClick={()=>increment(value.id,value.stock)}>+</button>      
                      </div>
                       
   
    </>
})}
 </div>
 </div>
 </div>
  )
}

export default Cart