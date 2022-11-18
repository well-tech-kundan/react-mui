import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { StyledEngineProvider } from '@mui/material/styles';
import { Stack } from "@mui/system";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper, ProductAddtoCart,
    ProductFavButton, ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import ProductDetail from "../productdetail";
import { PROD_DISPLAY_SIZE } from "../../data";
import { Tooltip } from "@mui/material";
import useDialogModal from "../../hooks/useDialogModal";
import useCart from "../../hooks/useCart";
import useWishList from "../../hooks/useWishList";


function SingleProduct({ product, matches }) {

    //define a constant for showing product details box.
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
                    <Product>
                        <ProductImage src={product.image} />
                        <ProductMeta product={product} matches={matches} wishlistpg={false}/>
                        {/* add icon images for add to cart, share etc */}
                        <ProductActionsWrapper>
                            <Stack direction="row">

                                {/* display add to favourite icon  */}

                                {/* show favourite icon image  */}
                                <ProductFavButton isWish={addedToWishes}>
                                    <Favorite
                                        onClick={addToWishList}
                                        variant="contained" />
                                </ProductFavButton>

                                {/* display share content icon */}
                                <ProductActionButton>
                                    <Tooltip placement="left" title="Share this product">
                                        <ShareIcon color="primary" />
                                    </Tooltip>
                                </ProductActionButton>

                                {/* display show product details to screen icon, onclick open product details dialog box*/}
                                <ProductActionButton onClick={showProductDetailDialog}>
                                    <Tooltip placement="left" title="Full view">
                                        <FitScreenIcon color="primary" />
                                    </Tooltip>
                                </ProductActionButton>
                            </Stack>
                        </ProductActionsWrapper>
                    </Product>
                    <ProductDetailDialog product={product} />
                </StyledEngineProvider>
                {/* show add to cart only for products with price */}
                {product.price > 0 && (
                    <ProductAddtoCart
                        variant="contained"
                        show={product.price ? 1 : 0}
                        size={PROD_DISPLAY_SIZE.NORMAL}
                        onClick={addToCart}
                    >
                        {toggleActionTxt}
                    </ProductAddtoCart>
                )}
            </>

        )



    );
}

export default SingleProduct;