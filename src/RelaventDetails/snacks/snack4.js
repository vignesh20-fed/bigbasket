import React, { useContext, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
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
import "./snack.css";
import Footer from "../../Footer/footer.js";
import Sidebar from "../../sidebar/Sidebar.js";
import { Icon } from "@iconify/react";
const Snack4 = () => {
  const {
    state: { cart, teams },
    dispatch,
  } = useContext(stateContext);
  console.log("snack",cart);

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
  let snack4 = [
    {
      id: 89,
      img: "https://www.bigbasket.com/media/uploads/p/l/40019374_23-cadbury-dairy-milk-chocolate-home-treats-pack.jpg",
      icon: "https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
      heading: "Tasties",
      details: "Khata Meetha",
      rating: "4",
      rupees:  50,
      delievery: "Standard Delivery : Not available",
      quantity: ["2kg-Rs 46.00", "1kg-RS 80.00", "5kg-RS 500.00"],
      offer:5
    },
    {
      id: 90,
      img: "https://www.bigbasket.com/media/uploads/p/l/118214_19-ferrero-rocher-chocolate.jpg",
      heading: "Tasties",
      details: "Aloo Bhujia Namkeen",
      rating: "4",
      rupees:  15,
      delievery: "Standard Delivery: Not available",
      quantity: ["2kg-Rs 40.00", "1kg-RS 20.00", "250g-RS 20.00"],
      offer:10
    },
    {
      id: 91,
      img: "https://www.bigbasket.com/media/uploads/p/l/40005429_1-amul-real-ice-cream-vanilla-magic.jpg",
      heading: "24 Mantra Organic",
      details: "Peanut Joggery Chikki",
      rating: "4",
      rupees: 50,
      delievery: "Standard Delivery : Not available",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer:20
    },
    {
      id: 92,
      img: "https://www.bigbasket.com/media/uploads/p/l/40191129_4-cadbury-bournville-rich-cocoa-70-dark-chocolate-bar.jpg",
      heading: "Britannia NutriChoice",
      details: "Digestive High Fibre Biscuits -",
      rating: "4.2",
      rupees:  199,
      delievery: "Standard Delivery: Not available",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 20.00",
        "500g-Rs 40.00",
      ],
      offer: 50
    },
    {
      id: 93,
      img: "https://www.bigbasket.com/media/uploads/p/l/40122231_10-nestle-kitkat-share-bag-2-fingers-pack.jpg",
      heading: "Tasties",
      details: "Namkeen-Khatta Murruku",
      rating: "3.6",
      rupees: 14,
      delievery: "Standard Delivery: Not available",
      quantity: [
        "50g-Rs 5.00",
        "1kg-RS 50.00",
        "250g-RS 10.00",
        "500g-Rs 15.00",
      ],
      offer:18
    },
    {
      id: 94,
      img: "https://www.bigbasket.com/media/uploads/p/l/281026_10-cadbury-dairy-milk-chocolate.jpg",
      heading: "Cadbury Oreo",
      details: "Original Vanilla-Flavoured",
      rating: "4.2",
      rupees:  85,
      stock: "20",
      delievery: "Standard Delivery: Not available",
      quantity: [
        "50g-Rs 40.00",
        "1kg-RS 80.00",
        "250g-RS 80.00",
        "500g-Rs 60.00",
      ],
      offer:10
    },
    {
      id: 95,
      img: "https://www.bigbasket.com/media/uploads/p/l/40122232_11-nestle-munch-chocolate-coated-crunchy-wafer-share-pack.jpg",
      heading: "Pringles",
      details: "Potato Chips - Sour Cream",
      rating: "4.2",
      rupees: 115,
      delievery: "Standard Delivery: Not available",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 90.00",
        "250g-RS 15.00",
        "500g-Rs 40.00",
      ],
      offer:30
    },
    {
      id: 96,
      img: "https://www.bigbasket.com/media/uploads/p/l/40003796_3-amul-real-ice-cream-chocolate-brownie.jpg",
      heading: "Britannia",
      details: "Marie Gold Biscuit ",
      rating: "4.2",
      rupees:  140,
      delievery: "Standard Delivery: Not available",
      quantity: [
        "50g-Rs 10.00",
        "1kg-RS 100.00",
        "250g-RS 30.00",
        "500g-Rs 50.00",
      ],
      offer:24
    },
  ];
  const extracard = () => {
    let a = {};
    for (let i = 0; i < snack4.length; i++) {
      a[snack4[i].id] = 1;
    }
    return a;
  };
  console.log(extracard());
  const [func, setFunc] = useState(extracard());
  console.log(func);
  const decrement = (id) => {
    if (func[id] > 0) {
      setFunc((prevcount) => ({ ...prevcount, [id]: prevcount[id] - 1 }));
    }
  };

  const increment = (id, stock) => {
    if (func[id] < stock) {
      setFunc((prevcount) => ({ ...prevcount, [id]: prevcount[id] + 1 }));
    }
  };

  const sortedProduct = () => {
    let sortedArray = snack4;
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
                                <button className="snackbtn">
                                  {value.rating}
                                </button>
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

export default Snack4;
