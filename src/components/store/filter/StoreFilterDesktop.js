import { Typography } from "@mui/material";
import { STORE_FILTER } from "../../../data";
import { StoreFilterContainer, StoreFilterTitle } from "../../../styles/store";
import StoreFilterForm from "./StoreFilterForm";


function StoreFilterDesktop() {
    return (
        <StoreFilterContainer>

            <StoreFilterTitle>
                <Typography variant="h5" paddingBottom={"1.5rem"}>
                    {STORE_FILTER.TITLE}
                </Typography>
            </StoreFilterTitle> 
            <StoreFilterForm />
        </StoreFilterContainer >
    );
}

export default StoreFilterDesktop;