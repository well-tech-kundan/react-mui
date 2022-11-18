import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Rating,
    useMediaQuery,
    useTheme,
} from "@mui/material";


import { STORE_FILTER } from "../../../data";
import { lighten } from "polished";
import { Colors } from "../../../styles/theme";
import { useUIContext } from "../../../context/ui";
import { useState } from "react"; import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { filterAction } from "../StoreFilter";

function StoreFilterForm() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const {
        productDispatch,
        productState: { byStock, byFastDelivery, sort, byRating },
    } = useUIContext();


    const [ratingValue, setRatingValue] = useState(0);
    const [ratingHover, setRatingHover] = useState(-1);
    return (

        <FormControl >
            <FormLabel
                id="radio-buttons-group-label-1"
                sx={{
                    color: Colors.white,
                    lineHeight: 1.5,
                    fontSize: matches?"1rem":"1.1rem",
                    '&, &.Mui-checked': {
                        color: Colors.white,
                    },
                    '&$checked': {
                        color: Colors.white,
                    },
                }}
            >
                Sort Product By Price Listing
            </FormLabel>
            <RadioGroup
                aria-labelledby="radio-buttons-group-label-2"
                defaultValue="group1"
                id="sort1"
                sx={{
                    paddingLeft: "2rem",
                }}
            >
                <FormControlLabel
                    value={filterAction.sortOrder.lowtohigh}
                    control={
                        <Radio />
                    }
                    onChange={() =>
                        productDispatch({
                            type: filterAction.sortBy.price,
                            payload: filterAction.sortOrder.lowtohigh,
                        })
                    }
                    label="Ascending" />
                <FormControlLabel
                    value={filterAction.sortOrder.highttolow}
                    control={
                        <Radio />
                    }
                    onChange={() =>
                        productDispatch({
                            type: filterAction.sortBy.price,
                            payload: filterAction.sortOrder.highttolow,
                        })
                    }
                    label="Descending" />
            </RadioGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        name="group1"
                        id={`inline-3`}
                        onChange={() =>
                            productDispatch({
                                type: filterAction.filterBy.stock,
                            })
                        }
                        checked={byStock}
                    />
                }
                label="Include Out of Stock"
            />
            <FormControlLabel
                label="Fast Delivery Only"
                control={
                    <Checkbox
                        name="group1"
                        id={`inline-4`}
                        onChange={() =>
                            productDispatch({
                                type: filterAction.filterBy.delivery,
                            })
                        }
                        checked={byFastDelivery}
                    />
                }
                sx={{
                    color: Colors.white,
                    lineHeight: 1.5,
                    fontSize: "1.1rem",
                }}
            />
            <FormControlLabel
                label="Rating:  "
                sx={{
                    justifyContent: "flex-end",
                    flexDirection: "row-reverse",
                    ml: "0px",
                }}
                labelPlacement="start"
                control={

                    <Rating
                        name="half-rating-read"
                        value={byRating}
                        getLabelText={(ratingValue) => `1 Heart${ratingValue !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" color="white" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        onChange={(event, newValue) => {
                            setRatingValue(newValue);
                            productDispatch({
                                type: filterAction.filterBy.rating,
                                payload: newValue,
                            });
                        }}
                        onChangeActive={(event, newHover) => {
                            setRatingHover(newHover);
                        }}
                        style={{ cursor: "pointer" }}
                    />
                }
            />
            <Button
                sx={{
                    mt: 5,
                    ml: 4,

                    width: "10rem",
                    '&:hover': {
                        background: lighten(0.2, Colors.primary),
                        color: Colors.white,
                    },
                }}
                type="submit"
                variant="outlined"

                onClick={() =>
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }
            >
                {STORE_FILTER.CLEAR_FILTER_TXT}
            </Button>
        </FormControl>


    );
}

export default StoreFilterForm;