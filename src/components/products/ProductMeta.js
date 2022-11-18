import { Grid,  Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";
import { Colors } from "../../styles/theme";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SITE_LOCALE } from "../../data";


/**
 * 
 * @param {product} product data, 
 *                      product name : 30 chars, trim if
 *  >  30 chars
 *                      product image : 275(w)X185(h)  
 * @param {matches} true if the display is for tabs or mobile
 * @param {wishlistpg} true  the meta will be used on the wishlist page
 * @returns 
 */
//matches is true for tabs and mobiles
function ProductMeta({ product, matches, wishlistpg, storepg }) {
    return (
        <ProductMetaWrapper wishlistpg={wishlistpg} storepg={storepg}>
            {/* display product rating if configured */}
            <Typography
                variant={'h9'}
                align={'left'}
                // below sx is for font formating of the rating
                sx={{
                    fontWeight: 'bold',
                    display: "block",
                    align: 'right',

                }}
            >
                {product.rating ? (
                    <Grid
                        display={"flex"}
                        alignContent={"center"}
                        sx={{
                            color: Colors.secondary,
                        }}
                        alignItems={"center"}
                    >
                        {/* set icon size to large to match the font of rating 
                        <GradeIcon sx={{
                            fontSize: "large",
                            height: "1.15em",
                            paddingTop: "0px",
                        }} />*/}
                        <Rating 
                            name="half-rating-read" 
                            value={product.rating} 
                            getLabelText={(value) => `${product.rating} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize={matches ? "small" :"small"} color="secondary" />}
                            readOnly 
                            emptyIcon={<FavoriteBorderIcon fontSize={matches ? "small" :"small"} />}
                        />
                        {product.rating + "/5"}
                        {/* display booking offers if any */}
                        {product.bookingoffer ? (
                            <Grid
                                sx={{
                                    fontSize: {matches} ? "0.8em" : "small",
                                    height: "1em",
                                    paddingLeft: 1,
                                    color: Colors.dim_grey,
                                    fontWeight: 'regular',
                                    fontStyle: 'italic',
                                }}
                            >
                                {"+"}   {product.bookingoffer}
                            </Grid>
                        ) : (
                            // no booking offers to display
                            ""
                        )
                        }
                    </Grid>
                ) : (
                    // no rating to display
                    ""
                )
                }


            </Typography >
            <Typography
                variant={'h8'}
                align={'left'}
                lineHeight={1.5}
                width={'120%'}
                display={"block"}
                sx={{
                    color: Colors.dim_grey,
                }}
                // matches checks if the display is for tabs or mobile, for now keeping the condition check
                fontWeight={matches ? "medium" : 'medium'}
                fontSize={matches ? "20px" : '20px'}
            >
                {/* donot display product name on the wish list page here */}
                {(wishlistpg) ? "" : product.name}
            </Typography>
            <Typography
                variant={'h8'}
                align={'left'}
                lineHeight={1.5}
                width={'120%'}
                display={"block"}
            >
                {product.location ? product.location : ""}
            </Typography>
            <Typography
                variant={'h8'}
                align={'left'}
                lineHeight={1.5}
                width={'120%'}
                display={"block"}
            >
                {product.duration ? "Duration : " + product.duration : ""}
            </Typography>


            {/* display product price if configured */}
            <Typography
                variant={matches ? "h5" : 'h5'}
                align={'left'}
                display={"block"}
                sx={{
                    fontWeight: 'bold',
                    color: Colors.dim_grey,
                }}
            >
                {product.price ? SITE_LOCALE + product.price : ""}


            </Typography>
        </ProductMetaWrapper >
    );
}

export default ProductMeta;