
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import theme, { Colors } from "../theme";

export const ContainerDescription = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'left',
    [theme.breakpoints.up('md')]: {
        // as absolute and larger screen used set position relative
        // set margin bottom to have some gap between to image grid rows.
        
        fontSize: '26.15px',
        marginLeft:'1%',
        marginBottom:'1%',

    },
    [theme.breakpoints.down('md')]: {
        fontSize: '15.5px',
        marginLeft:'4%',
        marginBottom:'3%',
        marginTop:'2%',
        //  

    },
}));

export const ContainerTitle = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'left',
    marginTop:'2%',
    [theme.breakpoints.up('md')]: {
        // as absolute and larger screen used set position relative
        // set margin bottom to have some gap between to image grid rows.
        
        marginLeft:'1%',
        marginBottom:'2%',
    },
    [theme.breakpoints.down('md')]: {
        
        marginLeft:'4%',
        marginBottom:'42',
        //  

    },
}));