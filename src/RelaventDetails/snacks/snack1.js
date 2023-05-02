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

const Snack1 = () => {
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
       
        if(func[id] > 0){
          setFunc(prevcount => ({...prevcount,[id] : prevcount[id] - 1}))
        }
   
      }
  
      const increment = (id,stock) =>{
        if(func[id] < stock){
          setFunc(prevcount => ({...prevcount, [id] : prevcount[id] + 1}))
        }
      }
     let snack1=[
        {
           id:1,
           img:"https://www.bigbasket.com/media/uploads/p/l/40115856_10-tasties-namkeen-khatta-meetha.jpg",
           icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
           heading:"Tasties",
           details:"Khata Meetha",
           rating:"4",
           rupees:"RS 50",
           delievery:"Standard Delivery : Not available",
           quantity:["2kg-Rs 46.00","1kg-RS 80.00","5kg-RS 500.00"],
         },
         {
             id:2,
             img:"https://www.bigbasket.com/media/uploads/p/l/40115851_8-tasties-namkeen-aloo-bhujia.jpg",
             heading:"Tasties",
             details:"Aloo Bhujia Namkeen",
             rating:"4",
             rupees:"RS 15",
             delievery:"Standard Delivery: Not available",
             quantity:["2kg-Rs 40.00","1kg-RS 20.00","250g-RS 20.00"],
           },
           {
             id:3,
             img:"https://www.bigbasket.com/media/uploads/p/l/40241564_1-24-mantra-organic-peanut-chikki-bar-rich-in-protein-crispy-crunchy-no-additives.jpg",
             heading:"24 Mantra Organic",
             details:"Peanut Joggery Chikki",
             rating:"4",
             rupees:"RS 50",
             delievery:"Standard Delivery : Not available",
             quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
           },
           {
             id:4,            
             img:"https://www.bigbasket.com/media/uploads/p/l/40197803_4-britannia-nutrichoice-digestive-high-fibre-biscuits-super-saver-family-pack.jpg",
             heading:"Britannia NutriChoice",
             details:"Digestive High Fibre Biscuits -",
             rating:"4.2",
             rupees:"RS 199",
             delievery:"Standard Delivery: Not available",
             quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
           },
           {
             id:5,
               img:"https://www.bigbasket.com/media/uploads/p/l/40200872_4-tasties-namkeen-khatta-murukku-jantikalu.jpg",
               heading:"Tasties",
               details:"Namkeen-Khatta Murruku",
               rating:"3.6",
               rupees:"RS 14",
               delievery:"Standard Delivery: Not available",
               quantity:["50g-Rs 5.00","1kg-RS 50.00","250g-RS 10.00","500g-Rs 15.00"],
             },
             {
               id:6,
               img:"https://www.bigbasket.com/media/uploads/p/l/40122466_8-cadbury-oreo-vanilla-creme-biscuit-family-pack.jpg",
               heading:"Cadbury Oreo",
               details:"Original Vanilla-Flavoured",
               rating:"4.2",
               rupees:"RS 85",
               stock:"20",
               delievery:"Standard Delivery: Not available",
               quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 80.00","500g-Rs 60.00"],
             },
             {  
                 id:7,
                 img:"https://www.bigbasket.com/media/uploads/p/l/100006683_29-pringles-sour-cream-onion.jpg",
                 heading:"Pringles",
                 details:"Potato Chips - Sour Cream",
                 rating:"4.2",
                 rupees:"RS 115",
                 delievery:"Standard Delivery: Not available",
                 quantity:["50g-Rs 10.00","1kg-RS 90.00","250g-RS 15.00","500g-Rs 40.00"],
               },
               {
                 id:8,
                 img:"https://www.bigbasket.com/media/uploads/p/l/40197801_7-britannia-marie-gold-biscuits.jpg",
                 heading:"Britannia",
                 details:"Marie Gold Biscuit ",
                 rating:"4.2",
                 rupees:"RS 140",
                 delievery:"Standard Delivery: Not available",
                 quantity:["50g-Rs 10.00","1kg-RS 100.00","250g-RS 30.00","500g-Rs 50.00"],
               },
     ]
  return (
    <div>
        <div class="fruitcontainer">
        <Link to="/fourthslide">,dcml;mc</Link>
            <div class="fruitrow">
            <div className='fruitcol1'>
                <Sidebar/>
            </div>
            <div className='fruitcol2'>
                <div className="fruitcontent">
           {snack1.map((value,index)=>{
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

export default Snack1