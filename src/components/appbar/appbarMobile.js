import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton, useMediaQuery } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { useTheme } from "@emotion/react";


function AppbarMobile({ matches }) {


    //use theme of material styles
    const theme = useTheme();
    const matchesFold = useMediaQuery(theme.breakpoints.down('fold'));

    //set drawer open status using UI context
    const { setDrawerOpen, setShowSearchBox } = useUIContext();


    return (
        /** 49.34
         * This will have
         * Appbar Container
         * Header + Actions
         * List : use ListItemText
         * use ListItemButton with ListItemIcon to display a search button
         * 
         * For the style of this desktop app-bar create index.js in style/appbar folder
         */

        <AppbarContainer >

            {/* hook the menu icon button click to drawer open event */}
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>

            <AppbarHeader textAlign={"center"} variant={matchesFold ?"h5" : "h4"}>
                WellTech
            </AppbarHeader>

            {/* hook the search icon button click to search slider open event */}
            <IconButton onClick={() => setShowSearchBox(true)}>
                <SearchIcon />
            </IconButton>

            <Actions matches={matches} />
        </AppbarContainer>
    );
}

export default AppbarMobile;