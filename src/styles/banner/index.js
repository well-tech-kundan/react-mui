


import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme, { Colors } from "../theme";
import "@fontsource/montez";
import { lighten } from "polished";


//define the banner container, note BOX is like div in html
export const BannerContainer = styled(Box)(() => ({

    display: "flex",
    justifyContent: "center",
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    alignItems: "center",
    background: Colors.light_gray,
    position: 'relative',
    margin: 'auto',

    //introduce break point for banner to be displayed on top of text
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    //introduce break point for banner to be displayed on top of text
    [theme.breakpoints.down('fold')]: {
        height: '90%',
    }
}));

/* Next & previous buttons */
export const BannerPrevButton = styled(Typography)(() => ({
    cursor: 'pointer',
    display: "flex",
    top: '15%',
    left: 0,
    width: 'auto',
    padding: '16px',
    zIndex: 50,
    fontFamily: 'serif',
    color: Colors.white,
    background: Colors.dove_gray,
    fontWeight: '1000',
    fontSize: '2rem',
    transition: '0.6s ease',
    borderRadius: '0 12px 12px 0',
    userSelect: 'none',
    "&:hover": {
        backgroundColor: lighten(0.1,Colors.primary) ,
    },
    //for mobile device change the font size
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
        padding: '12px',
    },

    [theme.breakpoints.down("iphsmall")]: {
        fontSize: '1.3rem',
        padding: '5px',
    },
}));

/* Next & previous buttons */
export const BannerNextButton = styled(Typography)(() => ({
    cursor: 'pointer',
    display: "relative",
    top: '15%',
    right: 0,
    width: 'auto',
    padding: '16px',
    zIndex: 50,
    fontFamily: 'serif',
    color: Colors.white,
    background: Colors.dove_gray,
    fontWeight: '1000',
    fontSize: '2rem',
    transition: '0.6s ease',
    borderRadius: '12px 0 0 12px',
    userSelect: 'none',
    "&:hover": {
        backgroundColor: lighten(0.1,Colors.primary) ,
    },
    //for mobile device change the font size
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
        padding: '12px',
    },
    [theme.breakpoints.down("iphsmall")]: {
        fontSize: '1.3rem',
        right: 0,
        padding: '5px',
    },
}));

// define banner image
export const BannerImage = styled('img')(({ src, theme }) => ({
    src: 'url({src})',
    width: '500px',

    //width of image of medium
    [theme.breakpoints.down('md')]: {
        width: '350px'
    },

    //width of image for small
    [theme.breakpoints.down('sm')]: {
        width: '300px'
    },
    //width of image for small
    [theme.breakpoints.down('fold')]: {
        width: '100px'
    }
}));
//define the banner content theme
export const BannerContent = styled(Box)(() => ({

    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '30px',
    //alignItems: 'center'
    //for mobile device change the font size
    [theme.breakpoints.down('fold')]: {
        padding: '5px',
    },

}));

// define the banner title
export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',

    //for mobile device change the font size
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    },
    //for mobile device galaxy fold 
    [theme.breakpoints.down('fold')]: {
        fontSize: '25px'
    },
}));

// define the banner description
export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    letterSpacing: 1.25,
    marginBottom: '3em',

    //for mobile device 
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
    },
    //for mobile device galaxy fold
    [theme.breakpoints.down('fold')]: {
        lineHeight: 1,
        letterSpacing: 0.75,
        marginBottom: '1em',
    },
}));


// define button that will be used within the bannner
export const BannerButton = styled(Button, {
    // Configure which props should be forwarded on DOM
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyBannerButton",
    slot: "Root",
    // We are specifying here how the styleOverrides are being applied based on props
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === "primary" && styles.primary,
        props.color === "secondary" && styles.secondary,
    ],
})(({ theme }) => ({
    padding: "20px 0px",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
        fontSize: "14px",
    },
    //for mobile device galaxy fold
    [theme.breakpoints.down('fold')]: {
        padding: "7px 0px ",
        fontSize: "10px",
        width: "50%",
    },
}));