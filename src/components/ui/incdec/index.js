import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { clamp } from "../clamp";
import { Colors } from "../../../styles/theme";
import { lighten } from "polished";

function IncDec({ available, quantity }) {
    const clampV = clamp(0, available);
    const [value, setValue] = useState(quantity);
    return (
        <Box display="flex">
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: (value > 0 )?`${Colors.secondary}`:`${Colors.white}`,
                    color: (value === 0)?`${Colors.light_gray}`:`${Colors.black}`,
                    "&:hover": {
                        backgroundColor: (value > 0)?`${lighten(0.1,Colors.primary)}`:`${Colors.white}`,
                    },
                }}
                onClick={() => setValue(clampV(value - 1))}
            >
                <RemoveIcon />
            </IconButton>
            <Typography
                variant="h6"
                sx={{
                    border: `1px solid ${Colors.secondary}`,
                    p: 2,
                }}
            >
                {value}
            </Typography>
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: (value < available)?`${Colors.secondary}`:`${Colors.white}`,
                    color: (value === available)?`${Colors.light_gray}`:`${Colors.black}`,
                    "&:hover": {
                        backgroundColor: (value < available)?`${lighten(0.1,Colors.primary)}`:`${Colors.white}`,
                    },
                }}
                onClick={() => setValue(clampV(value + 1))}
            >
                <AddIcon />
            </IconButton>
        </Box>
    );
}


export default IncDec;