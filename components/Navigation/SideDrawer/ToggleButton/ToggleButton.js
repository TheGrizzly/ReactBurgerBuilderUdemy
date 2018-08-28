import React from 'react';
import classes from './ToggleButton.css';

const toggleButton = (props) => {
    return(
        <div className={classes.DrawerToggle} onClick={props.toggler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
    

export default toggleButton;