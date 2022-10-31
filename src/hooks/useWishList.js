import { useUIContext } from "../context/ui";
import { wishlistAddActionMessages } from "../data";

/** 
 * This hook for handling cart data
 */
function useWishList(product) {

    const { wishList, setFavouriteList } = useUIContext();

    /**
     * this function will add/remove selected product from UI Context to cart using 
     */
    const addToWishList = () => {

        // add the prodcut if doesnot exist other wise remove the product
        wishList.findIndex((favlist) => favlist.id === product.id) >= 0 ?
            setFavouriteList(wishList.filter(favlist => favlist.id !== product.id))
            :
            setFavouriteList(favlist => [...favlist, product]);
    }//end pf function add to cart

    /**
     * This variable will hold display message for add to cart call
     */
    const addedToWishes =

        // add the prodcut if doesnot exist other wise remove the product
        wishList.findIndex((favlist) => favlist.id === product.id) >= 0 ?
            1 : 0;

    /**
     * This variable will hold display message for add to cart call
     */
    const addToWishesText =

        // add the prodcut if doesnot exist other wise remove the product
        wishList.findIndex((c) => c.id === product.id) >= 0 ?
            wishlistAddActionMessages.remove
            :
            wishlistAddActionMessages.add;


    return { addToWishList, addedToWishes, addToWishesText }

}

export default useWishList;