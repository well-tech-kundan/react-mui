
import { useTheme } from "@emotion/react";
import {
    Avatar,
    Divider,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Typography,
    useMediaQuery
} from "@mui/material";

import { useUIContext } from "../../context/ui";
import { CART_DEFAULT_SETTINGS, CART_VIEW, SITE_LOCALE } from "../../data";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { Colors } from "../../styles/theme";
import { BuyNowButton } from "../../styles/cart";

function ViewCartItemList() {


    /**
     * From UI context set add to cart variables for handling add to cart actions
     */

    const { cartState, cartState: { cart }, dispatch } = useUIContext();

    //define variable to maintain the subtotal of the cart
    const [total, setTotal] = useState();
    const [delivaryCharges, setDelivaryCharges] = useState(0);

    useEffect(() => {
        console.log("calculating subtotal");
        console.log(cartState.cart);
        setTotal(
            cart.reduce((subTotal, cartItem) => subTotal + Number(cartItem.price) * (cartItem.quantity ? Number(cartItem.quantity) : 1), 0)
        );
        setDelivaryCharges(0);
    }, [cartState, cart]);

    const theme = useTheme();
    // define a variable to check if the breakpoint is below medium i.e. fo tabs/mobile
    const matchesLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesPC = useMediaQuery(theme.breakpoints.down('pcmedium'));
    const matchesMedium = useMediaQuery(theme.breakpoints.up('md'));
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesIpad = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesIphoneXR = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesIphsmall = useMediaQuery(theme.breakpoints.down('iphsmall'));

    const quantityList = itemAvialble => {
        itemAvialble = itemAvialble ? itemAvialble : CART_DEFAULT_SETTINGS.AVAILABLE;
        let content = [];
        for (let item = 1; item < itemAvialble + 1; item++) {
            content.push(<MenuItem key={"item-select-key" + item} value={item}>{item}</MenuItem>);
        }
        return content;
    };

    /*
     *************************************
     * Render Cart Content
     *************************************
     * 
     */
    const renderCartItem = cart.map((item, index) => (


        //   product-Quantity Selected for purchase

        <Grid
            container
            spacing={3}
            p={matchesIphsmall ? 1 : matchesIphoneXR ? 1 :2}
            key={item.id + "a"}

        >
            <Grid
                item
            >
                <Avatar
                    src={item.image}
                    sx={{
                        width: matchesIphsmall ? 88 : matchesIphoneXR ? 90 :96,
                        height: matchesIphsmall ? 88 : matchesIphoneXR ? 90 :96,
                        mb: 2,
                    }}
                />
            </Grid>
            <Grid item xs sm >
                <Grid container direction={matches ? "row" : "row"} spacing={2}>
                    <Grid item xs>
                        <Grid container direction={(matchesIphsmall || matchesIphoneXR || matches) ? "column" : "row"}>
                            <Grid item xs={matchesIphsmall ? 6 : matchesIphoneXR ? 4 : matchesLarge ? 9 : 8} >
                                <Typography
                                    fontSize={matchesIphsmall ? "0.7em" : matches ? "0.9em" : "1.1em"}
                                >
                                    {item.name}
                                </Typography>
                            </Grid>


                            <Grid item display={"contents"} align={(matchesIphsmall || matchesIphoneXR || matches) ? "left" : "right"}>
                                {/* // display tooltip for desktop display */}
                                <DeleteIcon
                                    key={item.id}
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: item,
                                        })
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {
                        (matchesLarge) &&
                        <Grid item
                            xs={5}>


                            {/* for desktop display description with the image */}
                            <Typography
                                variant="subtitle2"
                            >
                                {item.description}
                            </Typography>
                        </Grid>
                    }
                    <Grid item xs={matchesIphsmall ? 3 : matchesIphoneXR ? 3 : matchesLarge ? 1.5 : 4} >
                        <FormControl sx={{ m: 0, minWidth: 40 }} size="small" >
                            <Select sx={{ width:50 , height:30, maxHeight: 100 }} 

                                id={"item-quality-select" + item.id}
                                value={item.quantity}
                                onChange={(event) => (
                                        //cart[index].quantity = event.target.value,
                                        item.quantity = event.target.value
                                        //event.value= item.quantity
                                )}
                            >
                                {quantityList(item.available)}

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={matchesIphsmall ? 3.5 : matchesIphoneXR ? 3.7 : matchesLarge ? 1 : 3}>
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            sx={{
                                pb: 1,
                                pl: matchesIphsmall ? 3.5 : matchesIphoneXR ? 3.7 : 0,
                            }}
                        >
                            {item.price ? SITE_LOCALE + item.price : ""}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
                    {/* for mobile  display description with the image */}
                    {
                        (!matchesLarge) &&
                        <Grid item
                            align={"left"}
                            //xs={matches ? 12 : 0}
                            xs={matchesIphsmall ? 18 : matchesIphoneXR ? 18 : 0}
                        >


                            <Typography
                                variant="subtitle2"
                                mt="-2.5em"
                            >
                                {item.description}
                            </Typography>
                        </Grid>
                    }
            <Divider variant="fullWidth" width="100%" />
        </Grid >


    ));

    /*
     *************************************
     * Render Cart Total
     *************************************
     * 
     */
    const renderCartTotal = ((
        // display terms and condition text and order summary text
        <Grid item>

            <Typography
                mb={1}
                align="center"
                fontSize={ matchesIphoneXR ? "0.6rem" : matchesIpad && matches ? "0.7rem" : matchesLarge ? "0.8rem" : "0.7rem"}
            >
                {CART_VIEW.TERM_CONDN}
            </Typography>
            <Divider variant="fullWidth" width="100%" />
            <Grid item xs
                mb={1}
                mt={1}>
                <Typography
                    align="left"
                    fontSize={matchesIphsmall ? "0.9rem" : matchesIpad && matches ? "0.9rem" : matchesIphoneXR ? "0.9rem" : matchesLarge ? "1.2rem" : "1.2rem"}
                    fontWeight={700}
                    display={"inline"}
                >
                    {CART_VIEW.ORD_SUMRY}
                </Typography>
                <Typography
                    ml={ matchesIphsmall ? 2:matchesIphoneXR ? 20 : matchesLarge ? 4 : matchesIpad ? 1 : !matches ? 10 : 5}
                    display={"inline"}
                >
                    <BuyNowButton color="primary">Buy Now</BuyNowButton>
                </Typography>

            </Grid>
            <Grid container bgcolor={Colors.white} >
                <Grid item
                    //xs={5}
                    xs={matchesLarge ? 7 : !matches ? 7 : 7}
                //xs={matchesIphsmall ? 6 : matchesIpad && matches ? 7 : matchesIphoneXR ? 6 : matchesLarge ? 5 : 5}
                >
                    <Typography
                        variant={matches ? "body2" : "body1"}
                        align="left"
                        m={1}

                    >
                        {CART_VIEW.ORD_ITEMS + "(" + cart.length + ") :"}
                    </Typography>
                </Grid>
                <Grid item
                    //xs={6}
                    xs={matchesLarge ? 4 : matchesPC ? 4 : (matchesPC && matchesMedium) ? 4 : matches ? 5 : 4}
                    //xs={matchesLarge ? 4 :!matches ? 4 : 5}
                    //xs={matchesIphsmall ? 6 : matchesIpad && matches ? 4 : matchesIphoneXR ? 6 : matchesLarge ? 6 : 6}
                    m={1}
                    nowrap
                >
                    <Typography
                        variant={matches ? "body2" : "body1"}
                        align="right"
                    >
                        {SITE_LOCALE}{total}
                    </Typography>

                </Grid>
                <Grid item
                    //xs={7}
                    xs={matchesLarge ? 8 : matchesPC ? 7 : (matchesPC && matchesMedium) ? 8 : matches ? 9 : 6}
                // xs={matchesIphsmall ? 9 : matchesIpad && matches ? 9 : matchesIphoneXR ? 9 : matchesLarge ? 7 : 7}
                >
                    <Typography
                        variant={matches ? "body2" : "body1"}
                        align="left"
                        m={1}
                    >
                        {CART_VIEW.DLVRY_PCKG}
                    </Typography>
                </Grid>
                <Grid item
                    //xs={4}
                    xs={matchesLarge ? 3 : matchesPC ? 4 : matchesMedium ? 5 : matches ? 3 : 2}
                    //xs={matchesIphsmall ? 3 : matchesIpad && matches ? 2 : matchesIphoneXR ? 3 : matchesLarge ? 4 : 4}
                    m={1}
                >
                    <Typography
                        variant={matches ? "body2" : "body1"}
                        align="right"
                    >
                        {delivaryCharges > 0 ? delivaryCharges : CART_VIEW.FREE}
                    </Typography>

                </Grid>
                <Divider variant="fullWidth" width="100%" />
                <Grid item
                    xs={matchesLarge ? 7 : matchesPC ? 6 : (matchesPC && matchesMedium) ? 6 : matches ? 7 : 6}
                //xs={matchesIphsmall ? 6 : matchesIpad && matches ? 7 : matchesIphoneXR ? 6 : matchesLarge ? 5 : 5}
                >
                    <Typography
                        variant={matches ? "body2" : "body1"}
                        align="left"
                        m={1}
                        //fontSize={matchesIphsmall ? "1.2rem" : matchesIpad && matches ? "1rem" : matchesIphoneXR ? "1.2rem" : matchesLarge ? "1.2rem" : "1.2rem"}
                        fontSize={matchesIphsmall ? "0.9rem" : matchesIpad && matches ? "0.9rem" : matchesIphoneXR ? "0.9rem" : matchesLarge ? "1.2rem" : "1.2rem"}
                        fontWeight={700}
                        color={Colors.primary}
                    >
                        {CART_VIEW.ORD_TOTAL}
                    </Typography>
                </Grid>
                <Grid item
                    xs={matchesLarge ? 4 : matchesPC ? 5 : (matchesPC && matchesMedium) ? 2 : matches ? 1 : 1}
                    // xs={matchesIphsmall ? 3 : matchesIpad && matches ? 4 : matchesIphoneXR ? 3 : matchesLarge ? 6 : 6}
                    m={1}
                    nowrap
                >
                    <Typography
                        variant="body1"
                        align="right"
                        fontSize={matchesIphsmall ? "1rem" : matchesIpad && matches ? "1rem" : matchesIphoneXR ? "1rem" : matchesLarge ? "1.2rem" : "1.2rem"}
                        fontWeight={700}
                        color={Colors.primary}
                    >
                        {SITE_LOCALE}{total + delivaryCharges}
                    </Typography>

                </Grid>

            </Grid>
        </Grid>
    ));


    /*
     *************************************
     * Return View Cart page content
     *************************************
     * 
     */
    return (
        <Grid container  >
            <Divider variant="fullWidth" width="100%" />
            {/* render ordered items */}
            {!matchesIphoneXR &&
                <Grid
                    item
                    p={2}
                    //xs={matchesIphsmall ? 7 : matches ? 8 : 9}
                    xs={matchesLarge ? 9 : matchesPC ? 7 : (matchesPC && matchesMedium) ? 8 : matches ? 8 : 8}
                // xs={matchesLarge ? 9 :!matches ? 8 : 12}
                // xs={matchesIphsmall ? 8 : matchesIpad && matches ? 8 : matchesIphoneXR ? 11 : matchesLarge ? 9 : 9}
                >
                    {renderCartItem}
                </Grid>
            }
            {/* render order subtotal block */}
            <Grid
                item
                p={2}
                // xs={matchesIphsmall ? 7 : matches ? 8 : 3}
                xs={matchesIphoneXR ? 12:matchesLarge ? 3 : matchesPC ? 5 : (matchesPC && matchesMedium) ? 5 : matches ? 10 :  4}
                //xs={matchesLarge ? 3 :!matches ? 4 : 10}
                bgcolor={Colors.light_gray}
                mt={1}
                borderRadius={"1rem"}
            >
                {renderCartTotal}
            </Grid>
            {matchesIphoneXR &&
                <Grid
                    item
                    pl={1}
                    //xs={matchesIphsmall ? 7 : matches ? 8 : 9}
                    xs={12}
                // xs={matchesLarge ? 9 :!matches ? 8 : 12}
                // xs={matchesIphsmall ? 8 : matchesIpad && matches ? 8 : matchesIphoneXR ? 11 : matchesLarge ? 9 : 9}
                >
                    {renderCartItem}
                </Grid>
            }
        </Grid>
    );
}

export default ViewCartItemList;