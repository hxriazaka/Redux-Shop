import * as actionsTypes from "./shopTypes"

const Initial_State = {
  products: [
    {
      id: 1,
      title: "Whole french bread",
      desctiption: "made in paris and destinated to the whole world",
      price: 1.00,
      image: "https://img.icons8.com/external-line-colors-royyan-wijaya/128/external-bread-food-colorize-1-line-colors-royyan-wijaya.png"
    },
    {
      id: 2,
      title: "Fresh Suiss milk",
      desctiption: "semi skimmed milk that comes straight from the alpes farmers",
      price: 1.15,
      image: "https://img.icons8.com/doodle/128/tetra-pak--v1.png"
    },
    {
      id: 3,
      title: "Butter",
      desctiption: "produced by us to insure a high quality butter",
      price: 0.80,
      image: "https://img.icons8.com/external-soft-fill-juicy-fish/128/external-butter-supermarket-soft-fill-soft-fill-juicy-fish.png"
    }
  ],
  cart: [],
  currentItem: null
}
const shopReducer = (state = Initial_State, action, payload) => {
  switch(action.type) {
    case actionsTypes.Add_Item:
      const item = state.products.find(prod => prod.id === action.payload.id)
      const addedItem = state.cart.find(item => item.id === action.payload.id ? true : false)
      return {
        ...state,
        cart: addedItem ? state.cart.map(item => item.id === action.payload.id ? {... item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: 1}],
      }
    case actionsTypes.Remove_Item:
      const removedItem = state.cart.find(item => item.id === action.payload.id ? true : false)
      return {
        ...state,
        cart: removedItem ? state.cart.map(item => item.id === action.payload.id ? {... item, qty: item.qty - 1} : item) : [...state.cart, {...item, qty: 1}],
      }
    default:
      return state; 
  }
}

export default shopReducer;