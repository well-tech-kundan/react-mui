
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useUIContext } from "../../context/ui";
import { StoreProductContainer } from "../../styles/store";
import SingleStoreProductDesktop from "./SingleStoreProductDesktop";
import { filterAction } from "./StoreFilter"; 

function StoreProductList() {

    //use theme of material styles
    const theme = useTheme();

    // define a variable to check if the breakpoint is below medium i.e. fo tabs/mobile
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    //const matchesIphsmall = useMediaQuery(theme.breakpoints.down('iphsmall'));

    // destruct state to extract product 
    const {
        cartState: { storeproduct },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = useUIContext();


    const filterProducts = () => {
        let filteredProductList = storeproduct;
        if (sort) {
            filteredProductList = filteredProductList.sort((a, b) =>
                // check if sorting has to be done on price low to high
                sort === filterAction.sortOrder.lowtohigh ? 
                           a.price - b.price 
                        : 
                        // check if sorting has to be done on price high to low
                        sort === filterAction.sortOrder.highttolow ?                        
                            b.price - a.price
                            :
                            ""
                
            );
        }

        if (!byStock) {
            filteredProductList = filteredProductList.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            filteredProductList = filteredProductList.filter(
                (prod) => prod.fastDelivery
            );
        }

        if (byRating) {
            filteredProductList = filteredProductList.filter(
                (prod) => (prod.rating >= byRating)
            );
        }

        if (searchQuery) {
            filteredProductList = filteredProductList.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            );
        }

        // console.log(filteredProductList);
        return filteredProductList;
    };

    // //prepare the product data for rendering
    const renderStoreProducts = filterProducts().map(product => (

        <Box
            key={(product.id)}
            sx={{
                width: "100%",
                display: "contents",
            }}  
        >

            {(matches) ? (
                <SingleStoreProductDesktop product={product} matches={matches} />
            ) : (
                <SingleStoreProductDesktop product={product} matches={matches} />
            )}
        </Box >
    ));


    return (
        <StoreProductContainer>
            {renderStoreProducts}
        </StoreProductContainer>
    );
};

export default StoreProductList;