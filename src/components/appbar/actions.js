import { Badge, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, HeaderList } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
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
     * From UI context set add to cart variables for handling add to cart actions
     */
    const { cart, setShowCart } = useUIContext();


    /**
     * From UI context set add to wishList variables for handling add to cart actions
     */
    const { wishList, setShowWishList } = useUIContext();

    /**
     * Switch the container icon Mobile if matches otherwise use container icon desktop
     */

    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

    return (
        <Component>
            <HeaderList type="row">
                <ListItemButton
                    onClick={() => setShowCart(true)}
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary,
                        }}
                    >
                        {/* show cart items in the icon using badge feature */}
                        <Badge
                            badgeContent={cart && cart.length}
                            color={matches ?  "white" : "primary"}
                        >
                            <ShoppingCartIcon
                            />

                        </Badge>
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem />


                <ListItemButton
                    onClick={() => setShowWishList(true)}
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary, 
                        }}
                    >{/* show wishList items in the icon using badge feature */}
                        <Badge
                            badgeContent={wishList && wishList.length}
                            color={matches ?  "white" : "secondary"}
                            max={99}
                        >
                            <FavoriteIcon />
                        </Badge>
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
                            justifyContent: "center",
                            color: matches && Colors.secondary,
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