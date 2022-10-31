import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";


function AppbarMobile({ matches }) {

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

            <AppbarHeader textAlign={"center"} variant="h4">
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