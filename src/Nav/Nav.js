// import  React,{useContext,useEffect,useState} from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import logo from "../Assest/headlogo.png"
// import "./Nav.css"
// import InputBase from '@mui/material/InputBase';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Badge from '@mui/material/Badge';
// import { stateContext } from '../context/statecontext';
// import { Button } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
// import Menu from '@mui/material/Menu';
// import IconButton from '@mui/material/IconButton';
// import MenuItem from '@mui/material/MenuItem';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '10%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '10%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function MenuAppBar() {
//   // const [auth, setAuth] = React.useState(true);
//   // const [anchorEl, setAnchorEl] = React.useState(null);
 
//   // const handleChange = (event) => {
//   //   setAuth(event.target.checked);
//   // };

//   // const handleMenu = (event) => {
//   //   setAnchorEl(event.currentTarget);
//   // };

//   // const handleClose = () => {
//   //   setAnchorEl(null);
//   // };
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };




//   const {state,dispatch}= useContext(stateContext)
//   console.log(state)
//   const extracard = () => {
//     let a = {}
//     for(let i=0; i<state.cart.length ;i++){
//          a[state.cart[i].id] = 1;
//     }
//     return a;
// }
// const [func,setFunc]=useState(extracard())
// console.log(func);
// // const [qty, setQty] = useState('')
// console.log(extracard());
// const decrement = (id) =>{
       
//   if(func[id] > 0){
//     setFunc(prevcount => ({...prevcount,[id] : prevcount[id] - 1}))
//   }

 
// }

// const increment = (id,stock) =>{
//   if(func[id] < stock){
//     setFunc(prevcount => ({...prevcount, [id] : prevcount[id] + 1}))
//   }
// }

// // const [func,setFunc]=useState(extracard())
// // console.log(func);
// // const decrement = (id) =>{
   
// //     if(func[id] > 0){
// //       setFunc(prevcount => ({...prevcount,[id] : prevcount[id] - 1}))
// //     }

// //     // setQty(func[id])

// //   }

// //   const increment = (id,stock) =>{
// //     if(func[id] < stock){
// //       setFunc(prevcount => ({...prevcount, [id] : prevcount[id] + 1}))
// //     }
// //     // setQty(func[id])
// //   }

//   return (
//     <Box  >
//       <AppBar position="start">
//         <Toolbar className="nav-sec col-lg-12">
//          <div className=' col-lg-3 navimg'>
//         <img src={logo}></img>
//         </div>
//         <div className='col-lg-4'>
//              <Typography
//               style={{cursor : "pointer"}}
//             variant="h8"
//             component="div"
//             // onClick={(nav1)}
//             className="navcontent"
//             sx={{ flexGrow: 1, fontFamily: 'monospace' }}
//           >
        
          
//             <Search >
//               <SearchIconWrapper className='searchic'>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase style={{width:"100%",border:"solid 1px grey"}}
//                 placeholder="Search…"
//                 inputProps={{ 'aria-label': 'search' }}
//               />
//             </Search>
//           </Typography>
//           </div>
       
                 
//             <div className='col-lg-5'>
//              <Box >
//             <Tooltip >
//               <IconButton onClick={handleOpenUserMenu} >
//               <Badge badgeContent={state.cart.length} color="error">
//                    <ShoppingCartIcon className='navicon'/>
//                  </Badge>
//               </IconButton>
//             </Tooltip>
//             <Menu
//               className="menucontent"
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >

//       <div className='cartrows'>
//         {state.cart.map((value,index)=>{
//                       return <>
//                       <div className='navimg2 col-nav-1'>
//                          <img src={value.img}></img>
//                       </div>
//                       <div className='col-nav-1 ss'>
//                           <h5>{value.heading}</h5>
//                           <h6>{value.details}</h6>
//                           <h6><del>{value.strike}</del></h6>
//                           <h6>{value.rupees}</h6>
//                       </div>
//                       <div className='col-nav-1'>  
//                                 <button className='btn' onClick={()=>decrement(value.id)}>-</button>
//                                 <input class="inputcard" value={state.qty2} size={1}/>
//                                  <button className='btn' onClick={()=>increment(value.id,value.stock)}>+</button>      
//                        </div>
                   
//                         </>
//                     })}
//                 </div>  
               
//             </Menu>
//           </Box> 
//           </div> 
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
import  React,{useContext,useEffect,useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Link,useNavigate} from "react-router-dom"
import logo from "../Assest/headlogo.png"
import "./Nav.css"
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { stateContext } from '../context/statecontext';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Icon } from '@iconify/react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '10%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '10%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const [total, setTotal] = useState(0)
 
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


   
  const {state,dispatch}= useContext(stateContext)
  console.log(state)
  const extracard = () => {
    let a = {}
    for(let i=0; i<state.cart.length ;i++){
         a[state.cart[i].id] = 1;
    }
    return a;
}
const [func,setFunc]=useState(extracard())
console.log(func);
// const [qty, setQty] = useState('')
console.log(extracard());
const decrement = (id) =>{
       
  state.cart[id].qty-=1
 
  dispatch({ type: "DEC", payload: state.teams})
 
}


