import React, { useContext, useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { stateContext } from "../context/statecontext.js";
import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Footer from "../Footer/footer.js";
import "./home.css";
import RelavantProducts from "../RelaventProduct/RelavantProduct.js";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const [state, setState] = useState('')
  const {
    state: { cart, teams ,search},
    dispatch,
  } = useContext(stateContext);
  console.log(cart);
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let navigate4 = useNavigate();
  const productShow = (value, qty) => {
    navigate4("/secondslide");
    dispatch({ type: "DETAILS", payload: { obj: value, quantity: qty } });
  };
  const extracard = () => {
    let a = {};
    for (let i = 0; i < teams.length; i++) {
      a[teams[i].id] = 1;
    }
    return a;
  };
  console.log(extracard());
  const [qty, setQty] = useState(1);
  console.log(qty);
  const [func, setFunc] = useState(extracard());
  console.log(func);


  const decrement = (id) => {
    teams[id].qty-=1
    dispatch({type:"DEC", payload:teams})
  };

  const increment = (id) => {

  teams[id].qty+=1
 
  dispatch({ type: "INC", payload:teams })
  }



  return (
    <section className="team">
      
      <Carousel responsive={responsive}  infinite={true}
  autoPlay={true} autoPlaySpeed={3000}>
        <div class="headimage">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_030523_Bangalore.jpg"></img>
        </div>
        <div class="headimage">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_Perfumes&bodywash_250423_460_270423.jpg"></img>
        </div>
        <div class="headimage">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_221012.jpg"></img>
        </div>
        </Carousel>

      <div className="teamcontainer">
        <h1>My Smart Basket</h1>
        <div class="teamrow">
          {teams?.filter(e => e.details.toLowerCase().includes(search))?.map((value, index) => {
            return (
              <>
                <div className="teamcol">
                  <div className="formcard" key={index}>
                    <Card sx={{ maxWidth: 300 }} className="cardcolor">
                      <div
                        className="image-card"
                        onClick={() => productShow(value, func)}
                      >
                        <CardMedia
                          component="img"
                          // height="auto"
                          image={value.img}
                          alt="vicky"
                          className="image position"
                        />
                      </div>

                      <CardContent>
                        <div>
                          <img src="https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg"></img>
                        </div>
                        <h6 className="map1">{value.heading}</h6>
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
                                {value.quantity?.map((e, i) => (
                                  <MenuItem value={e}>{e}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>
                        </div>
                        <div>
                          <h6>
                            MRP:{" "}
                            <span>
                              <del>{value.strike}</del>
                            </span>{" "}
                            <span>{value.rupees}</span>
                          </h6>
                        </div>
                        <div className="cardflex">
                          <div className="cardicon">
                            <LocalShippingIcon />
                          </div>
                          <div>
                            <h6>{value.delievery}</h6>
                          </div>
                        </div>
                        <div className="cardfoot">
                          <div>
                            <h6>QUANTITY:</h6>
                            <button
                              className="btn"
                              onClick={() => decrement(index)}
                            >
                              -
                            </button>
                            <input
                              class="inputcard"
                              value={value.qty}
                              size={1}
                            />
                            <button
                              className="btn"
                              onClick={() => increment(index, value.stock)}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            {cart.some((e) => e.id === value.id) ? (
                              <button
                                className="footicon"
                                onClick={() =>
                                  dispatch({ type: "REMOVE", payload: value })
                                }
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                }}
                              >
                                REMOVE
                              </button>
                            ) : (
                              <button
                                className="footicon"
                                onClick={() =>
                                  dispatch({ type: "CART", payload: value })
                                }
                              >
                                ADD CART
                              </button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                      <h5 className="offer">
                        {value.offer}
                        <Icon icon="bxs:offer" className="offericon" />
                      </h5>
                    </Card>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <RelavantProducts />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
