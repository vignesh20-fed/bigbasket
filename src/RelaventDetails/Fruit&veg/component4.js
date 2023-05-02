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


const Component4 = () => {
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
    let vegetables4=[
      {
         id:21,
         img:"https://www.bigbasket.com/media/uploads/p/l/10000126_16-fresho-lemon.jpg",
         icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
         heading:"Fresho",
         details:"Lemon (Loose)",
         strike:"RS.26.32",
         rupees:"RS 15",
         stock:"20",
         delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
         quantity:["2kg-Rs 46.00","1kg-RS 80.00","5kg-RS 500.00"],
       },
       {
           id:22,
           img:"https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
           heading:"Fresho",
           details:"Coriander Leaves",
           strike:"RS.25",
           rupees:"RS 19",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["2kg-Rs 40.00","1kg-RS 20.00","250g-RS 20.00"],
         },
         {
           id:23,
           img:"https://www.bigbasket.com/media/uploads/p/l/10000338_13-fresho-ginger.jpg",
           heading:"Fresho",
           details:"Ginger (Loose)",
           strike:"RS.28",
           rupees:"RS 21",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
         },
         {
           id:24,            
           img:"https://www.bigbasket.com/media/uploads/p/l/10000330_14-fresho-garlic.jpg",
           heading:"Fresho",
           details:"Garlic (Loose)",
           strike:"RS.67.11",
           rupees:"RS 30",
           stock:"20",
           delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
         },
         {
           id:25,
             img:"https://www.bigbasket.com/media/uploads/p/l/10000104_17-fresho-curry-leaves.jpg",
             heading:"Fresho",
             details:"Curry Leaves",
             strike:"RS.50.21",
             rupees:"RS 30",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 5.00","1kg-RS 50.00","250g-RS 10.00","500g-Rs 15.00"],
           },
           {
             id:26,
             img:"https://www.bigbasket.com/media/uploads/p/l/10000081_19-fresho-chilli-green-long-medium.jpg",
             heading:"Fresho",
             details:"Chilli - Green Long, Medium (Loose)",
             strike:"RS.10",
             rupees:"RS 8",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 80.00","500g-Rs 60.00"],
           },
           {  
               id:27,
               img:"https://www.bigbasket.com/media/uploads/p/l/40010687_4-fresho-garlic-peeled.jpg",
               heading:"Fresho",
               details:"Garlic - Peeled",
               strike:"RS.55.26",
               rupees:"RS 40",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 90.00","250g-RS 15.00","500g-Rs 40.00"],
             },
             {
               id:28,
               img:"https://www.bigbasket.com/media/uploads/p/l/10000079_16-fresho-chilli-bajji-mild.jpg",
               heading:"Fresho",
               details:"Chilli - Bajji, Mild (Loose)",
               strike:"RS.24",
               rupees:"RS 10",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 100.00","250g-RS 30.00","500g-Rs 50.00"],
             },
   ]
    const extracard = () => {
        let a = {}
        for(let i=0; i<vegetables4.length ;i++){
             a[vegetables4[i].id] = 1;
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
           {vegetables4.map((value,index)=>{
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
                                <input class="inputcard" value={func[value.id] } size={5}/>
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

export default Component4