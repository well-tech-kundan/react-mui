import { useUIContext } from "../context/ui";
import { cartAddActionMessages } from "../data";

/** 
 * This hook for handling cart data
 */
function useCart(product) {

    const { cart, setCart } = useUIContext();

    /**
     * this function will add/remove selected product from UI Context to cart using 
     */
    const addToCart = () => {

        // add the prodcut if doesnot exist other wise remove the product
        cart.findIndex((c) => c.id === product.id) >= 0 ?
            setCart(cart.filter(c => c.id !== product.id))
            :
            setCart(c => [...c, product]);
    }//end pf function add to cart

    /**
     * this function will add/remove selected product from UI Context to cart using 
     */
     const updateCart = (quantity) => { 

        // add the prodcut if doesnot exist other wise remove the product
        if (quantity >= 1 ) {
            product.quantity = quantity;
            setCart(c => [...c, product]);
        }else {
            setCart(cart.filter(c => c.id !== product.id));
        }
            
    }//end pf function add to cart

    /**
     * This variable will hold display message for add to cart call
     */
    const addToCartText = 

        // add the prodcut if doesnot exist other wise remove the product
        cart.findIndex((c) => c.id === product.id) >= 0 ?
            cartAddActionMessages.remove
            :
            cartAddActionMessages.add;
    

    return { addToCart, addToCartText }

}

export default useCart;