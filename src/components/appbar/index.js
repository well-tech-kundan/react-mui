import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";

function Appbar({menuitems}) {

    // this will provide a responsive appbar for that we will media-query

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {matches ? (
                <AppbarMobile matches={ matches } /> 
            ) : (
                <AppbarDesktop menuitems={menuitems} matches={ matches } />
            )}
            
        </>

    );
}

export default Appbar;