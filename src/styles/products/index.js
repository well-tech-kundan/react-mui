
import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import theme, { Colors } from "../theme";
import { slideInBottom, slideInRight } from "../../animation";
import { lighten } from "polished";
import { PROD_DISPLAY_SIZE } from "../../data";

export const Product = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        // as absolute and larger screen used set position relative
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '90%',
        height: '250px',
        padding: '10px',
        // set margin bottom to have some gap between to image grid rows.
        marginBottom: '4rem',

    },
    [theme.breakpoints.down('lg')]: {
        // as absolute and mobile screen used set position relative
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '250px',
        height: '300px',
        borderRadius: '10px',
        padding: '0px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    },
    [theme.breakpoints.down('sm')]: {
        // as absolute and small screen used set position relative
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '250px',
        height: '300px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    },
    //for small phone7  mobile <= 400
    [theme.breakpoints.down("iphsmall")]: {
        width: '235px',
    },
    //for small galaxy  mobile <= 300
    [theme.breakpoints.down("fold")]: {
        width: '200px',
        padding:'0px',
    },
}));

//style for displaying product in large size 
export const ProductLarge = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        // as absolute and larger screen used set position relative
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '310px',
        height: '420px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    },
    [theme.breakpoints.down('md')]: {
        // as absolute and larger screen used set position relative
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '310px',
        height: '420px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    },
    // for iPads 
    [theme.breakpoints.up('sm')]: {
        width: '290px',

    },
    // for galaxy mobile > 400
    [theme.breakpoints.down('sm')]: {
        width: '285px',

    },
    //for small phone7  mobile <= 400
    [theme.breakpoints.down("iphsmall")]: {
        width: '285px',
    },
    //for small phone7  mobile <= 400
    [theme.breakpoints.down("fold")]: {
        width: '225px',
    },
}));


//style for displaying product in thin size 
export const ProductThin = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    textAlign: 'center',

    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '270px',
    height: '200px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    //for small phone7  mobile <= 400
    [theme.breakpoints.down("iphsmall")]: {
        width: '255px',
    },
    [theme.breakpoints.down("fold")]: {
        width: '200px',
    },

}));


//style for displaying product in small size 
export const ProductSmall = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    textAlign: 'center',

    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '180px',
    height: '240px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    //for small phone7  mobile <= 400
    [theme.breakpoints.down("fold")]: {
        width: '150px',
    },

}));
//style for display product image need source and key
export const ProductImage = styled('img')(({ src, key }) => ({
    src: `url(${src})`,
    width: '100px',
    background: Colors.light_gray,
    borderRadius: '10px',
    padding: '1px',
    height: '250px',
    alignItems: 'center',

    // for desktop 
    [theme.breakpoints.up('md')]: {
        width: '350px',
        height: '100%',
        boxShadow: '0 8px 16px 10px rgba(0, 0, 0, 0.2), 0 16px 20px 0 rgba(0, 0, 0, 0.19)',
        position: 'absolute',
    },
    // for tablets 
    [theme.breakpoints.down('lg')]: {
        //  
        background: Colors.light_gray,
        height: '100%',
        width: '100%',
    },

    // for mobiles
    [theme.breakpoints.down('md')]: {
        //  
        background: Colors.light_gray,
        height: '60%',
        borderRadius: '10px 10px 0px 0px',
        width: '100%',
    },
}));


