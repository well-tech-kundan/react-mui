import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, HeaderList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";


function AppbarDesktop({ matches }) {


    return (

        /**
         * This will have
         * Appbar Container
         * Header + Actions
         * List : use ListItemText
         * use ListItemButton with ListItemIcon to display a search button
         * 
         * For the style of this desktop app-bar create index.js in style/appbar folder
         */

        <AppbarContainer >
            <AppbarHeader>WellTech</AppbarHeader>
            <HeaderList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Dashboard" />
                <ListItemText primary="Clubs" />
                <ListItemText primary="Events" />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </HeaderList>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}

export default AppbarDesktop;