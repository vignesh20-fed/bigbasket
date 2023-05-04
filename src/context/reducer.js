export const initialState={
    get:[],
    cart:[],
    cartdetails:[],
      teams:[
       {
          id:1,
          img:"https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg",
          icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
          heading:"Fresho",
          details:"Capsicum - Green(Loose)",
          strike:"RS.52.63",
          rupees:"RS 40",
          stock:"20",
          delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
          quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
          offer:"GET 30% OFF"
        },
        {
            id:2,
            img:"https://www.bigbasket.com/media/uploads/p/l/10000071_14-fresho-carrot-orange.jpg",
            heading:"Fresho",
            details:"Carrot-Orange(Loose)",
            strike:"RS.13.16",
            rupees:"RS 10",
            stock:"20",
            delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
            quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
            offer:"GET 25% OFF"
          },
          {
            id:3,
            img:"https://www.bigbasket.com/media/uploads/p/l/10000102_17-fresho-cucumber.jpg",
             heading:"Fresho",
             details:"Cucumber(Loose)",
             strike:"RS.18.63",
             rupees:"RS 14",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 5.00","1kg-RS 50.00","250g-RS 10.00","500g-Rs 15.00"],
            offer:"GET 58% OFF"
          },
          {
            id:4,            
            img:"https://www.bigbasket.com/media/uploads/p/l/10000097_19-fresho-coriander-leaves.jpg",
             heading:"Fresho",
             details:"Coriander Leaves",
             strike:"RS.25",
             rupees:"RS 19",
             stock:"20",
             delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
             quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 80.00","500g-Rs 60.00"],
            offer:"GET 40% OFF"
          },
          {
            id:5,
            img:"https://www.bigbasket.com/media/uploads/p/l/10000159_27-fresho-potato.jpg",
            heading:"Fresho",
            details:"Potato",
            strike:"RS.35",
            rupees:"RS 27",
            stock:"20",
            delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
            quantity:["2kg-Rs 40.00","1kg-RS 20.00","250g-RS 20.00"],
               offer:"GET 40% OFF"
            },
            {
              id:6,
              img:"https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg",
              icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
              heading:"Fresho",
              details:"Onion(Loose)",
              strike:"RS.151.32",
              rupees:"RS 150",
              stock:"20",
              delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
              quantity:["2kg-Rs 46.00","1kg-RS 80.00","5kg-RS 500.00"],
              offer:"GET 80% OFF"
            },
            {  
                id:7,
                img:"https://www.bigbasket.com/media/uploads/p/l/10000063_20-fresho-broccoli.jpg",
               heading:"Fresho",
               details:"Borccoli",
               strike:"RS.28.03",
               rupees:"RS 22",
               stock:"20",
               delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
               quantity:["50g-Rs 10.00","1kg-RS 90.00","250g-RS 15.00","500g-Rs 40.00"],
                offer:"GET 80% OFF"
              },
              {
                id:8,
                img:"https://www.bigbasket.com/media/uploads/p/l/10000047_21-fresho-beetroot.jpg",
                heading:"Fresho",
                details:"Beet -root (Loose)",
                strike:"RS.12.50",
                rupees:"RS 9.50",
                stock:"20",
                delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
                quantity:["50g-Rs 10.00","1kg-RS 100.00","250g-RS 30.00","500g-Rs 50.00"],
                offer:"GET 30% OFF"
              },
    ],
    qty : 0,
}

export const stateReducer = (state,action) => {
    console.log("state",state,"action",action)
    switch(action.type){   
        case "DETAILS" :
        return{
            ...state,
           get:action.payload,
        }
        case "CART" :
            return{
                ...state,
             cart : [...state.cart, {...action.payload}]
            }  
            case "REMOVE" :
                return{
                    ...state,
                    cart : state.cart.filter(e => e.id !== action.payload.id)
                } 
            case "QTY" :
               return{
                ...state,
                qty : state.payload,
               }
        default:{
            return state;
        }
    }    
}   