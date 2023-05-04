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
import Footer from '../../Footer/footer.js';
import Sidebar from '../../sidebar/Sidebar.js';
import Nav from '../../Nav/Nav';


const Component2 = () => {
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
    let vegetables2=[
      {
         id:13,
         img:"https://www.bigbasket.com/media/uploads/p/s/40222670_1-thums-up-soft-drink.jpg",
         icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
         heading:"Thums Up",
         details:"Soft Drink",
         strike:"RS.99",
         rupees:"RS 70",
         stock:"20",
         delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
         quantity:["2kg-Rs 46.00","1kg-RS 80.00","5kg-RS 500.00"],
       },
       {
           id:14,
           img:"https://www.bigbasket.com/media/uploads/p/s/100401162_19-coca-cola-diet-coke-soft-drink.jpg",
           heading:"Coca Cola",
           details:"Diet Coke Soft Drink",
           strike:"RS.50",
           rupees:"RS.40",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["2kg-Rs 40.00","1kg-RS 20.00","250g-RS 20.00"],
         },
         {
           id:15,

           img:"https://www.bigbasket.com/media/uploads/p/s/40018072_26-coca-cola-coke-zero-soft-drink-no-sugar.jpg",
           heading:"Coca Cola",
           details:"Zero Sugar Soft Drink",
           strike:"RS.60",
           rupees:"RS 40",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
         },
         {
           id:16,            
           img:"https://www.bigbasket.com/media/uploads/p/s/40222671_1-sprite-soft-drink-lime-flavoured.jpg",
           heading:"Sprite",
           details:"Soft Drink",
           strike:"RS.99",
           rupees:"RS.90 ",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
         },
         {
           id:17,
             img:"https://www.bigbasket.com/media/uploads/p/s/251023_11-coca-cola-soft-drink-original-taste.jpg",
             heading:"Coca Cola",
             details:"Soft Drink",
             strike:"RS.40",
             rupees:"RS 30",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 5.00","1kg-RS 50.00","250g-RS 10.00","500g-Rs 15.00"],
           },
           {
             id:18,
             img:"https://www.bigbasket.com/media/uploads/p/s/265680_11-kinley-sparkling-water-club-soda.jpg",
             heading:"Kinley",
             details:"Sparkling Water - Club Soda",
             strike:"RS.50",
             rupees:"RS 20",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 80.00","500g-Rs 60.00"],
           },
           {  
               id:19,
               img:"https://www.bigbasket.com/media/uploads/p/s/40104245_6-pepsi-black-soft-drink-max-taste-zero-caldiet.jpg",
               heading:"Pepsi",
               details:"Black Soft Drink - Max Taste",
               strike:"RS.35",
               rupees:"RS 30",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 90.00","250g-RS 15.00","500g-Rs 40.00"],
             },
             {
               id:20,
               img:"https://www.bigbasket.com/media/uploads/p/s/100012281_10-red-bull-energy-drink.jpg",
               heading:"RED BULL",
               details:"Energy Drink",
               rating:"4.3",
               personrating:"900",
               strike:"RS.12.50",
               rupees:"RS 9.50",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 100.00","250g-RS 30.00","500g-Rs 50.00"],
             },
   ]
    const extracard = () => {
        let a = {}
        for(let i=0; i< vegetables2.length ;i++){
             a[ vegetables2[i].id] = 1;
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
      <Nav/>
        <div class="fruitcontainer">
            <div class="fruitrow">
            <div className='fruitcol1'>
                <Sidebar/>
            </div>
            <div className='fruitcol2'>
                <div className="fruitcontent">
           {vegetables2.map((value,index)=>{
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
                                className="image"
                                
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
                                             <button className='footicon' onClick={()=>dispatch({type:"REMOVE",payload:value})} style={{backgroundColor:'red',color:'white'}}>REMOVE</button>
                                        ) : (
                                            <button className='footicon' onClick={()=>dispatch({type:"CART",payload:value})} >ADD CART</button>
                                        )}
                                      
                                    
                                    </div>
                                </div>
                            </CardContent>
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

export default Component2