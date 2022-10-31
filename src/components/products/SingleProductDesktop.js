import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack, Tooltip } from "@mui/material";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddtoCart,
    ProductFavButton,
    ProductImage,
} from "../../styles/products";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import useCart from "../../hooks/useCart";
import { Colors } from "../../styles/theme";
import useWishList from "../../hooks/useWishList";


function SingleProductDesktop({ product, matches }) {

    // define dialog modal for showing product dialog details
    const [
        ProductDetailDialog,
        showProductDetailDialog,
        closeProductDialog
    ] = useDialogModal(ProductDetail);

    //define add to cart related variables to tbe used in the module
    const { addToCart, addToCartText } = useCart(product);


    //define add to favourite related variable to tbe used in the module
    const { addToWishList, addedToWishes } = useWishList(product);

    // define a state to show option 1:58:07
    const [showOptions, setShowOptions] = useState(false);
    

    // change values of show option on mouse enter and a leave the product area

    const handleMouseEnter = () => {
        setShowOptions(true);
    }

    const handleMouseLeave = () => {
        setShowOptions(false);
    }

    /**
     * Below are the list of things that will be displayed for a product on desktp 1:5530
     * 
     * Product
     * image
     * Meta (Price, Name)
     * Action
     * Footer 
     */

    return (
        (
            <>
                <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                    {/* show product image */}
                    <ProductImage src={product.image} />

                    {/* show favourite icon image  */}
                    <ProductFavButton isWish={addedToWishes}>
                        <Tooltip placement="left" title="Add to Your Wishlist">
                            <Favorite
                                onClick={addToWishList}
                                variant="contained" />
                        </Tooltip>
                    </ProductFavButton>

                    {/* slide the other two butttons 2:01:55, the variant should be cotained not outline otherwise it will be tranparent on hover */}
                    {showOptions && product.price > 0 && (
                        <ProductAddtoCart
                            onClick={addToCart}
                            show={showOptions}
                            
                            variant="contained"
                        >
                            {addToCartText} 
                        </ProductAddtoCart>
                    )}

                    {/* add icon images for in column for desktop, add to cart, share etc 1:30:00-:1:44:00*/}

                    <ProductActionsWrapper show={showOptions || matches}>
                        <Stack direction={matches ? "row" : "column"}>
                            <ProductActionButton>
                                <Tooltip placement="left" title="share this product">
                                    <ShareIcon color={`${Colors.primary}`} />
                                </Tooltip>
                            </ProductActionButton>
                            <ProductActionButton onClick={() => showProductDetailDialog()}>
                                <Tooltip placement="left" title="Full view">
                                    <FitScreenIcon color={`${Colors.primary}`} />
                                </Tooltip>
                            </ProductActionButton>
                        </Stack>
                    </ProductActionsWrapper>
                </Product>
                <ProductMeta product={product} />
                <ProductDetailDialog product={product} />
            </>

        )



    );
}

export default SingleProductDesktop;