export const WishProduct = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        // as absolute and larger screen used set position relative
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '90%',
        height: '210px',
        padding: '10px',
        // set margin bottom to have some gap between to image grid rows.
        marginBottom: '4rem',

    },
}));
//style for display product image in wishlist
export const WishProductImage = styled('img')(({ src, key }) => ({
    src: `url(${src})`,
    width: '100px',
    background: Colors.light_gray,
    borderRadius: '10px',
    alignItems: 'center',

    // for desktop 
    [theme.breakpoints.up('md')]: {
        width: '350px',
        height: '250px',
        boxShadow: '0 8px 16px 10px rgba(0, 0, 0, 0.2), 0 16px 20px 0 rgba(0, 0, 0, 0.19)',
        position: 'absolute',
    },
    // for tablets 
    [theme.breakpoints.down('lg')]: {
        //  
        background: Colors.light_gray,
        height: '100%',
        width: '100%',
    },

    // for mobiles
    [theme.breakpoints.down('md')]: {
        //  
        background: Colors.light_gray,
        height: '60%',
        borderRadius: '10px 10px 0px 0px',
        width: '100%',
    },
}));

//style for display product image need source and key
export const ProductImagLarge = styled('img')(({ src, key }) => ({


    src: `url(${src})`,
    background: Colors.light_gray,
    padding: '1px',
    alignItems: 'center',


    borderRadius: '10px 10px 0px 0px',
    width: '100%',
    height: '55%',
    

    // for galaxy fold
    [theme.breakpoints.down('fold')]: {
        //  
    padding: '0px',
    width: '100%',
    },

}));



//style for display product thin size image need source and key
export const ProductImagThin = styled('img')(({ src, key }) => ({


    src: `url(${src})`,
    background: Colors.light_gray,
    padding: '1px',
    borderRadius: '10px 10px 0px 0px',
    width: '100%',
    height: '100%',


}));


//style for display product small size image need source and key
export const ProductImagSmall = styled('img')(({ src, key }) => ({


    src: `url(${src})`,
    background: Colors.light_gray,
    padding: '1px',
    borderRadius: '10px 10px 0px 0px',
    width: '100%',
    height: '60%',


}));
export const ProductActionButton = styled(IconButton)(() => ({

    background: Colors.white,
    "&:hover": {
        background: lighten(0.15, Colors.secondary),
    },
    [theme.breakpoints.down("md")]: {
        background: lighten(0.05, Colors.light_gray),
    },
    margin: 4,
}));

/**
 * The prop isWish is not recognised by react that results console error.
 * To fix that can be controlled by passing object to handle that , see shouldForwardProp
 */
export const ProductFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== 'isWish'
})(({ isWish, theme }) => ({

    //based on the favourite change color
    color: isWish ? Colors.primary : Colors.light,
    "&:hover": {
        background: lighten(0.15, Colors.secondary),
    },

    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 5,
        top: 0,
    },
    [theme.breakpoints.up("lg")]: {
        position: "absolute",
        right: 25,
        top: 20,
    },
    [theme.breakpoints.down("md")]: {
        background: lighten(0.05, Colors.light_gray),
        fontSize: "small",
    },
}));




/**
 * The prop isWish is not recognised by react that results console error.
 * To fix that can be controlled by passing object to handle that , see shouldForwardProp
 */
export const WishProductFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== 'isWish'
})(({ isWish, theme }) => ({

    //based on the favourite change color
    color: isWish ? Colors.primary : Colors.light,
    "&:hover": {
        background: lighten(0.15, Colors.secondary),
    },

    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 5,
        top: 0,
    },
    [theme.breakpoints.up("lg")]: {
        position: "relative",
    },
    [theme.breakpoints.down("md")]: {
        background: lighten(0.05, Colors.light_gray),
    },
}));


/**
 * CSS setting for Add to Cart button
 */
