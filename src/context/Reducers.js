import { filterAction } from "../components/store/StoreFilter";
import { CART_ACTION_MSG } from "../data";
import { CART_ACTION } from "../hooks/useCart";


/**
 * This function will be used for handling cart actions
 * @param {*} cartState cartState of the cart
 * @param {*} action to be taken on the cart item provide in the payload attribte
 * @returns 
 */
export const cartReducer = (cartState, action) => {
  switch (action.type) {

    //handle add to cart request
    case CART_ACTION.ADD:
      return { 
        ...cartState, 
        cart: [...cartState.cart, { ...action.payload }] 
      
      };

    //handle delete from cart request
    case CART_ACTION.REMOVE:
      return {
        ...cartState,
        cart: cartState.cart.filter((c) => c.id !== action.payload.id),
      };

    //handle cart item quantity update
    case CART_ACTION.UPDATE:
      return {
        ...cartState,
        cart: cartState.cart.filter((c) =>
          c.id === action.payload.id ? (c.quantity = action.payload.qty) : c.quantity
        ),
      };

    case CART_ACTION.TOGGLE:
      return CART_ACTION_MSG.ADD;
      // return{
        
      //   // add the prodcut if doesnot exist other wise remove the product
      //    ...cartState.cart.findIndex((c) => c.id === action.payload.id) >= 0 ?
      //       CART_ACTION_MSG.REMOVE
      //       :
      //       CART_ACTION_MSG.ADD
      // };

    //default no action
    default:
      return cartState;
  }
};

/**
 * 
 * @param {*} cartState 
 * @param {*} action 
 * @returns 
 */
export const productReducer = (cartState, action) => {

  switch (action.type) {


    //handle sort by price request
    case filterAction.sortBy.price:
      return { ...cartState, sort: action.payload };

    
    //handle filter by stock availability request
    case filterAction.filterBy.stock:
      return { ...cartState, byStock: !cartState.byStock };
    
    //handle filter by fast delivery option request
    case filterAction.filterBy.delivery:
      return { ...cartState, byFastDelivery: !cartState.byFastDelivery };

    //handle filter by product rating request
    case filterAction.filterBy.rating:
      return { ...cartState, byRating: action.payload };

    //handle filter by search query request
    case filterAction.filterBy.search:
      return { ...cartState, searchQuery: action.payload };

    //handle clear all set filter 
    case filterAction.clearFilters:
      return { byStock: false, byFastDelivery: false, byRating: 0 };

    //default no action
    default:
      return cartState;
  }
};