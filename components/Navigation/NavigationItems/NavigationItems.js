import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        {props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {props.isAuth ? <NavigationItem link="/logout">logout</NavigationItem> : <NavigationItem link="/auth">Authenticate</NavigationItem>  }
    </ul>
);

export default navigationItems;