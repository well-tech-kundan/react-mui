

/**
 * these are list of message that will be displayed on the scroll bar
 * 
 * have to be pulled from database, for now it is hard-coded 
 * */
import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionSliderContainer } from "../../styles/promotionslider";




/**
 * 
 * @param {message} message to be displayed on the promo slider
 * @param {displayComponent} if the promo slider to be rendered on the page, value true/false 
 * @returns 
 */
function PromotionSlider({ message, displayComponent }) {

    // define function for handling message array index
    const [messageIndex, setMessageIndex] = useState(0);

    // define function for show/hide message
    const [show, setShow] = useState(true);

    /**
     * There may be sitution when the message text is logner the container
     * In that sitution a container ref has to be used
     */
    const containerRef = useRef();


    // create a timer for message displayng
    //define a callback function that will change the message index every 4 secoonds


    useEffect(() => {
        /**
         * hide  message after every 3 seconds
         */
        setTimeout(() => {
            setShow(false)
        }, 3000);


        const intervalId = setInterval(() => {
            // increase the message index but reset after it reaches the length of message array
            setMessageIndex(i => (i + 1) % message.length)

            // now show the message
            setShow(true);

            /**
             * for quick exit effect hide message again
             */
            setTimeout(() => {
                setShow(false)
            }, 3000);


        }, 4000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        // while using container set the ref for the container
        displayComponent && <PromotionSliderContainer ref={containerRef} >

            <Box display={"flex"} justifyContent="center" alignItems={"center"}>


                {/*  slide is MUI component, now the code for text to come from left to show and exit from righ when it hides */}
                <Slide
                    container={containerRef.current}
                    direction={show ? "left" : "right"}
                    in={show}
                    timeout={{
                        enter: 500,
                        exit: 100
                    }}
                >
                    <MessageText>
                        {message[messageIndex]}
                    </MessageText>
                </Slide>
            </Box>

        </PromotionSliderContainer>
    );
}

export default PromotionSlider;