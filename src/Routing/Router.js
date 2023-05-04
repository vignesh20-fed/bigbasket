import React, { useReducer }  from 'react'
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Home from '../Home/Home';
import ProductDetails from '../ProductDetails/ProductDetails';
import RelavantProduct from '../RelaventProduct/RelavantProduct';
import { stateContext } from '../context/statecontext.js';
import { initialState, stateReducer } from '../context/reducer.js';
import Cart from '../cart/cart';
import Component1 from '../RelaventDetails/Fruit&veg/component1';
import Component2 from '../RelaventDetails/Fruit&veg/component2';
import Component3 from '../RelaventDetails/Fruit&veg/component3';
import Component4 from '../RelaventDetails/Fruit&veg/component4';
import Snack1 from '../RelaventDetails/snacks/snack1';
import Snack2 from '../RelaventDetails/snacks/snack2';
import Snack3 from '../RelaventDetails/snacks/snack3';
import Snack4 from '../RelaventDetails/snacks/snack4';
// import Bev1 from '../RelaventDetails/Bevarages/beverage01';
// import Bev2 from '../RelaventDetails/Bevarages/beverage02';
// import Bev3 from '../RelaventDetails/Bevarages/beverage03';
// import Bev4 from '../RelaventDetails/Bevarages/beverage04';
const Router = () => {
    const [state , dispatch]=useReducer(stateReducer,initialState)
  return (  <stateContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/secondslide" element={<ProductDetails/>}></Route>
         <Route path="/thirdslide" element={<RelavantProduct/>}></Route>
         <Route path="/fourthslide" element={<Cart/>}></Route>
         <Route path="/snack4" element={<Cart/>}></Route>
         <Route path="/fruit1" element={<Component1/>}></Route>
         <Route path="/fruit2" element={<Component2/>}></Route>
         <Route path="/fruit3" element={<Component3/>}></Route>
         <Route path="/fruit4" element={<Component4/>}></Route>
         <Route path="/snack1" element={<Snack1/>}></Route>
         <Route path="/snack2" element={<Snack2/>}></Route>
         <Route path="/snack3" element={<Snack3/>}></Route>
         <Route path="/snack4" element={<Snack4/>}></Route>
         {/* <Route path="/bev1" element={<Bev1/>}></Route>
         <Route path="/bev2" element={<Bev2/>}></Route>
         <Route path="/bev3" element={<Bev3/>}></Route>
         <Route path="/bev4" element={<Bev4/>}></Route> */}
         </Routes>
    </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Router