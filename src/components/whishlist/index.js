import { useTheme } from "@emotion/react";
import { Avatar, Button, Divider, Drawer, Fab, Grid, Paper, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import useWishList from "../../hooks/useWishList.js";
import { WISHLIST_VIEW_MSG, SITE_LOCALE } from "../../data";
import { EmptyImage } from "../../styles/cart";

function WishList() {

    const { wishList, setShowWishList, showWishList } = useUIContext();

    //user react variable expansion to  add products to favourite list 
    const { addToWishList } = useWishList(...wishList);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesIpad = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesIphsmall = useMediaQuery(theme.breakpoints.down('iphsmall'));

    const wishListContent = wishList.map(item => (
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
                    {item.price ? SITE_LOCALE + item.price : ""}
                </Typography>

                {!matches ?
                    (
                        // display tooltip for desktop display 
                        <Tooltip placement="left" title={WISHLIST_VIEW_MSG.DELETE}>
                            <DeleteIcon key={item.id} onClick={addToWishList} />
                        </Tooltip>
                    ) : (
                        <DeleteIcon key={item.id} onClick={addToWishList} />
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
            open={showWishList}
            onClose={() => setShowWishList(false)}
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
                    {WISHLIST_VIEW_MSG.TITLE}
                </Typography>
                <Typography
                    variant="body2"
                    color={Colors.muted}
                >
                    {" "}
                    {WISHLIST_VIEW_MSG.MARKETING}
                </Typography>
                {/* check if the favourite list not empty then display favourite list othewise ignore click */}
                {wishList.length > 0 ? (
                    // favourite list has item 
                    <>
                        {/* display the favourite list content inside a paper*/}
                        < Paper
                            elevation={0}
                            sx={{
                                mt: 2,
                                width: '90%',
                                padding: 4,
                            }}
                        >

                            {wishListContent}
                        </Paper>
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
                                        onClick={() => setShowWishList(false)}
                                    />
                                </Fab>
                            </Grid>
                        </Grid>
                    </>

                ) :
                    <>

                        {/* cart is empty */}
                        <Typography
                            align={"center"}
                            mt={2}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    width: matches ? '83%' : '87%',
                                    padding: 4,
                                }}
                            >
                                <EmptyImage src={WISHLIST_VIEW_MSG.EMPTY_IMG} ml="11.rem"/>
                                <Typography

                                    variant="h6"
                                    sx={{
                                        mt: 1,
                                        color: Colors.muted,
                                    }}
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    {WISHLIST_VIEW_MSG.EMPTY}
                                </Typography>
                            </Paper>
                        </Typography>
                        <Grid container>
                            <Grid item>

                                <CloseIcon
                                    sx={{
                                        color: Colors.primary,
                                        position: "fixed",
                                        top: matchesIphsmall ? "4.5em" : matchesIpad && matches ? "4.5em" : matches ? "4.5em" : "5em",
                                        right: matchesIphsmall ? "1.2em" : matchesIpad && matches ? "5em" : matches ? "1.5em" : "1.5em",
                                        zIndex: 2000,
                                        textShadow: "gray 1px 1px 12px",
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setShowWishList(false)}
                                />
                            </Grid>
                        </Grid>
                    </>
                }
            </Box >
            <Button
                onClick={() => setShowWishList(false)}
            >
                Close
            </Button>
        </Drawer >
    );
}

export default WishList;