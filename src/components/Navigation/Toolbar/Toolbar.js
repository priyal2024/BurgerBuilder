import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.DrawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo height="80%"/>
        </div>
        {/* <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav> */}
    </header>
);

export default Toolbar;