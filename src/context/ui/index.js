

import { createContext, useContext, useReducer, useState } from "react";
import { fakeproducts } from '../../data/fakerdata';
import { cartReducer, productReducer } from "../Reducers";

//create the UK context from react
export const UIContext = createContext({}); 

//follwing will be used as hook
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {

    //context variable for menu drawer open and close
    const [drawerOpen, setDrawerOpen] = useState(false);

    //context variable for seach box display
    const [showSearchBox, setShowSearchBox] = useState(false);

    //context variable for next-previous button click in banner
    const [prevClicked, setPrevClicked] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);

    //context variables for cart
    const [cart , setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    //context variables for FavoriteList 
    const [wishList, setWishList] = useState([]);
    const [showWishList, setShowWishList] = useState(false);


    //FETCH storeproducts data
    const storeproduct = fakeproducts;

    /**
     * define a reducer for handling cart and storeproducts
     * Reducers takes following two parameters
     *  1. Recuder : a function that permormes on existing state of an Object to produce a new state
     *                 Reducer (state, action) takes two paramter, current state and action to be takne on the object.
     *                          
     * 
     *  2. Object  with Initial value
     * 
     * The useReducer function returns two values
     *  1. State of the of the Object
     *  2. dispatch (type:"XXX"): a handle for the redcuer fucntion that actually used for manupulating the state
     *                user will be calling dispatch function with some attibute and 
     *                type attribute will available in the action vairable of Reducer(state, action) function
     *                one can use it as action.type in the reducer function
     */
    const [cartState, dispatch] = useReducer( cartReducer, {
        //initialised storeproduct with all products to be displayed on the store page
        storeproduct: fakeproducts,

        //intialised cart
        cart:[],
    });

    //define a reducer for handling products
    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      });
    // const renderStoreProducts = storeproduct.map(product => (

    //     console.log("product.id >> "),
       
    //     console.log(product.id)

    // ));

    const value = {
        drawerOpen,
        setDrawerOpen,
        showSearchBox, 
        setShowSearchBox,
        prevClicked,
        setPrevClicked,
        nextClicked,
        setNextClicked,
        showCart,
        setShowCart,
        wishList,
        setWishList,
        showWishList,
        setShowWishList,
        cartState, 
        dispatch,
        storeproduct,
        productState,
        productDispatch,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}