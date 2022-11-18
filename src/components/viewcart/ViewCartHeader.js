import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import {  CART_VIEW} from "../../data";

function ViewCartHeader({ numberofitem }) {


    const theme = useTheme();
    const exlarge = useMediaQuery(theme.breakpoints.up('xl'));
    const large = useMediaQuery(theme.breakpoints.up('lg'));
    const medium = useMediaQuery(theme.breakpoints.up('md'));
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container>
            <Grid item>
                <Typography
                    display="inline"
                    fontSize={matches ? "1.3rem" : "2rem"}
                    fontWeight="Bold"
                    textTransform="uppercase"
                >
                    {CART_VIEW.TITLE}
                </Typography>
                <Typography
                    display="inline"
                    fontSize={matches ? "1.1rem" : "1.1rem"}
                    fontWeight="Light"
                    textTransform="uppercase"
                >
                    &nbsp;{numberofitem} Item{numberofitem > 1 ? "s" : ""}
                </Typography>
                {
                    !small ?
                        (
                            <Typography
                                display="inline"
                                fontSize={matches ? "0.7rem" : "1.1rem"}
                                fontWeight="Light"
                                align="right"
                                ml={exlarge ? "50rem" :large && medium ? "30rem" : medium ? "15rem" : "9rem"}
                                textTransform="uppercase"
                            >
                                Continue Shopping
                            </Typography>
                        ) : ("")
                }
            </Grid>
        </Grid>
    );
}

export default ViewCartHeader;