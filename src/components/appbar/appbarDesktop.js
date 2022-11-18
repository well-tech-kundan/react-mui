import {  ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, HeaderList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";

import { useUIContext } from "../../context/ui";
import { NavLink } from "react-router-dom";

function AppbarDesktop({ menuitems: contentData, matches }) {


  const { setShowSearchBox } = useUIContext();


  //prepare the menu data for rendering
  const renderMenu = contentData.map((menuitem) => (

    <ListItemText
      key={menuitem.id}

      sx={{
        textDecoration: 'none',
        p: 1,
        // on mouse hover change the colour the button
        "&:hover": {
          background: lighten(0.1, Colors.secondary),
        },

      }}>

      {/* using textdecoration for removing underline from the displayed menu name  */}
      <NavLink  style={{
        textDecoration: 'none',
        color: Colors.dark,
      }}
        to={menuitem.url}
      >

        {menuitem.name}
      </NavLink>
    </ListItemText>

  ));

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
        {renderMenu}

        {/* hook the search icon button click to search slider open event */}
        <ListItemButton key={0} onClick={() => setShowSearchBox(true)}>
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