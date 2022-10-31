import { Typography } from "@mui/material";
import { BannerButton,  BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

function BannerDisplay({ banner, matches }) {
    return (
        <>
            <BannerImage src={banner.image} />
            <BannerContent>
                {/* display banner heading-1 */}
                <Typography variant={matches ? "h6" : "h5"}>{banner.heading1}</Typography>

                {/* display banner main header */}
                <BannerTitle variant={matches ? "h4" : "h2"}>
                    {banner.title}
                </BannerTitle>

                {/* Display Banner description */}
                <BannerDescription variant="subtitle">
                    {banner.description}
                </BannerDescription>

                {/* Display Banner Button */}
                <BannerButton color="primary">Book Now</BannerButton>
            </BannerContent>
        </>

    );
}

export default BannerDisplay;