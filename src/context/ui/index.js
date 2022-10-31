

import { createContext, useContext, useState } from "react";


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
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    //context variables for FavoriteList
    const [wishList, setFavouriteList] = useState([]);
    const [showWishList, setShowWishList] = useState(false);

    const value = {
        drawerOpen,
        setDrawerOpen,
        showSearchBox, 
        setShowSearchBox,
        prevClicked,
        setPrevClicked,
        nextClicked,
        setNextClicked,
        cart,
        setCart,
        showCart,
        setShowCart,
        wishList,
        setFavouriteList,
        showWishList,
        setShowWishList,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}