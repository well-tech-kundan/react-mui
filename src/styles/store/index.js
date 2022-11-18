
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import theme, { Colors } from "../theme";


//define the store container, note BOX is like div in html
export const StoreContainer = styled(Box)(() => ({

    display: 'flex',
}));

//define the store container, note BOX is like div in html
export const StoreProductContainer = styled(Box)(() => ({

    display: 'flex',
    width: '100%',
    padding: '0px',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

    //introduce break point for banner to be displayed on top of text
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const StoreFilterContainer = styled(Box)(() => ({
    backgroundColor: Colors.secondary,
    color: Colors.white,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: "20%",
    margin: "10px",
    height: "30%",
    [theme.breakpoints.down("md")]: {
            width: "80%",
            height: "92%",
            justifyContent:"flex-start"
    },
}));

export const StoreFilterTitle = styled(Box)(() => ({
    fontSize: '30px',
    width: 'max-content'
}));

//define the store container, note BOX is like div in html
export const StoreSingleProductContainer = styled(Box)(() => ({
    width: "30%",
    margin: "10px",
    [theme.breakpoints.down("md")]: {
            width: "90%",
            height: "92",
    },
    [theme.breakpoints.down("md")]: {
            width: "100%",
            marginLeft: "0px",
    },
}));