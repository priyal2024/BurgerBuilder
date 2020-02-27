import React,{Component} from 'react';
import Aux from "../../hoc/Aux";
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class layout extends Component {
    state = {
        showSideDrawer : false
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer:!prevState.showSideDrawer};
        });
    }

    render(){
        return(
            <Aux>
                <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer opened={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
             </Aux>
        );
    }
}

export default layout;