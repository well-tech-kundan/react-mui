import { ProductMetaWrapperThin } from "../../styles/products";
import { Grid, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";

//matches is true for down medium 
function ProductMetaThin({ product }) {
    return (
        <ProductMetaWrapperThin>
            <Grid container justify="center" alignItems="center">
                <Grid
                    sx={{

                        fontSize: "15px",
                        marginBottom: '-8.5%',
                        marginLeft: '-4.5%',
                        width: "270px",
                        height: "1.8em",
                        boder:'10px',
                        backgroundColor: "rgba(0,0,0,.04)",
                        borderBottomLeftRadius: "10x",
                        borderBottomRightRadius: "10x",
                    }} >
                </Grid>
                <Grid
                    item
                    sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        height: "1.55em",
                        marginLeft: '-4%',
                        color: Colors.light_gray,
                        alignItems:'center',
                        textShadow: "1px 1px black",
                        // textShadow: "0 0 110px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073",
                    }} >
                    <Typography
                        lineHeight={1.55}
                        alignContent={"flex-start"}
                    >
                        {product.name}

                    </Typography>
                </Grid>
            </Grid>
        </ProductMetaWrapperThin>
    );
}
export default ProductMetaThin;