import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/system";
import { PROD_DISPLAY_SIZE } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductLarge from "./SingleProductLarge";
import SingleProductDesktop from "./SingleProductDesktop";
import SingleProductThin from "./SingleProductThin";
import SingleProductSmall from "./SingleProductSmall";


/**
 * 
 * @param {products} holds the product data 
 * @param {size} provide different dispay area for product 
 * @returns 
 */
function Products({ products, size }) {

    //use theme of material styles
    const theme = useTheme();

    // define a variable to check if the breakpoint is below medium i.e. fo tabs/mobile
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesIpad = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesGalaxyPro = useMediaQuery(theme.breakpoints.up('galaxy'));
    const matchesGalaxy = useMediaQuery(theme.breakpoints.down('galaxy'));
    const matchesIphsmallUP = useMediaQuery(theme.breakpoints.up('iphsmall'));
    const matchesIphsmall = useMediaQuery(theme.breakpoints.down('iphsmall'));
    const matchesFold = useMediaQuery(theme.breakpoints.down('fold'));
    const matchesFoldUP = useMediaQuery(theme.breakpoints.up('fold'));

    //prepare the product data for rendering
    const renderProduct = products.map(product => (

        <Grid
            item
            key={product.id}
            // set image size
            xs={2}
            sm={4}
            md={4}
            lg={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
        >

            {(matches) ? (
                (size === PROD_DISPLAY_SIZE.LARGE) ?
                    (
                        <SingleProductLarge product={product} matches={matches} />
                    ) : (
                        (size === PROD_DISPLAY_SIZE.THIN) ?
                            (
                                <SingleProductThin product={product} />
                            ) : (
                                (size === PROD_DISPLAY_SIZE.SMALL) ?
                                    (
                                        <SingleProductSmall product={product} />
                                    ) : (
                                        <SingleProduct product={product} matches={matches} />
                                    )
                            )
                    )
            ) : (
                <SingleProductDesktop product={product} matches={matches} />
            )

            }
        </Grid>
    ));

    return (

        <Container>
            <Grid 
                container
                flexWrap={{ xs: "nowrap", md: "wrap", lg: "wrap" }}

                //add spacing between images displayed
                spacing={{
                    //for smalll product display set size to 2 and other display set > 2



                    xs:
                        (size === PROD_DISPLAY_SIZE.SMALL) ? (
                            (matchesFold? 4 : matchesIphsmall ? 2 : matchesIpad && matches ? 5 : 4)
                        ) :
                            (size === PROD_DISPLAY_SIZE.THIN) ? (
                                matchesFold ? 5 : ((matchesFoldUP && matchesIphsmall) ? 5 : matchesIphsmall ? 16 : (matchesIphsmallUP && matchesGalaxy) ? 5 : (matchesGalaxyPro && matchesSmall) ? 4: matchesSmall ? 14 : matchesIpad && matches ? 15 : 5)
                            ) :
                                (size === PROD_DISPLAY_SIZE.NORMAL) ? (
                                    (matchesFold ? 6 : (matchesFoldUP && matchesIphsmall) ? 3 : matchesIphsmall ? 12 : (matchesIphsmallUP && matchesGalaxy) ? 5: (matchesGalaxyPro && matchesSmall) ? 4: matchesSmall ? 10 : 12)
                                ) : (
                                    matchesFold? 9 : (matchesFoldUP && matchesIphsmall) ? 9 : matchesIphsmall ? 22 : (matchesIphsmallUP && matchesGalaxy) ? 5 : matchesGalaxy? 15 : matchesSmall ? 5 : matchesIpad && matches ? 20 : 10
                                )

                    ,

                    //for smalll product display set size to 11 and other display set different size
                    sm:
                        (size === PROD_DISPLAY_SIZE.SMALL) ? (
                            (matchesIpad && matches ? 5 : 1)
                        ) :
                            (size === PROD_DISPLAY_SIZE.THIN) ? (
                                (matchesIphsmall ? 11 : matchesGalaxy && matchesSmall ? 5: matchesIpad && matches ? 6 : 12)
                            ) :
                                (size === PROD_DISPLAY_SIZE.NORMAL) ? (
                                    (matchesIpad && matches ? 6 : 7)
                                ) : (
                                    (matchesIpad && matches ? 6 : 18)
                                )

                    ,
                    md: 20,
                    lg: 4
                }}
                overflow={{ xs: "auto", sm: "auto" }}
                p={size === (PROD_DISPLAY_SIZE.LARGE && (matchesFold || matchesIphsmall)) ? 0 : 1}

                justifyContent={"flex-start"}
                alignItems={"flex-start"}

                sx={
                    {

                        "::-webkit-scrollbar": {
                            display: "none",
                        },


                    }
                }

                columns={{ xs: PROD_DISPLAY_SIZE.LARGE ? 2.35 : 4, sm: 8, md: 12 }}

            >
                {/* // display product  */}
                {renderProduct}
            </Grid>
        </Container >
    );
}

export default Products;