import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";

function Appbar() {

    // this will provide a responsive appbar for that we will media-query

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {matches ? <AppbarMobile matches={ matches } /> : <AppbarDesktop matches={ matches }  />}
        </>

    );
}

export default Appbar;