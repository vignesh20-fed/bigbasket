import React, {useContext,useState} from 'react'
import { stateContext } from '../context/statecontext';
import './productdetails.css'
import Footer from '../Footer/footer';
import Nav from '../Nav/Nav';
import Faq from '../faq/Faq';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const ProductDetails = () => {
    const {state:{get,teams,cart},dispatch}=useContext(stateContext)
    console.log("stateproduct",get)

    const extracard = () => {
      let a = {}
      for(let i=0; i<get.length ;i++){
           a[get[i].id] = 1;
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
    <>
    <div class="productsec">
      <Nav/>
          <div className="containers">
          {[get.obj]?.map((value,index)=>{
                      return <>
            <div className='rowproduct' key={index}>
                    <div className='col'>
                        <div class="productcontent">
                      <img src={value?.img}/>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='productcontent2'>
                      <h2 className='pad'>{value?.heading}</h2>
                       <h1>{value.details}</h1>
                       <div>
                                <h6>MRP: <span><del>{value.strike}</del></span> <span>{value.rupees}</span></h6>
                             </div>
                             <div className='cardflex'>
                                <div className='cardicon'>
                                    <LocalShippingIcon/>
                                </div>
                                    <div className='product-card'>
                                     <h6>{value.delievery}</h6>
                                    </div>
                                </div>
                       
                       <div className='product-content'>
  
                        <div>
                                 <h6>QUANTITY</h6>   
                                <button className='btn' onClick={()=>decrement(value.id)}>-</button>
                                <input class="inputcard" value={get.quantity[value.id]} size={5}/>
                                 <button className='btn' onClick={()=>increment(value.id,value.stock)}>+</button>
                          </div>
                        <div>
                        {cart.some(e => e.id === value.id) ? (
                                             <button className='footicons1' onClick={()=>dispatch({type:"REMOVE",payload:value})} style={{backgroundColor:'red',color:'white'}}>REMOVE CART</button>
                                        ) : (
                                            <button className='footicons1' onClick={()=>dispatch({type:"CART",payload:value})} >ADD CART</button>
                                        )}
                        </div>
                        <div>
                          <button className='footicons'>SAVE</button>
                        </div>
                       </div>
                      
                    
                                      
                       </div>
                       <div>
                      </div>
                      </div>
                     
               
               
            </div>
             </>
            })}
          </div>    
          <Faq/>
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetails