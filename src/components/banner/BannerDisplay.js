import { useTheme } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerButton,  BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

function BannerDisplay({ banner, matches }) {
    const theme = useTheme();
    const matchesFold = useMediaQuery(theme.breakpoints.down('fold'));
    return (
        <>
            <BannerImage src={banner.image} />
            <BannerContent>
                {/* display banner heading-1 */}
                <Typography variant={matchesFold ? "1em" : matches ? "h6" : "h5"}>{banner.heading1}</Typography>

                {/* display banner main header */}
                <BannerTitle variant={matches ? "h4" : "h2"}>
                    {banner.title}
                </BannerTitle>

                {/* Display Banner description */}
                <BannerDescription variant={matchesFold ? "body2" : "subtitle"}>
                    {banner.description}
                </BannerDescription>

                {/* Display Banner Button */}
                <BannerButton color="primary">Book Now</BannerButton>
            </BannerContent>
        </>

    );
}

export default BannerDisplay;