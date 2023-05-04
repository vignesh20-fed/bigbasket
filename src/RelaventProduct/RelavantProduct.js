import React from 'react'
import "./relavant.css"

import veg01 from "../Assest/IMG_23-05-01_181709651_1.jpg"
import veg02 from "../Assest/IMG_23-05-01_181709865_10.jpg"
import fruit01 from "../Assest/IMG_23-05-01_181709797_7.jpg"
import fruit02 from "../Assest/IMG_23-05-01_181709883_11.jpg"
import snack01 from "../Assest/IMG_23-05-01_181709843_9.jpg"
import snack02 from "../Assest/IMG_23-05-01_181709902_12.jpg"
import snack03 from "../Assest/IMG_23-05-01_181709684_2.jpg"
import snack04 from "../Assest/IMG_23-05-01_181709728_4.jpg"
import bev01 from "../Assest/IMG_23-05-01_181709706_3.jpg"
import bev02 from "../Assest/IMG_23-05-01_181709816_8.jpg"
import bev03 from "../Assest/IMG_23-05-01_181709749_5.jpg"
import bev04 from "../Assest/IMG_23-05-01_181709775_6.jpg"
import { useNavigate } from 'react-router-dom'

const RelavantProducts = () => {

   const fold=[
      {
     img:veg01,
   },
   {
      img:veg02,
    },
    {
      img:fruit01,
    },
    {
      img:fruit02,
    }, 
]

const beverage=[
   {
      img:bev01,
   },
   {
      img:bev02,
   },
   {
      img:bev03,
   },
   {
      img:bev04,
   }
]

const snack=[
   {
      img:snack01,
   },
   {
      img:snack02,
   },
   {
      img:snack03,
   },
   {
      img:snack04,
   }
]

const Navigate=useNavigate();
   const beverun=()=>{
      Navigate("/beverage01")
   }
//const Navigate2=useNavigate();




  return (
   <div className='product-sec'>
    <div className='product-container'>   
            <h1 className='head-sec' style={{textAlign:"center"}}> Fruits & Vegetables </h1>
         <div className='product-row'>
         {
            fold.map((value,index)=>{
               return(
               <div className='col-lg-3 box-sec' key={index}>
                  <img onClick={() => Navigate(`/fruit${index+1}`)} src={value.img}></img>
               </div>
               )
            })
         }
       </div>

       <h1 className='head-sec' style={{textAlign:"center"}}> Beverages </h1>
       <div className='product-row'>
       {
            beverage.map((value,index)=>{
               return(
               <div className='col-lg-3 box-sec' key={index}>
                  <img src={value.img} onClick={() => Navigate(`/bev${index+1}`)} ></img>
                  
               </div>
               )
            })
         }
       </div>

       <h1 className='head-sec' style={{textAlign:"center"}}> Snacks Store </h1>
       <div className='product-row'>
       {
            snack.map((value,index)=>{
               return(
               <div className='col-lg-3 box-sec' key={index}>
                  <img onClick={() => Navigate(`/snack${index+1}`)} src={value.img}></img>
               </div>
               )
            })
         }
         
       </div>
       

    </div>
    </div>
  )
}

export default RelavantProducts