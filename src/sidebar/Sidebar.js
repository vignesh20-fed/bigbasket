import React, { useContext } from "react";
import "./sidebar.css";
import { stateContext } from "../context/statecontext";

const Sidebar = () => {

 const {filterState : {priceSort_below20,
    priceSort_BETWEEN20TO50,
    priceSort_BETWEEN50TO100,
    priceSort_BETWEEN100TO200,
    priceSort_BETWEEN200TO300,
    priceSort_BETWEEN500,
    discountSort_below5, 
    discountSort_BETWEEN5TO10,
    discountSort_BETWEEN10TO15,
    discountSort_BETWEEN15TO25,
    discountSort_MORE25,
    discountSort}, filterDispatch} = useContext(stateContext)

  return (
    <div>
      <div className="table-col">
        <h5 className="filter">FILTERS</h5>
        <div className="time">
          <h5>PRICE</h5>
          <div className="time-icon">
            <ul>
              <li>
                <input 
                type="checkbox"
                style={{cursor:"pointer"}}
                onChange={() => {
                    filterDispatch({
                        type:"BELOW_20",
                      
                    })
                }}
                checked={priceSort_below20}
                
                ></input>
                <label>Less than Rs 20</label>
              </li>
              <li>
                <input type="checkbox"
                 onChange={() => {
                    filterDispatch({
                        type:"BETWEEN20TO50",
                      
                    })
                }}
                checked={priceSort_BETWEEN20TO50}
                ></input>

                <label>Rs 20 to Rs 50</label>
              </li>
              <li>
                <input type="checkbox"
                    onChange={() => {
                        filterDispatch({
                            type:"BETWEEN50TO100",
                          
                        })
                    }}
                    checked={priceSort_BETWEEN50TO100}
                ></input>

                <label>Rs 51 to Rs 100</label>
              </li>
              <li>
                <input type="checkbox"
                  onChange={() => {
                    filterDispatch({
                        type:"BETWEEN100TO200",
                      
                    })
                }}
                checked={priceSort_BETWEEN100TO200}
                ></input>

                <label>Rs 100 to Rs 200</label>
              </li>
              <li>
                <input type="checkbox"
                          onChange={() => {
                            filterDispatch({
                                type:"BETWEEN200TO300",
                              
                            })
                        }}
                        checked={priceSort_BETWEEN200TO300}
                ></input>

                <label>Rs 200 to Rs 300</label>
              </li>
              <li>
                <input type="checkbox"
                 onChange={() => {
                    filterDispatch({
                        type:"BETWEEN500",
                      
                    })
                }}
                checked={priceSort_BETWEEN500}
                ></input>

                <label>More than Rs 501</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="time">
          <h5>Discount</h5>
          <div className="time-icon">
            <ul className="seat">
              <li>
                <input type="checkbox"
                 onChange={() => {
                    filterDispatch({
                        type:"BELOW5%",
                        payload : !discountSort_below5
                      
                    })
                }}
                checked={discountSort_below5}
                ></input>

                <label>Upto 5%</label>
              </li>
              <li>
                <input type="checkbox"
                           onChange={() => {
                            filterDispatch({
                                type:"BETWEEN5TO10",
                                payload : !discountSort_BETWEEN5TO10
                              
                            })
                        }}
                        checked={discountSort_BETWEEN5TO10}
                
                ></input>

                <label>5% to 10%</label>
              </li>
              <li>
                <input type="checkbox"
                           onChange={() => {
                            filterDispatch({
                                type:"BETWEEN10TO15",
                                payload : !discountSort_BETWEEN10TO15
                              
                            })
                        }}
                        checked={discountSort_BETWEEN10TO15}
                ></input>

                <label>10% to 15%</label>
              </li>
              <li>
                <input type="checkbox"
                           onChange={() => {
                            filterDispatch({
                                type:"BETWEEN15TO25",
                                payload : !discountSort_BETWEEN15TO25
                              
                            })
                        }}
                        checked={discountSort_BETWEEN15TO25}
                ></input>

                <label>15% to 25%</label>
              </li>
              <li>
                <input type="checkbox"
                           onChange={() => {
                            filterDispatch({
                                type:"MORE25",
                                payload : !discountSort_MORE25
                              
                            })
                        }}
                        checked={discountSort_MORE25}
                
                ></input>

                <label>More than 25%</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
