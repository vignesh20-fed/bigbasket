// import  React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import {Link,useNavigate} from "react-router-dom"
// import logo from "../Assets/bb_logo_1.jpg"
// import "./Nav.css"
// import "../Assest/common.css"
// import InputBase from '@mui/material/InputBase';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Badge from '@mui/material/Badge';
// //import { stateContext } from '../statecontext/statecontext';
 
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
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//  // const{state,dispatch}=React.useContext(stateContext)
//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };
// //     let navigate1 = useNavigate()
// //   const open1 = () => {
// //     navigate1("/details")
// //   }
// //   let navigate2 = useNavigate()
// //   const open2 = () => {
// //     navigate2("/cart")
// //   }
// //   let navigate3 = useNavigate()
// //   const open3 = () => {
// //     navigate3("/")
// //   }
// //   let navigate4 = useNavigate()
// //   const nav1 =() =>{
// //     navigate4("/details")
// //   }

// //   let navigate5 = useNavigate()
// //   const nav2 =() =>{
// //     navigate5("/home")
// //   }
// //   let navigate6 = useNavigate()
// //   const nav3 =() =>{
// //     navigate6("/fav")
// //   }
// //   let navigate7 = useNavigate()
// //   const nav4 =() =>{
// //     navigate7("/cart")
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
//                //  onChange={e=>dispatch({type:"SEARCH",payload:e.target.value})}
//               />
//             </Search>
//           </Typography>
//           </div>
        
//           {auth && (
//             <div className=' col-lg-4navicon'>
//               <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//                <div className='shopicon'>
//               <Badge badgeContent={17} color="error">
//                 <ShoppingCartIcon style={{fontSize:"40px"}}/>
//               </Badge>
//               </div>
//             </IconButton>
             
//                {/* //  open={Boolean(anchorEl)}
//                //  onClose={handleClose} */}
            
//              {/* <MenuItem onClick={(open1)}>Form</MenuItem>
//             <MenuItem onClick={(open2)}>Cart</MenuItem>
//             <MenuItem onClick={(open3)}>Log Out</MenuItem> */}
             
//             </div>
//           )}
        
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }