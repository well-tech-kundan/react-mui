import { useTheme } from "@emotion/react";
import { Avatar, Button, Divider, Drawer, Fab, Grid, Paper, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { CART_DEFAULT_SETTINGS, CART_VIEW, SITE_LOCALE } from "../../data";
import { EmptyImage } from "../../styles/cart";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import IncDec from "../ui/incdec";

function Cart() {

    // use cart related datastrures and functions availabe in Context
    const { cartState: { cart }, setShowCart, showCart, dispatch } = useUIContext();




    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesIpad = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesIphsmall = useMediaQuery(theme.breakpoints.down('iphsmall'));

    const cartContent = cart.map(item => (


        //   product-Quantity Selected for purchase

        <Grid
            container
            spacing={3}
            p={2}
            key={item.id + "a"}
        >
            <Grid
                item
            >
                <Avatar
                    src={item.image}
                    sx={{
                        width: 96,
                        height: 96,
                        mb: 2,
                    }}
                />
            </Grid>
            <Grid item xs={matchesIphsmall ? 7 : matches ? 8 : 12} sm container >
                <Grid item xs container direction={matches ? "column" : "row"} spacing={2}>
                    <Grid item xs>
                        <Grid item xs container direction={matches ? "row" : "column"}>
                            <Grid item xs>
                                <Typography
                                    fontSize={matchesIphsmall ? "0.7em" : matches ? "0.9em" : "1.3em"}
                                >
                                    {item.name}
                                </Typography>
                            </Grid>
                            {
                                matches ?
                                    (
                                        <Grid item display={"contents"}>
                                            {/* // display tooltip for desktop display */}
                                            <DeleteIcon
                                                key={item.id}
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: item,
                                                    })
                                                }
                                            />
                                        </Grid>
                                    ) : (
                                        ""
                                    )
                            }
                        </Grid>
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            sx={{
                                pb: 1,
                            }}
                        >
                            {item.price ? SITE_LOCALE + item.price : ""}
                        </Typography>
                        <IncDec
                            available={item.available ? item.available : CART_DEFAULT_SETTINGS.AVAILABLE}
                            item={item}
                            matches={matches}
                        />
                    </Grid>
                    <Grid item xs={matches ? 0 : 12}>


                        {/* for desktop display description with the image */}
                        {
                            !matches &&
                            <Typography
                                variant="subtitle2"
                            >
                                {item.description}
                            </Typography>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={matches ? 12 : 0}>


                {/* for desktop display description with the image */}
                {
                    matches && <Typography
                        variant="subtitle2"
                        mt="-2.5em"
                    >
                        {item.description}
                    </Typography>
                }
            </Grid>
            <Grid item xs={matches ? 1 : 2}>
                {
                    !matches ?
                        (
                            // display tooltip for desktop display 
                            <Tooltip placement="left" title={CART_VIEW.DELETE_MSG}>
                                <DeleteIcon
                                    key={item.id}
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: item,
                                        })
                                    } />
                            </Tooltip>
                        ) : (
                            ""
                        )
                }
            </Grid>
            <Divider variant="fullWidth" width="100%" />
        </Grid >
    ));

    return (
        <Drawer
            open={showCart}
            onClose={() => setShowCart(false)}
            anchor={'right'}
            // for drawer look n feel use PaperProps
            PaperProps={{

                sx:
                {
                    width: matches ? "100%" : 700,
                    background: Colors.light_gray,
                    borderRadius: 0,
                }
            }
            }
        >

            {/* check if the cart not empty then display cart othewise message cart empty */}
            {cart.length > 0 ? (
                //cart has item 
                <>
                    <Box
                        sx={{
                            p: 1,
                        }}
                        display="flex"
                        justifyContent={"center"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <Typography
                            variant={matches ? "h5" : "h4"}
                            color={Colors.black}
                        >
                            {CART_VIEW.TITLE}
                        </Typography>
                        <Typography
                            variant="body2"
                            color={Colors.muted}
                        >
                            {" "}
                            {CART_VIEW.LOGIN_REG_MSG}
                        </Typography>
                        {/* display the cart content inside a paper*/}
                        <Paper
                            elevation={0}
                            sx={{
                                mt: '1em',
                                width: '95%',
                                padding: 1,
                            }}
                        >

                            {cartContent}

                        </Paper>

                        <NavLink
                            variant="contained"

                            to={CART_VIEW.LINK}
                            onClick={() => setShowCart(false)}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                }}
                            >{CART_VIEW.DO_PAYMENT_TXT}</Button>
                        </NavLink>
                    </Box>
                    <Grid container>
                        <Grid item>
                            <Fab

                                size="small"
                                sx={{
                                    position: 'fixed',
                                    top: "1em",
                                    right: "2em",

                                }}>
                                <CloseIcon
                                    sx={{
                                        color: Colors.primary,
                                        position: "fixed",
                                        top: "0.9em",
                                        right: "1.5em",
                                        zIndex: 2000,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setShowCart(false)}
                                />
                            </Fab>
                        </Grid>
                    </Grid>
                </>
            ) : (
                // cart is empty 
                <>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems={"center"}
                        align={"center"}
                        sx={{
                            p: matches ? 2 : 4,
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                width: matches ? '83%' : '70%',
                                padding: 4,
                            }}
                        >

                            <EmptyImage
                                src={CART_VIEW.EMPTY_CART_IMG} />
                            <Typography
                                fontSize={matchesIphsmall ? "1.2em" : matches ? "1.3em" : "1.7em"}
                                sx={{
                                    mt: 2,
                                    color: Colors.dim_grey,
                                }}
                            >
                                {CART_VIEW.EMPTY_CART_MSG}
                            </Typography>
                            <Typography

                                fontSize={matchesIphsmall ? "0.8em" : matches ? "0.9em" : "1em"}
                                sx={{
                                    mt: 2,
                                    color: Colors.muted,
                                }}
                                style={{ whiteSpace: 'pre-line' }}
                            >
                                {CART_VIEW.EMPTY_CART_SHOP_MSG}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                }}
                                onClick={() => setShowCart(false)}
                            >
                                {CART_VIEW.SHOP_MSG}
                            </Button>

                        </Paper>
                    </Box>
                    <Grid container>
                        <Grid item>

                            <CloseIcon
                                sx={{
                                    color: Colors.primary,
                                    position: "fixed",
                                    top: matchesIphsmall ? "1.2em" : matchesIpad && matches ? "1em" : matches ? "1em" : "2em",
                                    right: matchesIphsmall ? "1.2em" : matchesIpad && matches ? "2.5em" : matches ? "1em" : "5em",
                                    zIndex: 2000,
                                    textShadow: "gray 1px 1px 12px",
                                    cursor: 'pointer',
                                }}
                                onClick={() => setShowCart(false)}
                            />
                        </Grid>
                    </Grid>
                </>
            )}
            <Button
                onClick={() => setShowCart(false)}
            >
                Close
            </Button>
        </Drawer>
    );
}

export default Cart;