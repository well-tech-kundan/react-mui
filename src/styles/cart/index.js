
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme, { Colors } from "../theme";

//style for display product image need source and key
export const EmptyImage = styled('img')(({ src, key }) => ({
    src: `url(${src})`,
    background: Colors.white,
    borderRadius: '10px',
    height: '250px',
    display:"flex",
    alignItems: 'center',
    // for desktop 
    [theme.breakpoints.up('md')]: {
        width: '50%',
        height: '40%',
        marginLeft:"0.5rem",
        
    },
    // for tablets 
    [theme.breakpoints.down('lg')]: {
        //  
        background: Colors.light_gray,
        height: '60%',
        width: '60%',
    },

    // for mobiles
    [theme.breakpoints.down('md')]: {
        //  
        background: Colors.light_gray,
        height: '60%',
        borderRadius: '10px 10px 0px 0px',
        width: '100%',
    },
    // for iPads 
    [theme.breakpoints.up('sm')]: {
        width: '40%',
        height: '55%',
        marginLeft:"0.5rem",
        
    },
}));


// define button that will be used within the bannner
export const BuyNowButton = styled(Button, {
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
    padding: "8px 5px",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
        padding: "4px 5px",
        fontSize: "10px",
    },
}));