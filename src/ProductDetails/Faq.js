import React, { useContext } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "./faq.css"
import ScaleIcon from '@mui/icons-material/Scale';
import AddIcon from '@mui/icons-material/Add';
import { stateContext } from '../context/statecontext';

const Faq = () => {
  const {state:{get},dispatch}=useContext(stateContext)
  console.log("stateproduct",get)

  return (
    <div>
         <div className ='container'>
           <div className='row'>
           {[get.obj]?.map((value,index)=>{
                      return <>
                      <h1 className='faq1'>{value.details}</h1>
               <div className='col-lg-10 faq-sec'>
               <Accordion className='para'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>About the Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This {value.details} are nutrient-dense, non-fattening and have reasonable amount of calories. Include them in your regular meals so that the body receives a good supply of carbohydrates, dietary fibers and essential minerals such as copper, magnesium, and iron. In India, potatoes are probably the second-most consumed vegetables after onions.
            Click here for delicious vegetable recipes - https://www.bigbasket.com/flavors/collections/227/fresh-vegetables/
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='para'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Benefits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <ul>
          <li>Consumption of potatoes helps to maintain the blood glucose level and keeps the brain alert and active. </li>
          <li>{value.details} should be included in the diet of those having mouth ulcers. As they are easy to digest, they are good for patients.</li>
          <li>People who are diagnosed with kidney stones or heart disorders can include potatoes in their diet as they are light on the stomach.</li>
          <li>Apart from containing useful minerals such as potassium, iron, copper and magnesium, potatoes are also full of phytochemical antioxidants such as flavonoids, Vitamin B and folate.</li>
           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='para'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Storage and Uses </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <ul>
          <li>Product should always be stored in a cool, dark and dry place that is preferably in your visibility.If not attended to for a long time these potatoes will begin to sprout due to preferable environment conditions like that under the soil and end up loosing nutritional value.</li>
         <li>Never keep under direct sunlight as they soon turn green due to the chlorophyll produced which releases some toxic substances.Refrigeration adversely affects the flavour of potatoes, therefore it is best to store them in paper bags. Remember, plastic bags promote moisture and speed decay process.</li>
        <li>They can be baked, roasted, steamed, grilled and deep fried. Also can be cooked and added to noodles, rice and curries.</li>
         </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='para'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Other Product Info </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <address>
           EAN Code: 10000159<br></br>
              Country of origin: India<br></br>
              Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd, No. 7, Service Road, Off 100 Feet Road Indiranagar Landmark: Above HDFC Bank Bangalore, Karnataka 560071<br></br>
              Best before 3 days from delivery date<br></br>
              For Queries/Feedback/Complaints, Contact our Customer Care Executive at: Phone: 1860 123 1000 | Address: Supermarket Grocery Supplies Pvt Ltd. No7, Service Road, Domlur 100 Feet Road, Indiranagar, Bangalore 560071. | Email: customerservice@bigbasket.com<br></br>
           </address>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='para'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Variable weight policy </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>  
         <ScaleIcon/> Please note that the item(s) in this product may vary slightly in size and weight. Hence, the actual weight of the product delivered can have a small variance. You will be billed based on the actual weight during order processing.
          </Typography>
        </AccordionDetails>
      </Accordion>
               </div>
               </>
            })}
           </div>
         </div>
    </div>
  )
}

export default Faq