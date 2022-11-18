
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { PROD_LIST_VIEW } from "../../data";
import { ContainerDescription, ContainerTitle } from "../../styles/container";
import { Colors } from "../../styles/theme";
import Products from "../products";


/**
 * This function builds the home page product display container,
 * 
 * It renders the composite containter data a collection of various types of productss to be displayed on the home page
 * 
 * Product types are based on the display size of the product - Small, Thin, Normal, Large. 
 * Based on the product type the text displayed for the product will be different. 
 * 
 * @param {containerdata} param0 Diffrent type pf product data that to be displayed on the home page using the container builder
 * @returns 
 */
function ContainerBuilder({ containerdata }) {


    //use theme of material styles
    const theme = useTheme();

    // define a variable to check if the breakpoint is below medium
    const matchesLM = useMediaQuery(theme.breakpoints.down('lg'));
    const matchesMedium = useMediaQuery(theme.breakpoints.up('md'));
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesIpad = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesIphsmall = useMediaQuery(theme.breakpoints.down('iphsmall'));
    const matchesFold = useMediaQuery(theme.breakpoints.down('fold'));

    //prepare the product data for rendering
    const renderContainer = containerdata.map(productConfiguration => (


        <Grid key={productConfiguration.id} >

            <ContainerTitle>
                <Typography
                    variant={matchesFold ? "subtitle1" : (matchesMedium && matchesLM) ? "h5" : matches ? "h5" : "h2"}
                    paddingTop={"1.5rem"}
                    fontWeight={ "700"}
                >
                    {productConfiguration.title}
                </Typography>
                <Typography
                    variant={matchesFold ? "subtitle2" : (matchesMedium && matchesLM) ? "subtitle1" : matches ? "subtitle1" : "h5"}
                    display="flex"
                    color={Colors.light}
                    alignContent={"center"}
                    justifyContent="flex-end"
                    fontWeight={matches ? "1000" : "700"}
                    lineHeight={matches ? "5" : (matchesMedium && matchesLM) ? "5" : "4"}
                    position={"absolute"}
                    paddingLeft={matchesFold ? "9rem" : matchesIphsmall ? "13rem" : matchesIpad && matches ? "25rem" : matches ? "16.5rem" : (matchesMedium && matchesLM) ? "25rem" : "55rem"}
                >
                    {PROD_LIST_VIEW.MORE}
                </Typography>
            </ContainerTitle>
            <ContainerDescription>
                {productConfiguration.description}
            </ContainerDescription>
            <Products 
                // select only first few roduct items length == display limit
                products={productConfiguration.data.slice(0, productConfiguration.displaylimit)}
                //set the display mode
                size={productConfiguration.productdisplay}
            />
        </Grid>
    ));

    return (
        <>
            {renderContainer}
        </>
    );
}

export default ContainerBuilder;