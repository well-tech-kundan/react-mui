



import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";


//define the app-bar container
export const AppbarContainer = styled(Box)(() => ({

    display: "flex",
    marginTop: 4,
    justifyContent:"center",
    alignItems:"center",
    padding:'2px 8px'

}));

//define the app-bar header
export const AppbarHeader = styled(Typography)(() => ({
    padding:'4px',
    flexGrow:1,
    fontSize: '4em',
    fontFamily:'"Montez", "cursive"',
    color: Colors.secondary,
}));
 

/**define the app-bar header list
 * for displaying the header in a row or in a block the type custom paramter  is used
 */
export const HeaderList = styled(List)(({ type }) => ({

    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}));


/**
 * define the app-bar icon container for desktops
 * this will not grow 
 */
 export const ActionIconsContainerDesktop = styled(Box)(() => ({

    flexGrow: 0
}));


/**
 * define the app-bar icon container for desktops
 * this will not grow 
 */
 export const ActionIconsContainerMobile = styled(Box)(() => ({

    display: "flex",
    background: Colors.shafts,
    position:"fixed",
    bottom:0,
    left:0,
    width: '100%',
    alignItems:'center',
    zIndex:99,
    borderTop:'1px solid ${Colors.border}'
}));