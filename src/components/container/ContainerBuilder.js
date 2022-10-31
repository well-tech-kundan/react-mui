
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { ContainerDescription, ContainerTitle } from "../../styles/container";
import { Colors } from "../../styles/theme";
import Products from "../products";



function ContainerBuilder({ containerdata: contentData }) {

    //use theme of material styles
    const theme = useTheme();

    // define a variable to check if the breakpoint is below medium
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    //prepare the product data for rendering
    const renderContainer = contentData.map(productConfiguration => (
        <Grid key={productConfiguration.id}>
            <ContainerTitle>
                <Typography variant={matches ? "h5" : "h2"} paddingTop={"1.5rem"}>
                    {productConfiguration.title}
                </Typography>
                <Typography 
                    variant={matches ? "subtitle1" : "h5"}
                    display="flex"
                    color={Colors.light}
                    alignContent={"center"}
                    justifyContent="flex-end"
                    fontWeight={matches ? "1000" : "700"}
                    lineHeight={matches ? "5" : "4"}
                    position={"absolute"}
                    paddingLeft={matches ? "16.5rem" : "55rem"}
                >
                    {"View all >"}
                </Typography>
            </ContainerTitle>
            <ContainerDescription>
                {productConfiguration.description}
            </ContainerDescription>
            <Products 
                // select only first few roduct items length == display limit
                products={productConfiguration.data.slice(0,productConfiguration.displaylimit)} 
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