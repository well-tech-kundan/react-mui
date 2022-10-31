
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
        width: '60%',
        height: '40%',
        marginLeft:"4rem",
        
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