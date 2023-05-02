import React, {useContext,useState} from 'react'
import { stateContext } from '../context/statecontext';
import './productdetails.css'
import Footer from '../Footer/footer';

const ProductDetails = () => {
    const {state:{get,teams,cart},dispatch}=useContext(stateContext)
    console.log("stateproduct",get)
    const extracard = () => {
        let a = {}
        for(let i=0; i<teams.length ;i++){
             a[teams[i].id] = 1;
        }
        return a;
    }
    console.log(extracard());
    const [func,setFunc]=useState(extracard())
    console.log(func);
    const decrement = (id) =>{
       
        if(func[id] > 1){
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
                       <h1>{value.details}</h1>
                       <h2 className='pad'>{value?.heading}</h2>
                       <div>
                             {get.quantity[value.id]}     
                        </div>
                        {cart.some(e => e.id === value.id) ? (
                                             <button className='footicon' onClick={()=>dispatch({type:"REMOVE",payload:value})} style={{backgroundColor:'red',color:'white'}}>REMOVE CART</button>
                                        ) : (
                                            <button className='footicon' onClick={()=>dispatch({type:"CART",payload:value})} >ADD CART</button>
                                        )}
                                      
                       </div>
                       <div>
                      </div>
                      </div>
                     
               
               
            </div>
             </>
            })}
          </div>    
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetails