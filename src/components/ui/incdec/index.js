import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { clamp } from "../clamp";
import { Colors } from "../../../styles/theme";
import { lighten } from "polished";
import useCart from "../../../hooks/useCart";

function IncDec(props) {

    //define add to cart related variables to tbe used in the module
    const { updateCart } = useCart(props.item);
    const clampV = clamp(0, props.available);
    const [value, setValue] = useState(props.item.quantity?props.item.quantity:1);

    const handleChange = (val) =>{
        // console.log("value in handleChange in IncDec :: "+val);
        setValue(clampV(val));
        updateCart(val);
    };
    

    return (
        <Box display="flex">
            <IconButton
                sx={{
                    height: props.matches?"0.9em" : "1.2em",
                    width:"1em",
                    borderRadius: 0,
                    background: (value > 0 )?`${Colors.secondary}`:`${Colors.white}`,
                    color: (value === 0)?`${Colors.light_gray}`:`${Colors.black}`,
                    "&:hover": {
                        backgroundColor: (value > 0)?`${lighten(0.1,Colors.primary)}`:`${Colors.white}`,
                    },
                }}
                onClick={() => {handleChange(value-1)}}
            >
                <RemoveIcon />
            </IconButton>
            <Typography
                variant="body"
                sx={{
                    fontSize:props.matches?"1em" :"1.2em",
                    height: props.matches?"1.23em" : "1.4em",
                    border: `1px solid ${Colors.secondary}`,
                    pl: 1,
                    pr: 1,
                    pt: 0,
                }}
            >
                {value}
            </Typography>
            <IconButton
                sx={{
                    height: props.matches?"0.9em" : "1.2em",
                    width:"1em",
                    borderRadius: 0,
                    background: (value < props.available)?`${Colors.secondary}`:`${Colors.white}`,
                    color: (value === props.available)?`${Colors.light_gray}`:`${Colors.black}`,
                    "&:hover": {
                        backgroundColor: (value < props.available)?`${lighten(0.1,Colors.primary)}`:`${Colors.white}`,
                    },
                }}
                onClick={() => {handleChange(value+1)}}
            >
                <AddIcon />
            </IconButton>
        </Box>
    );
}


export default IncDec;