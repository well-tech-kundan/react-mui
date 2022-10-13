import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, HeaderList } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
/**
 * An action icon has to be wapper inside a item-button/Item-icon
 * 
 * For managing the spaces and alignment sx properties will be used
 * 
 * add divider between the buttons
 * @returns 
 */
function Actions({ matches }) {


    /**
     * Switch the container icon Mobile if matches otherwise use container icon desktop
     */

    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

    return (
        <Component>
            <HeaderList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem />


                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem />

                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem />

                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem />
            </HeaderList>

        </Component>

    );
}

export default Actions;