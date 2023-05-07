import React, { useContext, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { stateContext } from "../../context/statecontext.js";
import { useNavigate, Link } from "react-router-dom";
import "./component.css";
import Footer from "../../Footer/footer.js";
import Sidebar from "../../sidebar/Sidebar.js";
import { Icon } from "@iconify/react";
import Nav from "../../Nav/Nav";

const Component2 = () => {
  const {
    state: { cart, teams, vegetables2 },
    dispatch,
  } = useContext(stateContext);
  console.log(cart);

  const {
    filterState: {
      priceSort_below20,
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
    },
    filterDispatch,
  } = useContext(stateContext);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let navigate4 = useNavigate();
  const productShow = (value, qty) => {
    navigate4("/secondslide");
    dispatch({ type: "DETAILS", payload: { obj: value, quantity: qty } });
  };

  const [qty, setQty] = useState(1);
  console.log(qty);

  const extracard = () => {
    let a = {};
    for (let i = 0; i < vegetables2.length; i++) {
      a[vegetables2[i].id] = 1;
    }
    return a;
  };
  console.log(extracard());
  const [func, setFunc] = useState(extracard());
  console.log(func);
  const decrement = (id) => {
    vegetables2[id].qty -= 1;
    dispatch({ type: "DEC", payload: vegetables2 });
  };

  const increment = (id, stock) => {
    vegetables2[id].qty += 1;
    dispatch({ type: "INC", payload: vegetables2 });
  };

  const sortedProduct = () => {
    let sortedArray = vegetables2;
    if (priceSort_below20) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.rupees <= 20;
      });
    }
    if (priceSort_BETWEEN20TO50) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.rupees >= 20 && item.rupees <= 50;
      });
    }
    if (priceSort_BETWEEN50TO100) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.rupees >= 50 && item.rupees <= 100;
      });
    }
    if (priceSort_BETWEEN100TO200) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.rupees >= 100 && item.rupees <= 200;
      });
    }
    if (priceSort_BETWEEN200TO300) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.rupees >= 200 && item.rupees <= 300;
      });
    }
    if (priceSort_BETWEEN500) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.rupees >= 500;
      });
    }

    if (discountSort_below5) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.offer <= 5;
      });
    }
    if (discountSort_BETWEEN5TO10) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.offer >= 5 && item.offer <= 10;
      });
    }
    if (discountSort_BETWEEN10TO15) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.offer >= 10 && item.offer <= 15;
      });
    }
    if (discountSort_BETWEEN15TO25) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.offer >= 15 && item.offer <= 25;
      });
    }
    if (discountSort_MORE25) {
      sortedArray = sortedArray.filter((item, index) => {
        return item.offer >= 25;
      });
    }
    return sortedArray;
  };

  return (
    <div>
      <div class="fruitcontainer">
        <div class="fruitrow">
          <div className="fruitcol1">
            <Sidebar />
          </div>
          <div className="fruitcol2">
            {sortedProduct().length > 0 ? (
              <div className="fruitcontent">
                {sortedProduct().map((value, index) => {
                  return (
                    <>
                      <div className="fruitcol3">
                        <div className="fruitcard" key={index}>
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
                                className="image"
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
                                  <span>RS{value.rupees}</span>
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
                                    onClick={() => increment(index)}
                                  >
                                    +
                                  </button>
                                </div>
                                <div>
                                  {cart.some((e) => e.id === value.id) ? (
                                    <button
                                      className="footicon"
                                      onClick={() =>
                                        dispatch({
                                          type: "REMOVE",
                                          payload: value,
                                        })
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
                                        dispatch({
                                          type: "CART",
                                          payload: value,
                                        })
                                      }
                                    >
                                      ADD CART
                                    </button>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                            <h5 className="offer">
                              GET {value.offer}% OFF
                              <Icon icon="bxs:offer" className="offericon" />
                            </h5>
                          </Card>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <div className="fruitfoot">Not available!</div>
            )}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
