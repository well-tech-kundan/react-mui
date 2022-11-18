
import { useState } from 'react'; import {
    Drawer,
    Typography,
    Paper,
    Fab,
} from "@mui/material";
import { Box } from "@mui/system";

import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from '@mui/icons-material/Tune';

import { STORE_FILTER } from "../../../data";
import { StoreFilterContainer, StoreFilterTitle } from "../../../styles/store";
import StoreFilterForm from "./StoreFilterForm";
import { DrawerCloseButton } from "../../../styles/appbar";
import { Colors } from '../../../styles/theme';


function StoreFilterMobile() {



    // set the context as drawer open / closed
    const [drawerOpen, setDrawerOpen] = useState(false);

    //use theme of material styles



    return (
        <>


            {/* define the drawer close button with style defintion, this will hook in the appbar - actionMobile.js as drawer is for mobile devices only */}
            {drawerOpen && (
                <DrawerCloseButton
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        float: 'right',
                        paddingLeft: '0.5em',

                    }}
                >
                    <CloseIcon />
                </DrawerCloseButton>
            )}
            {!drawerOpen && (
                <Fab
                
                sx={{
                    position: 'fixed',

                }}>
                <TuneIcon
                    sx={{
                        float: 'right',
                        paddingLeft: '1px',
                        position: 'fixed',

                    }}
                    onClick={() => setDrawerOpen(true)}
                />
                </Fab>
            )}
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                anchor={'left'}
                // for drawer look n feel use PaperProps
                PaperProps={{

                    sx:
                    {

                        width: 300,
                        background: Colors.white,
                        borderRadius: 0,
                        
                    }
                }
                }
            >

                
                    <Paper
                        elevation={0}
                    >
                        <StoreFilterContainer
                        >

                            <StoreFilterTitle>
                                <Typography variant="h6" paddingBottom={"1rem"}>
                                    {STORE_FILTER.TITLE}
                                </Typography>
                            </StoreFilterTitle>
                            <StoreFilterForm />
                        </StoreFilterContainer >

                    </Paper>

            </Drawer>
        </>
    );
}

export default StoreFilterMobile;