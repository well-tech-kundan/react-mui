import { createTheme } from "@mui/material/styles";

/**
 * 17.02
 */
export const Colors = {
    primary: "#5f2c3e",
    secondary: "#d1adcc",
    success:"#4CAF50",
    info:"#00a2ff",
    danger:"#FF5722",
    warning:"#FFC107",
    dark:"#0e1b20",
    light:"#aaa",
    muted:"#abafb3",
    border:"#DDDFE1",
    inverse:"#2F3D4A",
    shaft:"#333",

    //////////////
    //  Grays 16:58
    //////////////
    dim_gray: "#696969",
    dove_gray: "#d5d5d5",
    light_gray: "rgb(230,230,20)",


    //////////////////
    // Solid COlours
    //////////////////
    white: "#fff",
    black: "#000",
};

const theme = createTheme({
    palette: {
        primary:{
            main: Colors.primary
        },
        secondary:{
            main:Colors.secondary 
        }
    },

    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:true,
                disableElevation:true
            }
        }
    }

});

export default theme;