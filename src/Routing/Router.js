import React, { useReducer }  from 'react'
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Home from '../Home/Home';
import ProductDetails from '../ProductDetails/ProductDetails';
import RelavantProduct from '../RelaventProduct/RelavantProduct';
import { stateContext } from '../context/statecontext.js';
import { filterReducer, initialState, stateFilter, stateReducer } from '../context/reducer.js';
import Component1 from '../RelaventDetails/Fruit&veg/component1';
import Component2 from '../RelaventDetails/Fruit&veg/component2';
import Component3 from '../RelaventDetails/Fruit&veg/component3';
import Component4 from '../RelaventDetails/Fruit&veg/component4';
import Snack1 from '../RelaventDetails/snacks/snack1';
import Snack2 from '../RelaventDetails/snacks/snack2';
import Snack3 from '../RelaventDetails/snacks/snack3';
import Snack4 from '../RelaventDetails/snacks/snack4';

import Nav from '../Nav/Nav';
import Beverages01 from '../RelaventDetails/Beverages/Beverages01';
import Beverages02 from '../RelaventDetails/Beverages/Beverages02';
import Beverages03 from '../RelaventDetails/Beverages/Beverages03';
import Beverages04 from '../RelaventDetails/Beverages/Beverages04';



const Router = () => {
   const [filterState, filterDispatch] = useReducer(filterReducer, stateFilter)
    const [state , dispatch]=useReducer(stateReducer,initialState)
  return (  <stateContext.Provider value={{state,dispatch, filterState, filterDispatch}}>
    <BrowserRouter>
    <Nav/>
         <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/secondslide" element={<ProductDetails/>}></Route>
         <Route path="/thirdslide" element={<RelavantProduct/>}></Route>
         <Route path="/fruit1" element={<Component1/>}></Route>
         <Route path="/fruit2" element={<Component2/>}></Route>
         <Route path="/fruit3" element={<Component3/>}></Route>
         <Route path="/fruit4" element={<Component4/>}></Route>
         <Route path="/snack1" element={<Snack1/>}></Route>
         <Route path="/snack2" element={<Snack2/>}></Route>
         <Route path="/snack3" element={<Snack3/>}></Route>
         <Route path="/snack4" element={<Snack4/>}></Route>
         <Route path="/bev1" element={<Beverages01/>}></Route>
         <Route path="/bev2" element={<Beverages02/>}></Route>
         <Route path="/bev3" element={<Beverages03/>}></Route>
         <Route path="/bev4" element={<Beverages04/>}></Route>
         </Routes>
    </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Router