import React, { Component } from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/Auxiliar/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }


    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    /*SideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    };*/

    sideDrawerToggleHandler = () => {
        this.setState((prevState)  => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuth} 
                    toggler={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuth} 
                    open={this.state.showSideDrawer} 
                    closed={this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )  
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);