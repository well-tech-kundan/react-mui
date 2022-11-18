import { useUIContext } from "../context/ui";
import { CART_ACTION_MSG } from "../data";

/** 
 * This hook for handling cart data
 * For adding updating and deleting it will use Reducer
 * For queries it will manage itself
 */
function useCart(product) {

    const { cartState: { cart }, dispatch } = useUIContext();



    /**
     * this function will add/remove selected product from UI Context to cart using 
     */
    const addToCart = () => {
        product.quantity= 1;
        // add the prodcut if doesnot exist other wise remove the product;
        cart.findIndex((c) => c.id === product.id) >= 0 ?
                dispatch({
                    type: CART_ACTION.REMOVE,
                    payload: product,
                })
            :
                dispatch({
                    type: CART_ACTION.ADD,
                    payload: product,
                })
    }//end pf function add to cart

    /**
     * this function will add/remove selected product from UI Context to cart using 
     */
    const updateCart = (quantity) => {
        // add the prodcut if doesnot exist other wise remove the product
        // console.log("In update cart >> quantity :: " + quantity);
        // console.log("updated before quantity :: "+product.quantity);
        dispatch({
            type: CART_ACTION.UPDATE,
            payload: {
                id: product.id,
                qty: quantity,
            },
        })
        // console.log("updated quantity :: "+product.quantity);
    }//end pf function add to cart

    /**
     * This variable will hold display message for add to cart call
     */
    // const toggleActionTxt = 
    //     product?
    //     dispatch({
    //         type: CART_ACTION.TOGGLE,
    //         payload:  {
    //             id:product.id,
    //         },
    //     }):CART_ACTION_MSG.ADD
    // add the prodcut if doesnot exist other wise remove the product
    const toggleActionTxt =
        cart.findIndex((c) => c.id === product.id) >= 0 ?
            CART_ACTION_MSG.REMOVE
            :
            CART_ACTION_MSG.ADD;


    return { addToCart, toggleActionTxt, updateCart }

}

export default useCart;

export const CART_ACTION = {
    ADD: "ADD_TO_CART",
    REMOVE: "REMOVE_FROM_CART",
    UPDATE: "CHANGE_CART_QTY",
    TOGGLE: "AVAILABLE_ACTION",
};