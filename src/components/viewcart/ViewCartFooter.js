import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { CART_VIEW } from "../../data";
import { Colors } from "../../styles/theme";


function ViewCartFooter() {
    const theme = useTheme();
    // define a variable to check if the breakpoint is below medium i.e. fo tabs/mobile
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesIphoneXR = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesIphsmall = useMediaQuery(theme.breakpoints.down('iphsmall'));

    return (
        <Grid container color={Colors.dim_grey}>
            <Grid item>

                <Typography
                    variant={matches ? "body2" : "body1"}
                    m={matchesIphsmall ? 2 : matchesIphoneXR ? 2 : 1}
                    align="left"
                    fontSize={"0.8rem"}
                    style={{ whiteSpace: 'pre-line' }}
                >
                    {CART_VIEW.HELP_MSG}
                </Typography>
            </Grid>

        </Grid>
    );
}

export default ViewCartFooter;