export const ProductAddtoCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show, size, theme }) => ({

    width: '250px',
    fontSize: '12px',

    //for normail pc desktop
    // add animation 1:32:!5
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "2%",
        width: "95%",
        padding: "10px 5px",
        animation:
            show &&
            `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },

    //for large screen monitors
    [theme.breakpoints.up("lg")]: {
        position: "absolute",
        bottom: "2%",
        right: "7%",
        width: "90%",
        padding: "10px 5px",
        fontSize: '14px',
        alignItems: 'center',
        animation:
            show &&
            `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
    //for tabs and mobile 
    [theme.breakpoints.down("md")]: {
        top: "2%",
        left: '2rem',
        width: (size === PROD_DISPLAY_SIZE.NORMAL) ? "100%" : "150%",
        alignItems: 'center',
        padding: "10px 5px",
        marginBottom: '1.5rem',
    },
    // for iPads 
    [theme.breakpoints.up('sm')]: {
        left: '2rem',
        width: (size === PROD_DISPLAY_SIZE.NORMAL) ? "73%" : "80%",
        alignItems: 'center',
        padding: "10px 5px",
        marginBottom: '1.5rem',

    },
    // for mobile device  
    [theme.breakpoints.down('sm')]: {
        left: '2rem',
        width: (size === PROD_DISPLAY_SIZE.NORMAL) ? "75%" : "79%",
        alignItems: 'center',
        padding: "10px 5px",
        marginBottom: '1.5rem',

    },
    [theme.breakpoints.down('galaxy')]: {
        left: '2rem',
        width: (size === PROD_DISPLAY_SIZE.NORMAL) ? "75%" : "79%",
        alignItems: 'center',
        padding: "10px 5px",
        marginBottom: '1.5rem',

    },
    //for small phone7  mobile 
    [theme.breakpoints.down("iphsmall")]: {
        top: "2%",
        left: '2rem',
        width: (size === PROD_DISPLAY_SIZE.NORMAL) ? "117%" : "150%",
        alignItems: 'center',
        padding: "10px 5px",
        marginBottom: '1.5rem',
    },
    //for galaxy fold  mobile 
    [theme.breakpoints.up("fold")]: {
        width: (size === PROD_DISPLAY_SIZE.NORMAL) ? "75%" : "87%",
    },
    //for galaxy fold  mobile 
    [theme.breakpoints.up("iphsmall")]: {
        width: (size === PROD_DISPLAY_SIZE.NORMAL) ? "75%" : "79%",
    },
    //for small phone7  mobile 
    [theme.breakpoints.down("fold")]: {
        width: (size === PROD_DISPLAY_SIZE.NORMAL) ? "85%" : "97%",
    },
    //add background colour
    background: Colors.secondary,



}));




//wrapper for product meta description
export const ProductMetaWrapper = styled(Box)(({ theme, wishlistpg = false, storepg = false }) => ({
    padding: 10,
    marginLeft: wishlistpg ? '30%' : '0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //for desktop
    [theme.breakpoints.up('md')]: {
        padding: 0,
        width: storepg ? "75%" : "80%",
        // set margin bottom to have some gap between to image grid rows.
        //marginBottom: '1.5rem',
        marginTop: wishlistpg ? "0" : '-1.5rem',
        fontSize: '16.15px',

        display: wishlistpg ? "grid" : "block",
    },
    // for mobiles
    [theme.breakpoints.down('md')]: {
        //  
        marginLeft: "0%",
        fontSize: '12x',
    },
}));

//wrapper for product meta description
export const ProductMetaWrapperThin = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: '2%',
    left: '5%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
}));

//wrapper for add to favourite or share 
export const ProductActionsWrapperThin = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show, theme }) => ({


    // for mobiles
    position: 'absolute',
    top: '2%',
    right: '0%',
}));


//wrapper for add to favourite or share 
export const ProductActionsWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show, theme }) => ({

    //add animation for desktop


    // for pc desktops
    [theme.breakpoints.up('md')]: {
        display: show ? 'visible' : 'none',
        position: 'absolute',
        right: 5,
        top: '20%',
        //add animatino 1:36:44
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
    //for large monitor screens
    [theme.breakpoints.up('lg')]: {
        display: show ? 'visible' : 'none',
        position: 'absolute',
        right: 25,
        top: '25%',
        //add animatino 1:36:44
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },


    // for mobiles
    [theme.breakpoints.down('md')]: {
        //  
        position: 'absolute',
        bottom: '2%',
    },
}));


// export const ProductContainer = styled()(() => ({

// }));