export const initialState={
    get:[],
    cart:[],
    cartdetails:[],
      teams:[
       {
          id:1,
          img:"https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
          icon:"https://www.bbassets.com/static/v2662/custPage/build/content/img/vegicon.svg",
          heading:"Fresho",
          details:"Capsicum - Green(Loose)",
          strike:"RS.52.63",
          rupees:"RS 40",
          stock:"20",
          delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
          quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
        },
        {
            id:2,
            img:"https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
            heading:"Fresho",
            details:"Capsicum - Green(Loose)",
            strike:"RS.52.63",
            rupees:"RS 40",
            stock:"20",
            delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
            quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
          },
          {
            id:3,
            img:"https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
            heading:"Fresho",
            details:"Capsicum - Green(Loose)",
            strike:"RS.52.63",
            rupees:"RS 40",
            stock:"20",
            delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
            quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
          },
          {
            id:4,            
            img:"https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
            heading:"Fresho",
            details:"Capsicum - Green(Loose)",
            strike:"RS.52.63",
            rupees:"RS 40",
            stock:"20",
            delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
            quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
          },
          {
            id:5,
              img:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
              heading:"Fresho",
              details:"Capsicum - Green(Loose)",
              strike:"RS.52.63",
              rupees:"RS 40",
              stock:"20",
              delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
              quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
            },
            {
              id:6,
              img:"https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
              heading:"Fresho",
              details:"Capsicum - Green(Loose)",
              strike:"RS.52.63",
              rupees:"RS 40",
              stock:"20",
              delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
              quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
            },
            {  
                id:7,
                img:"https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
                heading:"Fresho",
                details:"Capsicum - Green(Loose)",
                strike:"RS.52.63",
                rupees:"RS 40",
                stock:"20",
                delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
                quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
              },
              {
                id:8,
                img:"https://www.bigbasket.com/media/uploads/p/s/241600_7-tata-salt-iodized.jpg",
                heading:"Fresho",
                details:"Capsicum - Green(Loose)",
                strike:"RS.52.63",
                rupees:"RS 40",
                stock:"20",
                delievery:"Standard Delivery: Tomorrow 9:00AM - 1:30PM",
                quantity:["50g-Rs 40.00","1kg-RS 80.00","250g-RS 20.00","500g-Rs 40.00"],
              },
    ]
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
        default:{
            return state;
        }
    }    
}   