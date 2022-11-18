import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { StyledEngineProvider } from '@mui/material/styles';
import { Stack } from "@mui/system";
import {
    ProductActionButton,
    ProductActionsWrapperThin, ProductAddtoCart,
    ProductFavButton, ProductImagThin, ProductThin
} from "../../styles/products";
import ProductMetaThin from "./ProductMetaThin";
import { PROD_DISPLAY_SIZE } from "../../data";
import ProductDetail from "../productdetail";
import useDialogModal from "../../hooks/useDialogModal";
import useCart from "../../hooks/useCart";
import useWishList from "../../hooks/useWishList";


function SingleProductThin({ product }) {

    // define dialog modal for showing product dialog details
    const [ProductDetailDialog, showProductDetailDialog] =
        useDialogModal(ProductDetail);

    //define add to cart related variables to tbe used in the module
    const { addToCart, toggleActionTxt } = useCart(product);

    //define add to favourite related variable to tbe used in the module
    const { addToWishList, addedToWishes } = useWishList(product);

    /**
     * Below are the list of things that will be displayed for a product
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
                <StyledEngineProvider injectFirst>
                    <ProductThin>
                        <ProductImagThin src={product.image} />
                        <ProductMetaThin product={product} />
                        {/* add icon images for add to cart, share etc */}
                        <ProductActionsWrapperThin>
                            <Stack
                                direction="column"
                            >
                                {/* show favourite icon image  */}
                                <ProductFavButton isWish={addedToWishes}>
                                    <Favorite
                                        onClick={addToWishList}
                                        variant="contained" />
                                </ProductFavButton>

                                {/* display share content icon */}
                                <ProductActionButton size={PROD_DISPLAY_SIZE.SMALL}>
                                    <ShareIcon color="primary" />
                                </ProductActionButton>

                                {/* display show product details to screen icon, onclick open product details dialog box*/}
                                <ProductActionButton onClick={showProductDetailDialog}>
                                    <FitScreenIcon color="primary" />
                                </ProductActionButton>
                            </Stack>
                        </ProductActionsWrapperThin>
                    </ProductThin>
                    <ProductDetailDialog product={product} />
                </StyledEngineProvider>
                {/* show add to cart only for products with price */}
                {product.price > 0 && (
                    <ProductAddtoCart
                        variant="contained"
                        show={product.price ? 1 : 0}
                        size={PROD_DISPLAY_SIZE.THIN}
                        onClick={addToCart}
                    >
                        {toggleActionTxt}
                    </ProductAddtoCart>
                )}
            </>

        )



    );
}

export default SingleProductThin;