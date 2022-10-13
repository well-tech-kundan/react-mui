import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";



function AppbarMobile({ matches }) {
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

            <IconButton>
                <MenuIcon />
            </IconButton>

            <AppbarHeader textAlign={"center"} variant="h4">
                WellTech
            </AppbarHeader>

            <IconButton>
                <SearchIcon />
            </IconButton>

            {/* <HeaderList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Dashboard" />
                <ListItemText primary="Clubs" />
                <ListItemText primary="Events" />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </HeaderList> */}
            <Actions matches={matches} />
        </AppbarContainer>
    );
}

export default AppbarMobile;