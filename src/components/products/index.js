import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/system";
import { productdisplay } from "../../data";
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
function Products({ products: contentData, size }) {

    //use theme of material styles
    const theme = useTheme();

    // define a variable to check if the breakpoint is below medium i.e. fo tabs/mobile
    const matches = useMediaQuery(theme.breakpoints.down('lg'));
    const matchesIphsmall = useMediaQuery(theme.breakpoints.down('iphsmall'));

    //prepare the product data for rendering
    const renderProduct = contentData.map(product => (
        
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
        >

            {(matches) ? (
                (size === productdisplay.Large) ?
                    (
                        <SingleProductLarge product={product} matches={matches} />
                    ) : (
                        (size === productdisplay.Thin) ?
                            (
                                <SingleProductThin product={product} />
                            ) : (
                                (size === productdisplay.Small) ?
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
                    //for smalll product display set size to 2 and other display set 18


                    xs:
                        (size === productdisplay.Small) ? (
                            (matchesIphsmall ? 2 : 4)
                        ) :
                            (size === productdisplay.Thin) ? (
                                (matchesIphsmall ? 16 : 14)
                            ) :
                                (size === productdisplay.Normal) ? (
                                    12
                                ) : (
                                    (matchesIphsmall ? 18 : 22)
                                )

                    ,

                    //for smalll product display set size to 2 and other display set 18
                    sm:
                        (size === productdisplay.Small) ? (
                            1
                        ) :
                            (size === productdisplay.Thin) ? (
                                (matchesIphsmall ? 11 : 12)
                            ) :
                                (size === productdisplay.Normal) ? (
                                    7
                                ) : (
                                    18
                                )

                    ,
                    md: 20,
                    lg: 4
                }}
                overflow={{ xs: "auto", sm: "auto" }}
                p={1}

                justifyContent={"flex-start"}

                sx={
                    {

                        "::-webkit-scrollbar": {
                            display: "none",
                        },


                    }
                }

                columns={{ xs: 3, sm: 8, md: 12 }}

            >
                {/* // display product  */}
                {renderProduct}
            </Grid>
        </Container >
    );
}

export default Products;