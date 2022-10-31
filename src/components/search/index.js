
import { IconButton, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { SearchBoxContainer, SearchField } from "../../styles/search";

function SearchBox() {

    //get the showSearchBox flag from the UI context, UI context is used for entire application
    const { showSearchBox, setShowSearchBox } = useUIContext();

    return (
        <>
            {/* define a slide box that slides from top and has time out of 1/2 sec. */}
            <Slide direction="down" in={showSearchBox} timeout={500}>
                {/* define a container to hold the search box content   */}
                <SearchBoxContainer>
                    <SearchField
                        color="secondary"
                        variant="standard"
                        fullWidth
                        placeholder="search..."
                    />

                    {/* display the search icon, for openning setting in MobileAppbar and DesktopAppbar */}
                    <IconButton>
                        <SearchIcon sx={{ fontSize: { xs: '2rem', md: "3rem" } }} color="secondary" />
                    </IconButton>
                    {/* display the close button  */}
                    <IconButton
                        onClick={() => setShowSearchBox(false)}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                        }}
                    >
                        <CloseIcon sx={{ fontSize: "4rem" }} color="secondary" />
                    </IconButton>
                </SearchBoxContainer>
            </Slide>

        </>
    );
}

export default SearchBox;