import { useTheme } from "@emotion/react";
import { Avatar, Button, Divider, Drawer, Paper, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { cartViewMessages } from "../../data";
import { EmptyImage } from "../../styles/cart";
import DeleteIcon from "@mui/icons-material/Delete";
import useCart from "../../hooks/useCart";

function Cart() {

    const { cart, setShowCart, showCart } = useUIContext();

    //user react variable expansion to  add products to cart 
    const { addToCart } = useCart(...cart);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const cartContent = cart.map(item => (
        <Box key={item.id}>
            <Box
                display="flex"
                sx={{
                    pt: 2,
                    pb: 2
                }}
                alignItems="start"
                justifyContent={"space-between"}
            >
                <Avatar
                    src={item.image}
                    sx={{
                        width: 96,
                        height: 96,
                        mr: 2,
                    }}
                />
                <Box
                    display="flex"
                    flexDirection={"column"}
                >
                    <Typography
                        variant={matches ? "h7" : "h6"}
                    >
                        {item.name}
                    </Typography>
                    {/* for desktop display description with the image */}
                    {!matches && <Typography
                        variant="subtitle2"
                    >
                        {item.description}
                    </Typography>}
                </Box>
                <Typography
                    variant="body1"
                    justifyContent={"end"}
                    mr={2}
                    ml={2}
                    fontWeight="bold"

                >
                    {item.price ? "£" + item.price : ""}
                </Typography>

                {!matches ?
                    (
                        // display tooltip for desktop display 
                        <Tooltip placement="left" title={cartViewMessages.deletemessage}>
                            <DeleteIcon key={item.id} onClick={addToCart} />
                        </Tooltip>
                    ) : (
                        <DeleteIcon key={item.id} onClick={addToCart} />
                    )}
            </Box>
            {/* for mobile display description below the image */}
            {matches && <Typography
                variant="subtitle2"
            >
                {item.description}
            </Typography>}
            <Divider variant="fullWidth" />
        </Box>
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
                    width: matches ? "100%" : 500,
                    background: Colors.light_gray,
                    borderRadius: 0,
                }
            }
            }
        >
            {/* check if the cart not empty then display cart othewise message cart empty */}
            {cart.length > 0 ? (
                // cart has item 
                <Box
                    sx={{
                        p: 4,
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
                        {cartViewMessages.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color={Colors.muted}
                    >
                        {" "}
                        {cartViewMessages.marketing}
                    </Typography>
                    {/* display the cart content inside a paper*/}
                    <Paper
                        elevation={0}
                        sx={{
                            mt: 2,
                            width: '90%',
                            padding: 4,
                        }}
                    >

                        {cartContent}

                    </Paper>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 4,
                        }}
                    >
                        {cartViewMessages.buttontext}
                    </Button>
                </Box>
            ) : (
                // cart is empty 
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems={"center"}
                    sx={{
                        p: matches ? 2 : 4,
                    }}
                >
                    <Typography
                        align={"center"}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                width: matches ? '83%' : '87%',
                                padding: 4,
                            }}
                        >

                            <EmptyImage src={cartViewMessages.emptycartimage} />
                            <Typography

                                variant={matches ? "h5" : "h4"}
                                sx={{
                                    mt: 2,
                                    color: Colors.dim_grey,
                                }}
                            >
                                {cartViewMessages.emptycart}
                            </Typography>
                            <Typography

                                variant="h6"
                                sx={{
                                    mt: 2,
                                    color: Colors.muted,
                                }}
                                style={{ whiteSpace: 'pre-line' }}
                            >
                                {cartViewMessages.emptycartletshop}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                }}
                                onClick={() => setShowCart(false)}
                            >
                                {cartViewMessages.emptyshopnow}
                            </Button>

                        </Paper>
                    </Typography>
                </Box>
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