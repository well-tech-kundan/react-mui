



import { ProductMetaWrapperThin } from "../../styles/products";
import { Grid, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";

function ProductMetaSmall({ product }) {
    return ( 
            <ProductMetaWrapperThin>
                <Grid container justify="center" alignItems="center">
                    <Grid
                        item
                        sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                            marginBottom:'10%',
                            color: Colors.black,
                            textShadow: "1px 1px #e6e6e6",
                            // textShadow: "0 0 110px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073",
                        }} >
                        <Typography
                            alignContent={"flex-start"}
                        >
                            {product.name}
    
                        </Typography>
                    </Grid>
                </Grid>
            </ProductMetaWrapperThin>
     );
}

export default ProductMetaSmall;

