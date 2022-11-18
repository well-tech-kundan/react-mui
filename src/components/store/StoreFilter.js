import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StoreFilterMobile from "./filter/StoreFilterMobile";
import StoreFilterDesktop from "./filter/StoreFilterDesktop";


/**
 * Storefilter will provide a responsive filter for store page 
 * @returns 
 */
function StoreFilter() {






    const theme = useTheme(); 
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches ? (
                <StoreFilterMobile />
            ) : (
                <StoreFilterDesktop />
            )}

        </>

    );

}

export default StoreFilter;

// define type of filters available on the store page
export const filterAction = {
    sortBy:{
        price: "SORT_BY_PRICE",
    },
    sortOrder:{
        highttolow: "highToLow",
        lowtohigh: "lowToHigh",
    },
    filterBy:{
        stock: "FILTER_BY_STOCK",
        delivery: "FILTER_BY_DELIVERY",
        rating: "FILTER_BY_RATING",
        search:"FILTER_BY_SEARCH",
    },
    clearFilters:"CLEAR_FILTERS",
};