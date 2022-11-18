import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme, { Colors } from "../theme";
import "@fontsource/montez";

//define promotion-slider container 1:08:00
export const PromotionSliderContainer = styled(Box)(() => ({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    // overflow - hidden is for avoiding jumps when window is changed
    overflow: 'hidden',
    background: Colors.secondary,
    // for device above medium up padding
    [theme.breakpoints.up('md')]: {
        padding: '40px 0px 40px 0px'
    },
    // for galaxy folld set padding
    [theme.breakpoints.down('fold')]: {
        padding: '10px 0px 10px 0px'
    },
}));

export const MessageText = styled(Typography)(({theme}) => ({

    fontFamily:'"Montez", "cursive"',
    color: Colors.white,
    fontSize: '1.5rem',
    // for device above medium up set fontsize
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',

    },
    // for device above medium up set fontsize
    [theme.breakpoints.down('fold')]: {
        fontSize: '1rem',

    },
}));