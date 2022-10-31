

import { Typography } from "@mui/material";
import React, { Component } from "react";

function handleClick() {
    window.counter=1;
    var element = document.getElementById("myDiv");
    if (window.counter > 0)
        element.style.display = "none";
};



function Loader() {
    return (
        <div className="loader">
            <div id="myDiv" className="App-link">
                <header className="App-header">
                    <img src='/images/logo/logo.gif' className="App-logo" alt="logo" />
                    <p />
                    <p />
                    <Typography className="App-link" to="/" onClick={handleClick}>Welcome to a new dimension of Wellness</Typography>
                </header>
            </div>
        </div>

    );
}

export default Loader;