import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItemButton,
  styled,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { NavLink } from "react-router-dom";


//define a style for divider, you can pass addition properties also in props
const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;



function AppDrawer({ menuitems: contentData }) {

  // set the context as drawer open / closed
  const { drawerOpen, setDrawerOpen } = useUIContext();


  //prepare the menu data for rendering
  const renderMenu = contentData.map((menuitem) => (
    <Grid key={menuitem.id} >

      <NavLink to={menuitem.url} underline="none" sx={{

        color: Colors.dove_gray,
        background: Colors.primary,

      }}>
        <ListItemButton
          onClick={() => setTimeout(setDrawerOpen(false),1000) }
          sx={{
            color: Colors.white,
            textDecoration:'none',
            // on mouse hover change the colour the button
            "&:hover": {
              color: Colors.dove_gray,
              background: lighten(0.2, Colors.primary),
              textDecoration:'none',
            },

          }}
        >





          {/* using textdecoration for removing underline from the displayed menu name  */}

            {menuitem.name}
        </ListItemButton>
      </NavLink>
      <MiddleDivider />
    </Grid>
  ));


  return (
    <>

      {/* define the drawer close button with style defintion, this will hook in the appbar - actionMobile.js as drawer is for mobile devices only */}
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.03, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}

      <Drawer open={drawerOpen}>
        <List>
          {renderMenu}
        </List>
      </Drawer>
    </>
  );
}

export default AppDrawer;