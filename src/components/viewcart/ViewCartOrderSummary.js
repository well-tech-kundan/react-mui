
import { useTheme } from "@emotion/react";
import {
    Grid,
    Typography,
    useMediaQuery
} from "@mui/material";

import { useUIContext } from "../../context/ui";
import { CART_VIEW, SITE_LOCALE } from "../../data";
import { useEffect, useState } from "react";
import { Colors } from "../../styles/theme";
import { BuyNowButton } from "../../styles/cart";

function ViewCartOrderSummary() {
    /**
    * From UI context set add to cart variables for handling add to cart actions
    */

    const { cartState, cartState: { cart } } = useUIContext();

    //define variable to maintain the subtotal of the cart
    const [total, setTotal] = useState();
    const [delivaryCharges, setDelivaryCharges] = useState(0);

    useEffect(() => {
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

    return (
        <Grid container
            p={matchesIphsmall ? 1:matchesIphoneXR ? 1:2}
            //xs={matchesLarge ? 3 : matchesPC ? 5 : (matchesPC && matchesMedium) ? 5 : matches ? 10 : 5}
            border={1}
            borderColor={Colors.dove_gray}
            //xs={matchesIphsmall ? 7 : matches ? 8 : 9}
            xs={matchesIphsmall ? 11.25:matchesIphoneXR ? 11.25:matchesLarge ? 8.75 : matchesPC ? 7 : (matchesPC && matchesMedium) ? 8 : matches ? 8 : 8}

            borderRadius={"0.7rem"}
        >
            <Grid container >
                <Grid item xs={3} mt={matchesIphsmall ? 1:matchesIphoneXR ? 1:2}>
                    <BuyNowButton color="primary">Buy Now</BuyNowButton>
                </Grid>
                    <Grid item
                        xs={matchesIphsmall ? 9:matchesIphoneXR ? 9:matchesLarge ? 8 : matchesPC ? 6 : (matchesPC && matchesMedium) ? 6 : matches ? 7 : 4}
                    //xs={matchesIphsmall ? 6 : matchesIpad && matches ? 7 : matchesIphoneXR ? 6 : matchesLarge ? 5 : 5}
                    >
                        <Typography
                            variant={matches ? "body2" : "body1"}
                            align="left"
                            m={matchesIphsmall ? 0:matchesIphoneXR ? 0:1}
                            fontSize={matchesIphsmall ? "1.2rem" : matchesIphoneXR ? "1rem" : matchesIpad && matches ? "1rem" : matchesIphoneXR ? "1.2rem" : matchesLarge ? "1.2rem" : "1.2rem"}
                            fontWeight={700}
                            color={Colors.primary}
                            display="inline"
                        >
                            {CART_VIEW.ORD_TOTAL}
                        </Typography>
                        <Typography
                            variant="body1"
                            align="left"
                            fontSize={matchesIphsmall ? "1.2rem" : matchesIpad && matches ? "1rem" : matchesIphoneXR ? "1.2rem" : matchesLarge ? "1.2rem" : "1.2rem"}
                            fontWeight={700}
                            color={Colors.primary}
                            display="inline"
                        >
                            {SITE_LOCALE}{total + delivaryCharges}
                        </Typography>

                        <Typography
                            m={matchesIphsmall ? 0:matchesIphoneXR ? 0:1}
                            align="left"
                            fontSize={"0.8rem"}
                        >
                            {CART_VIEW.TERM_CONDN}
                        </Typography>
                    </Grid>
            </Grid>
        </Grid>
    );
}

export default ViewCartOrderSummary;