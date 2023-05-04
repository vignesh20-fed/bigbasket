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
import StarIcon from '@mui/icons-material/Star';
import "./snack.css"
import Footer from '../../Footer/footer.js';
import Sidebar from '../../sidebar/Sidebar.js';
import Nav from '../../Nav/Nav';
const Snack3 = () => {
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
    let snack3=[
      {
         id:81,
         img:"https://www.bigbasket.com/media/uploads/p/l/40195263_7-sunfeast-yippee-noodles-magic-masala.jpg",
         icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
         heading:"Tasties",
         details:"Khata Meetha",
         rating:"4",
         rupees:"RS 50",
         delievery:"Standard Delivery : Not available",
         quantity:["2kg-Rs 46.00","1kg-RS 80.00","5kg-RS 500.00"],
       },
       {
           id:82,
           img:"https://www.bigbasket.com/media/uploads/p/l/40015686_9-del-monte-tomato-ketchup-classic-blend-rich-thick-condiment.jpg",
           heading:"Tasties",
           details:"Aloo Bhujia Namkeen",
           rating:"4",
           rupees:"RS 15",
           delievery:"Standard Delivery: Not available",
           quantity:["2kg-Rs 40.00","1kg-RS 20.00","250g-RS 20.00"],
         },
         {
           id:83,
           img:"https://www.bigbasket.com/media/uploads/p/l/40214658_3-tasties-vinegar.jpg",
           heading:"24 Mantra Organic",
           details:"Peanut Joggery Chikki",
           rating:"4",
           rupees:"RS 50",
           delievery:"Standard Delivery : Not available",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
         },
         {
           id:84,            
           img:"https://www.bigbasket.com/media/uploads/p/l/40125873_5-maggi-2-minute-noodles-masala.jpg",
           heading:"Britannia NutriChoice",
           details:"Digestive High Fibre Biscuits -",
           rating:"4.2",
           rupees:"RS 199",
           delievery:"Standard Delivery: Not available",
           quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
         },
         {
           id:85,
             img:"https://www.bigbasket.com/media/uploads/p/l/40112467_9-happychef-durum-wheat-pasta-spaghetti.jpg",
             heading:"Tasties",
             details:"Namkeen-Khatta Murruku",
             rating:"3.6",
             rupees:"RS 14",
             delievery:"Standard Delivery: Not available",
             quantity:["50g-Rs 5.00","1kg-RS 50.00","250g-RS 10.00","500g-Rs 15.00"],
           },
           {
             id:86,
             img:"https://www.bigbasket.com/media/uploads/p/l/40222038_2-habanero-creamy-white-pasta-sauce-cheese-sauce.jpg",
             heading:"Cadbury Oreo",
             details:"Original Vanilla-Flavoured",
             rating:"4.2",
             rupees:"RS 85",
             stock:"20",
             delievery:"Standard Delivery: Not available",
             quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 80.00","500g-Rs 60.00"],
           },
           {  
               id:87,
               img:"https://www.bigbasket.com/media/uploads/p/l/202277_9-dabur-100-pure-honey-worlds-no1-honey-brand-with-no-sugar-adulteration.jpg",
               heading:"Pringles",
               details:"Potato Chips - Sour Cream",
               rating:"4.2",
               rupees:"RS 115",
               delievery:"Standard Delivery: Not available",
               quantity:["50g-Rs 10.00","1kg-RS 90.00","250g-RS 15.00","500g-Rs 40.00"],
             },
             {
               id:88,
               img:"https://www.bigbasket.com/media/uploads/p/l/40073727_10-bb-royal-100-pure-honey.jpg",
               heading:"Britannia",
               details:"Marie Gold Biscuit ",
               rating:"4.2",
               rupees:"RS 140",
               delievery:"Standard Delivery: Not available",
               quantity:["50g-Rs 10.00","1kg-RS 100.00","250g-RS 30.00","500g-Rs 50.00"],
             },
   ]
    const extracard = () => {
        let a = {}
        for(let i=0; i<snack3.length ;i++){
             a[snack3[i].id] = 1;
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
        <Nav/>
            <div class="fruitrow">
            <div className='fruitcol1'>
                <Sidebar/>
            </div>
            <div className='fruitcol2'>
                <div className="fruitcontent">
           {snack3.map((value,index)=>{
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
                                <button className="snackbtn">{value.rating}</button>
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

export default Snack3