// const getTotal = () =>{
//   setTotal()
// }


 let h=state.cart?.map((e)=>e.qty*e.rupees);
 if(h.length>0){
  var full=h?.reduce((a,b)=>a+b);
 }
 
const increment = (id) => {
  // if (func[id] < stock) {
  //   setFunc((prevcount) => ({ ...prevcount, [id]: prevcount[id] + 1 }));
  // }
  // setQty(func[id]);
   
//   teams.map(e => {
//     if(e.id === id){
//      e.qty = e.qty+1
//     } 
//   })
// };


state.cart[id].qty+=1
 
dispatch({ type: "INC", payload: state.teams })
}

// const increment = (id,stock) =>{
//   if(func[id] < stock){
//     setFunc(prevcount => ({...prevcount, [id] : prevcount[id] + 1}))
//   }
// }

  return (<>
    <div className='NavBox'>
    <div className="container1">
    <Box>
      <AppBar position="start">
        <Toolbar className="nav-sec col-lg-12">
         <div className=' col-lg-3 navimg'>
        <img src={logo}></img>
        </div>
        <div className='col-lg-4'>
             <Typography
              style={{cursor : "pointer"}}
            variant="h8"
            component="div"
            // onClick={(nav1)}
            className="navcontent"
            sx={{ flexGrow: 1, fontFamily: 'monospace' }}
          >
        
          
            <Search >
              <SearchIconWrapper className='searchic'>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase style={{width:"100%",border:"solid 1px grey",color:"grey"}}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={e=>dispatch({type:"SEARCH",payload:e.target.value})}
              />
            </Search>
          </Typography>
          </div>
       
                 
            <div className='col-lg-5'>
              <Box >
             <Tooltip >
               <IconButton onClick={handleOpenUserMenu} >
               <Badge badgeContent={state.cart.length} color="error">
                    <ShoppingCartIcon className='navicon'/>
                  </Badge>
               </IconButton>
         
             </Tooltip>
             <Menu
               className="menucontent"  
               id="menu-appbar"
               anchorEl={anchorElUser}
              //  anchorOrigin={{
              //    vertical: 'top',
              //    horizontal: 'right',
              //  }}
              //  keepMounted
              //  transformOrigin={{
              //    vertical: 'top',
              //    horizontal: 'right',
              //  }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
             >
   {state.cart.length > 0 ? ( 
       <div className='cartrows'>
         {state.cart.map((value,index)=>{
                       return <>
                       <div className='navimg2 col-nav-1'>
                          <img src={value.img}></img>
                       </div>
                       <div className='col-nav-1 ss'>
                       <h5>{value.heading}</h5>
                          <h6>{value.details}</h6>
                          <h6><del>{value.strike}</del></h6>
                          <h6>{value.rupees}</h6>
                      </div>
                      <div className='col-nav-1'>  
                                <button className='btn' onClick={()=>decrement(index)}>-</button>
                                <input class="inputcard" value={value.qty  > 0 ? value.qty : dispatch({type:"REMOVE", payload : value})} size={1}/>
                                 <button className='btn' onClick={()=>increment(index)}>+</button>      
                       </div>
                       <div className='col-nav-1'>
                       <h2>{h[index]}</h2>
                       </div>
                        </>
                    })}
                    <h2>{full}</h2>
                </div>  
                 ) : (
                  <div className="navfoot">YOUR CART IS EMPTY!</div>
                )}
            </Menu>
          </Box>  
          </div> 
          
        </Toolbar>

        <div  className='navbox col-lg-12'>
            <Button className='col-lg-3 navboxbtn'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <h3>SHOP BY CATEGORY<span><Icon icon="gridicons:dropdown" /></span></h3>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Products</MenuItem>
        <MenuItem onClick={handleClose}>Fruits & Vegetables</MenuItem>
        <MenuItem onClick={handleClose}>Beverages</MenuItem>
        <MenuItem onClick={handleClose}>Snacks</MenuItem>
        <MenuItem onClick={handleClose}>Footer</MenuItem>
      </Menu>
      <div className='col-lg-7 navoffer'>
           <p style={{color:"grey"}}><LocalOfferIcon className='offericon'/> OFFERS</p>
       </div>
            </div>
      </AppBar>
    </Box>
    </div>
    </div>
    </>
  );
}