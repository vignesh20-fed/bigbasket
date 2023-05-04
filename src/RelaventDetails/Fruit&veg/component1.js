import React,{useContext, useState} from 'react'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { stateContext } from '../../context/statecontext.js';
import { useNavigate , Link} from 'react-router-dom';
import "./component.css"
import Nav from '../../Nav/Nav';
import Footer from '../../Footer/footer.js';
import Sidebar from '../../sidebar/Sidebar.js';
import { Icon } from '@iconify/react';
const Component1 = () => {
    const {state:{cart,teams},dispatch}= useContext(stateContext)
    console.log(cart)

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    let navigate4 = useNavigate();
    const productShow = (value, qty) => {
      navigate4("/secondslide");
      dispatch({type:"DETAILS",payload:{obj : value, quantity : qty}})
    }
    let vegetables=[
      {
         id:9,
         img:"https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg",
         icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
         heading:"Fresho",
         details:"Onion(Loose)",
         strike:"RS.151.32",
         rupees:"RS 150",
         stock:"20",
         delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
         quantity:["2kg-Rs 46.00","1kg-RS 80.00","5kg-RS 500.00"],
         offer:"GET 20% OFF"
       },
       {
           id:10,
           img:"https://www.bigbasket.com/media/uploads/p/l/10000159_27-fresho-potato.jpg",
           heading:"Fresho",
           details:"Potato",
           strike:"RS.35",
           rupees:"RS 27",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["2kg-Rs 40.00","1kg-RS 20.00","250g-RS 20.00"],
           offer:"GET 30% OFF"
         },
         {
           id:11,
           img:"https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg",
           heading:"Fresho",
           details:"Capsicum - Green(Loose)",
           strike:"RS.52.63",
           rupees:"RS 40",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
           offer:"GET 60% OFF"
         },
         {
           id:12,            
           img:"https://www.bigbasket.com/media/uploads/p/l/10000071_14-fresho-carrot-orange.jpg",
           heading:"Fresho",
           details:"Carrot-Orange(Loose)",
           strike:"RS.13.16",
           rupees:"RS 10",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
           offer:"GET 80% OFF"
         },
         {
           id:13,
             img:"https://www.bigbasket.com/media/uploads/p/l/10000102_17-fresho-cucumber.jpg",
             heading:"Fresho",
             details:"Cucumber(Loose)",
             strike:"RS.18.63",
             rupees:"RS 14",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 5.00","1kg-RS 50.00","250g-RS 10.00","500g-Rs 15.00"],
             offer:"GET 70% OFF"
           },
           {
             id:14,
             img:"https://www.bigbasket.com/media/uploads/p/l/10000097_19-fresho-coriander-leaves.jpg",
             heading:"Fresho",
             details:"Coriander Leaves",
             strike:"RS.25",
             rupees:"RS 19",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 80.00","500g-Rs 60.00"],
             offer:"GET 40% OFF"
           },

           {  
               id:15,
               img:"https://www.bigbasket.com/media/uploads/p/l/10000063_20-fresho-broccoli.jpg",
               heading:"Fresho",
               details:"Borccoli",
               strike:"RS.28.03",
               rupees:"RS 22",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 90.00","250g-RS 15.00","500g-Rs 40.00"],
               offer:"GET 50% OFF"
             },
             {
               id:16,
               img:"https://www.bigbasket.com/media/uploads/p/l/10000047_21-fresho-beetroot.jpg",
               heading:"Fresho",
               details:"Beet -root (Loose)",
               strike:"RS.12.50",
               rupees:"RS 9.50",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 100.00","250g-RS 30.00","500g-Rs 50.00"],
               offer:"GET 90% OFF"
             },
   ]
    const extracard = () => {
        let a = {}
        for(let i=0; i<vegetables.length ;i++){
             a[vegetables[i].id] = 1;
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
      {/* <Nav/> */}
        <div class="fruitcontainer">
            <div class="fruitrow">
            <div className='fruitcol1'>
                <Sidebar/>
            </div>
            <div className='fruitcol2'>
                <div className="fruitcontent">
           {vegetables.map((value,index)=>{
                      return <>
                      
                      <div className='fruitcol3'>
                      <div className='fruitcard' key={index}>
                      <Card sx={{ maxWidth: 300 }} className='cardcolor'>
                        <div className='image-card' onClick={()=>productShow(value, func)}>
                            <CardMedia
                                  
                                component="img"
                                // height="auto"
                                image={value.img}
                                alt="vicky"
                                className="position"
                                
                            />
                            </div>
                           
                            <CardContent >
                            <div>
                                <img src="https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg"></img>
                            </div>
                               <h6 className='map1'>{value.heading}</h6>
                               <h5>{value.details}</h5>
                             
                             <div>
                             <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    >
                                 {value.quantity?.map((e,i) =>(
                                    <MenuItem value={e}>{e}</MenuItem>
                                 ))}
                                    
                                    </Select>
                                </FormControl>
                                </Box>
                             </div>
                             <div>
                                <h6>MRP: <span><del>{value.strike}</del></span> <span>{value.rupees}</span></h6>
                             </div>
                             <div className='cardflex'>
                                <div className='cardicon'>
                                    <LocalShippingIcon/>
                                </div>
                                    <div>
                                     <h6>{value.delievery}</h6>
                                    </div>
                                </div>
                                <div className='cardfoot'>
                                <div>
                                 <h6>QUANTITY:</h6>   
                                <button className='btn' onClick={()=>decrement(value.id)}>-</button>
                                <input class="inputcard" value={func[value.id] } size={1}/>
                                 <button className='btn' onClick={()=>increment(value.id,value.stock)}>+</button>
                                    </div>
                                    <div>
                                    
                                        {cart.some(e => e.id === value.id) ? (
                                             <button className='footicon' onClick={()=>dispatch({type:"REMOVE",payload:value})} style={{backgroundColor:'red',fontSize:"10px",color:'white'}}>REMOVECART</button>
                                        ) : (
                                            <button className='footicon' onClick={()=>dispatch({type:"CART",payload:value})} >ADD CART</button>
                                        )}
                                      
                                    
                                    </div>
                                </div>
                            </CardContent>
                            <h5 className='offer'>{value.offer}<Icon icon="bxs:offer" className="offericon" /></h5>
                            </Card>
                        </div>
                        
                        </div>
                    </>
                    })}
                 </div>   
            </div>
         </div>
        </div>
        <Footer/>
    </div> 
  
  )
}

export default Component1