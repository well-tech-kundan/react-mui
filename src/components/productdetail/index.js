import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Tooltip,
  Link,
  Grid,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import IncDec from "../ui/incdec";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { WishProductFavButton,  WishProductImage, WishProduct, ProductImagLarge, ProductLarge } from "../../styles/products";
import useCart from "../../hooks/useCart";
import useWishList from "../../hooks/useWishList";
import Favorite from "@mui/icons-material/Favorite";
import ProductMeta from "../products/ProductMeta";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const wishlistpg = true;

  // ToDO user this productavailable vairable to fetching it from backend
  const { productavailable, setProductAvailable } = useState(5);


  //define add to favourite related variable to tbe used in the module
  const { addToWishList, addedToWishes, addToWishesText } = useWishList(product);

  //define add to cart related variables to tbe used in the module
  const { updateCart } = useCart(product);

  return (
    <>
      <Dialog
        TransitionComponent={SlideTransition}
        variant="permanant"
        open={open}
        fullScreen
      >
        <DialogTitle
          sx={{
            background: Colors.secondary,
          }}
        >
          <Box
            variant={matches ? "h6" : "h4"}
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
            fontWeight={matches ? 600 : 1000}
          >
            {product.name}
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent >
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            width={matches ? "auto" : "70rem"}
          >


            <ProductDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
              {matches ?
                (
                  <>
                    <ProductLarge
                      marginLeft={"1rem"}
                      alignContent="center"
                    >

                      <ProductImagLarge
                        src={product.image} mt={2} />
                      <ProductMeta 
                          product={product} 
                          matches={matches} 
                          wishlistpg={wishlistpg} 
                      />
                      <Typography ml={2} mt={2} variant="body1" color={Colors.dim_grey}>Availability: {productavailable} in stock</Typography>
                    </ProductLarge>
                  </>
                ) : (
                  <>
                    <Grid 
                      display={"content"}
                      flexGrow={"column"}
                      width="250%"
                    >
                      <WishProduct
                        marginLeft={"2rem"}
                        alignContent="center"
                      >

                        <WishProductImage
                          src={product.image} mt={2} />
                      </WishProduct>


                      <ProductMeta 
                        product={product} 
                        matches={matches}                         
                        wishlistpg={wishlistpg} 
                      />
                      <Typography
                        ml={2}
                        variant="body1"
                        color={Colors.dim_grey}
                      >
                        Availability: {productavailable} in stock
                      </Typography>

                    </Grid>
                  </>

                )}
              <ProductDetailInfoWrapper
                marginLeft={"2rem"}
              >
                <Typography sx={{ lineHeight: 2 }} variant={matches ? "h6" : "h4"}>
                  {product.name}
                </Typography>
                <Typography variant="body">
                  {product.description}
                </Typography>
                
                {
                  product.price > 0 &&
                  <Box
                    sx={{ mt: 4 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <IncDec available={productavailable ? productavailable : 6} quantity={product.quantity ? product.quantity : 1} />
                    {/* <Button variant="contained" onClick={() => { updateCart(value); onClose(); }}>Update Cart</Button> */}
                  </Box>
                }


                {/* show favourite icon image  */}
                <Grid
                  display="flex"
                  alignItems={"center"}
                  sx={{ color: Colors.dark }}
                  position={'relative'}
                  paddingTop={"2rem"}
                >


                  {/* show favourite icon image  */}
                  <WishProductFavButton
                    isWish={addedToWishes}
                    position="relative"
                    display="content"
                  >
                    <Tooltip placement="left" title="Add to Your Wishlist">
                      <Favorite
                        onClick={addToWishList}
                        variant="body"

                      />
                    </Tooltip>
                  </WishProductFavButton>
                  <Typography
                    variant="body"
                    ml={2}
                    color={Colors.secondary}
                    // set how bold font will be mobile / desktop
                    fontWeight={matches ? 600 : 500}
                  >
                    {addToWishesText}
                  </Typography>
                </Grid>

                <Box
                  sx={{
                    mt: matches ? 2 : '2px',
                    ml: '6px',
                    color: Colors.dove_gray,
                  }}
                >
                  {/* display fb link if any */}
                  {product.fblink ?
                    (
                      <Link
                        href={product.fblink}
                        target="_blank"
                      >
                        <FacebookIcon />
                      </Link>
                    ) : (<FacebookIcon />)
                  }

                  {/* display twiter link if any */}
                  {product.twiterlink ?
                    (
                      <Link
                        href={product.twiterlink}
                        target="_blank"
                      >
                        <TwitterIcon sx={{ pl: 2 }} />
                      </Link>
                    ) : (<TwitterIcon sx={{ pl: 2 }} />)
                  }

                  <InstagramIcon sx={{ pl: 2 }} />
                </Box>
              </ProductDetailInfoWrapper>
            </ProductDetailWrapper>
          </Box>
        </DialogContent>
      </Dialog>

    </>
  );
}