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
import { WishProductFavButton, WishProductImage, WishProduct, ProductImagLarge, ProductLarge } from "../../styles/products";

import useWishList from "../../hooks/useWishList";
import Favorite from "@mui/icons-material/Favorite";
import ProductMeta from "../products/ProductMeta";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  width: "100%",
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  lineHeight: 1.5,
}));

export default function ProductDetail(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const wishlistpg = true;

  // ToDO user this productavailable vairable to fetching it from backend
  const [productavailable] = useState(5);

  //define add to favourite related variable to tbe used in the module
  const { addToWishList, addedToWishes, addToWishesText } = useWishList(props.product);

  return (
    <>
      <Dialog
        TransitionComponent={SlideTransition}
        variant="permanant"
        open={props.open}
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
            {props.product.name}
            <IconButton onClick={props.onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent >
        <Grid container justify="center" alignItems="center">

            <ProductDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
              {matches ?
                (
                  <>
                    <ProductLarge
                      marginLeft={matches ? "0" : "1rem"}
                      alignContent="center"
                    >

                      <ProductImagLarge
                        src={props.product.image} mt={2} />
                      <ProductMeta
                        product={props.product}
                        matches={matches}
                        wishlistpg={wishlistpg}
                      />
                      <Grid item ml={ 1} >
                       <Typography variant="body1" color={Colors.dim_grey}>Availability: {productavailable} in stock</Typography>
                      </Grid>
                    </ProductLarge>
                  </>
                ) : (
                  <>
                    <Grid
                      display={"content"}
                      flexGrow={"column"}
                      width="100%"
                    >
                      <WishProduct
                        marginLeft={"2rem"}
                        alignContent="center"
                        width="100%"
                      >

                        <WishProductImage
                          src={props.product.image} mt={2} />
                      </WishProduct>


                      <ProductMeta
                        product={props.product}
                        matches={matches}
                        wishlistpg={wishlistpg}
                        storepg={props.storepg}
                      />
                      <Grid item ml={matches ? 5 : 5} >
                      <Typography
                        variant="body1"
                        color={Colors.dim_grey}
                        marginLeft="53%"
                        display="grid"
                      >
                        Availability: {productavailable} in stock
                      </Typography>
                      </Grid>

                    </Grid>
                  </>

                )}
              <ProductDetailInfoWrapper
                marginLeft={matches ? "0" : "2rem"}
              >
                <Typography sx={{ lineHeight: 2 }} variant={matches ? "h6" : "h4"}>
                  {props.product.name}
                </Typography>
                <Typography variant="body">
                  {props.product.description}
                </Typography>

                {
                  props.product.price > 0 &&
                  <Box
                    sx={{ mt: 2 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <IncDec
                      available={productavailable ? productavailable : 6}
                      item={props.product}
                      matches={matches}
                    />
                  </Box>
                }


                {/* show favourite icon image  */}
                <Grid
                  display="flex"
                  alignItems={"center"}
                  sx={{ color: Colors.dark }}
                  position={'relative'}
                  paddingTop={matches ? "0.5rem" : "2rem"}
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
                  {props.product.fblink ?
                    (
                      <Link
                        href={props.product.fblink}
                        target="_blank"
                      >
                        <FacebookIcon />
                      </Link>
                    ) : (<FacebookIcon />)
                  }

                  {/* display twiter link if any */}
                  {props.product.twiterlink ?
                    (
                      <Link
                        href={props.product.twiterlink}
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
          </Grid>
        </DialogContent>
      </Dialog>

    </>
  );
}