
import ViewCartFooter from "../../components/viewcart/ViewCartFooter";
import ViewCartHeader from "../../components/viewcart/ViewCartHeader";
import ViewCartItemList from "../../components/viewcart/ViewCartItemList";
import ViewCartOrderSummary from "../../components/viewcart/ViewCartOrderSummary";
import { useUIContext } from "../../context/ui";
import { ViewCartContainer } from "../../styles/viewcart";


function ViewCart() {

    /**
     * From UI context set add to cart variables for handling add to cart actions
     */
     const { cartState: { cart } } = useUIContext();

    return (

        <ViewCartContainer>
            <ViewCartHeader numberofitem={cart ? cart.length : 0}/>
            <ViewCartItemList/> 
            <ViewCartOrderSummary />
             <ViewCartFooter/>  
            {/*<ViewCartHelp />
            <ViewCartPaymentMethods /> */}
        </ViewCartContainer>
    );
}

export default ViewCart;