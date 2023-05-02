import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div>
        <div className='table-col'>
                            <h5 className='filter'>FILTERS</h5>
                            <div className='time'>
                                <h5>PRICE</h5>
                                <div className='time-icon'>
                                    <ul>
                                        <li>
                                            <input type='checkbox'></input>
                                            <label>Less than Rs 20</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>
                                      
                                            <label>Rs 20 to Rs 50</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>
                                           
                                            <label>Rs 100 to Rs 51</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>
                                            
                                            <label>Rs 100 to Rs 200</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>
                                          
                                            <label>Rs 201 to Rs 300</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>
                                          
                                            <label>More than Rs 501</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='time'>
                                <h5>Discount</h5>
                                <div className='time-icon'>
                                    <ul className='seat'>
                                        <li>
                                            <input type='checkbox'></input>

                                            <label>Upto 5%</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>

                                            <label>5% to 10%</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>

                                            <label>10% to 15%</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>

                                            <label>15% to 25%</label>
                                        </li>
                                        <li>
                                            <input type='checkbox'></input>

                                            <label>More than 25%</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
    </div>
  )
}

export default Sidebar