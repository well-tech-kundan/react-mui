
import { useEffect, useRef, useState } from "react";
import { Grid, Slide, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BannerDisplay from "./BannerDisplay";
import { BannerContainer, BannerNextButton, BannerPrevButton } from "../../styles/banner";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";



function Banner({ banners, displayComponent }) {


    // 👇️ explicit return
    const message = banners.map(element => {
        return element;
    });


    // this will provide a responsive appbar for that we will media-query

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesFold = useMediaQuery(theme.breakpoints.down('fold'));

    // define function for handling message array index
    const [messageIndex, setMessageIndex] = useState(0);

    // define function for show/hide banner message
    const [show, setShow] = useState(true);

    //const to check if previous button has been clicked
    const {prevClicked, setPrevClicked} = useUIContext();


    // variable for show/hide banner previous button
    let [prev, setPrev] = useState(false);


    //const to check if previous button has been clicked
    const {nextClicked, setNextClicked} = useUIContext();

    // variable for show/hide banner next button
    let [next, setNext] = useState(true);


    // define variable to check previous button has to be displayed
    const msgIndex = useRef(0);


    /**
     * There may be sitution when the message text is logner the container
     * In that sitution a container ref has to be used
     */
    const containerRef = useRef();

    useEffect(() => {

        /**
         * A callback function every 5 secs to increase the banner message index
         */
        const intervalId = setInterval(() => {
            /** 
             * increase the message index but reset after it reaches the length of message array
             * increase the message index counter if previous button is not clicked
             * 
             **/ 
            if (!prevClicked) {
                setMessageIndex(i => (i + 1) % message.length);
                msgIndex.current = (msgIndex.current+ 1) % message.length;
            } else {
                // In side callback function so reset previous button clicked flag
                setPrevClicked(false);
            }//end if prev click

            // In side callback function so reset next button clicked flag
            if (nextClicked) {
                setNextClicked(false);
            }//end if next click

            // check if it is first banner then hide previous button
            if (msgIndex.current === 0) {
                setPrev(false);
            } else {
                setPrev(true);                
            }//end if previous button hide check

            // check if it is last banner then hide next button
            if (msgIndex.current === message.length-1) {
                setNext(false);
            } else {
                setNext(true);
            }//end if next button hide check

        },7000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function bannerPrevButtonClick() {
        /**
         * 1. set prev clicked flag and show next button
         * 2. decrease the message index, this will trigger an UI refresh event
         * 3. decrease the message index local vairable to keep track of prev button show location
         */
        setPrevClicked(true);
        setNext(true);
        setMessageIndex(i => (i - 1));
        msgIndex.current = msgIndex.current -1;
        if (messageIndex <= 1) {
            setPrev(false);
        }
    }

    function bannerNextButtonClick() {
        /**
         * 1. set next clicked flag and show previous button
         * 2. Increase the message index, this will trigger an UI refresh event
         * 3. Increase the message index local vairable to keep track of prev button show location
         */
        setNextClicked(true);
        setPrev(true);
        setMessageIndex(i => (i + 1) % message.length);
        msgIndex.current = (msgIndex.current +1)% message.length;
        if (msgIndex.current >= message.length-1) {
            setNext(false);
        }
    }
    //prepare the banner data for rendering
    return (

        displayComponent && <Grid key={message[messageIndex].id} >
            <Box key={message[messageIndex].id}
                sx={{
                    backgroundColor: Colors.light_gray
                }}
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                height={matchesFold ? '450px' : matches ? '750px' : '600px'}
            >
                {/* show previous button only when prev is true */}
                {prev &&
                    <BannerPrevButton
                        onClick={bannerPrevButtonClick}
                    > {"<"}
                    </BannerPrevButton>}
                {/* <Slide
                    direction="left"
                    in={true}
                > */}
                <BannerContainer >
                    <BannerDisplay banner={message[messageIndex]} matches={matches} />
                </BannerContainer>
                {/* </Slide> */}
                {/* show next button only when next is true */}
                {next &&
                    <BannerNextButton
                        onClick={bannerNextButtonClick}
                    > {">"}
                    </BannerNextButton>
                }
            </Box>
        </Grid>
    );
}

export default Banner;