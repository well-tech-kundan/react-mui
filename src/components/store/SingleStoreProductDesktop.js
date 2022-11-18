import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Rating,
    Typography
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


import {
    SITE_LOCALE,
    STORE_DELIVERY_TYPE,
    STORE_PRODUCT_BTN_TXT
} from "../../data";

import { StoreSingleProductContainer } from "../../styles/store";
import { Colors } from "../../styles/theme";

import ProductDetail from "../productdetail";

import useCart from "../../hooks/useCart";
import useDialogModal from "../../hooks/useDialogModal";
import useWishList from "../../hooks/useWishList";



function SingleStoreProductDesktop({ product, matches }) {

    // define dialog modal for showing product dialog details
    const [
        ProductDetailDialog,
        showProductDetailDialog
    ] = useDialogModal(ProductDetail);

    //define add to cart related variables to tbe used in the module
    const { addToCart, toggleActionTxt, updateCart } = useCart(product);

    //define add to favourite related variable to tbe used in the module
    const { addToWishList, addedToWishes } = useWishList(product);

    return (
        <StoreSingleProductContainer key={product.id}>
            <Card>
                <CardMedia
                    variant="top"
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography color={Colors.dim_grey} fontWeight={"1000"} style={{ paddingBottom: 5 }}>
                        {SITE_LOCALE + product.price.split(".")[0]}
                    </Typography>
                    <Typography color={Colors.dim_grey} style={{ paddingBottom: 5, fontStyle: 'italic' }}>
                        {product.fastDelivery ? (
                            STORE_DELIVERY_TYPE.FAST
                        ) : (
                            STORE_DELIVERY_TYPE.FOUR_DAYS
                        )}
                    </Typography>
                    <Typography style={{ paddingBottom: 10 }}>
                        <Rating
                            name="half-rating-read"
                            value={product.rating}
                            getLabelText={(value) => `${product.rating} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" color="secondary" />}
                            readOnly
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                    </Typography>
                    {/* show add to cart only for products with price */}
                    <Button
                        variant="outlined"
                        onClick={addToCart}
                    >
                        {toggleActionTxt}
                    </Button>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        size="small"
                    >
                        {STORE_PRODUCT_BTN_TXT.SHARE}
                    </Button>
                    <Button
                        variant="text"
                        size="small"
                        onClick={showProductDetailDialog}
                    >
                        {STORE_PRODUCT_BTN_TXT.LEARN_MORE}
                    </Button>
                    <Button
                        size="small"
                        variant="text"
                        onClick={addToWishList}
                    >
                        {addedToWishes ? STORE_PRODUCT_BTN_TXT.REMOVE_WHISHLIST : STORE_PRODUCT_BTN_TXT.ADD_TO_WHISHLIST}
                    </Button>
                </CardActions>
            </Card>
            <ProductDetailDialog product={product} storepg={true}/>
        </StoreSingleProductContainer>
    );
}

export default SingleStoreProductDesktop;