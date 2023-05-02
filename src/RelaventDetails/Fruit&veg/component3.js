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


const Component3 = () => {
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
    let vegetables3=[
      {
         id:29,
         img:"https://www.bigbasket.com/media/uploads/p/l/1221868_1-fresho-tender-coconut.jpg",
         icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
         heading:"Fresho",
         details:"Tender Coconut",
         strike:"RS.200.20",
         rupees:"RS 200",
         stock:"20",
         delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
         quantity:["2kg-Rs 46.00","1kg-RS 80.00","5kg-RS 500.00"],
       },
       {
           id:30,
           img:"https://www.bigbasket.com/media/uploads/p/l/40120006_5-fresho-pomegranate-small.jpg",
           heading:"Fresho",
           details:"Fresho Pomegranate Regular",
           strike:"RS.210",
           rupees:"RS 160",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["2kg-Rs 40.00","1kg-RS 20.00","250g-RS 20.00"],
         },
         {
           id:31,
           img:"https://www.bigbasket.com/media/uploads/p/l/10000207_24-fresho-watermelon-small.jpg",
           heading:"Fresho",
           details:"Watermelon - Small",
           strike:"RS.94",
           rupees:"RS 54",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
         },
         {
           id:32,            
           img:"https://www.bigbasket.com/media/uploads/p/l/10000267_24-fresho-orange-nagpur-regular.jpg",
           heading:"Fresho",
           details:"Apple - Shimla",
           strike:"RS.172.38",
           rupees:"RS 132",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
         },
         {
           id:33,
             img:"https://www.bigbasket.com/media/uploads/p/l/40033819_29-fresho-apple-shimla.jpg",
             heading:"Fresho",
             details:"Cucumber(Loose)",
             strike:"RS.18.63",
             rupees:"RS 14",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 5.00","1kg-RS 50.00","250g-RS 10.00","500g-Rs 15.00"],
           },
           {
             id:34,
             img:"https://www.bigbasket.com/media/uploads/p/l/10000298_10-fresho-banganapalli-mango.jpg",
             heading:"Fresho",
             details:"Banganapalli Mango",
             strike:"RS.90",
             rupees:"RS 64",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 80.00","500g-Rs 60.00"],
           },
           {  
               id:35,
               img:"https://www.bigbasket.com/media/uploads/p/l/10000031_21-fresho-banana-yelakki.jpg",
               heading:"Fresho",
               details:"Banana - Yelakki",
               strike:"RS.110",
               rupees:"RS 84",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 90.00","250g-RS 15.00","500g-Rs 40.00"],
             },
             {
               id:36,
               img:"https://www.bigbasket.com/media/uploads/p/l/10000013_24-fresho-avocado.jpg",
               heading:"Fresho",
               details:"Avocado (Loose)",
               strike:"RS.207",
               rupees:"RS 150",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 100.00","250g-RS 30.00","500g-Rs 50.00"],
             },
   ]
    const extracard = () => {
        let a = {}
        for(let i=0; i<vegetables3.length ;i++){
             a[vegetables3[i].id] = 1;
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
        <div class="fruitcontainer">
            <div class="fruitrow">
            <div className='fruitcol1'>
                <Sidebar/>
            </div>
            <div className='fruitcol2'>
                <div className="fruitcontent">
           {vegetables3.map((value,index)=>{
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
                                 <h6>QUANTITY</h6>   
                                <button className='btn' onClick={()=>decrement(value.id)}>-</button>
                                <input class="inputcard" value={func[value.id] } size={6}/>
                                 <button className='btn' onClick={()=>increment(value.id,value.stock)}>+</button>
                                    </div>
                                    <div>
                                    
                                        {cart.some(e => e.id === value.id) ? (
                                             <button className='footicon' onClick={()=>dispatch({type:"REMOVE",payload:value})} style={{backgroundColor:'red'}}>REMOVE CART</button>
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

export default Component3