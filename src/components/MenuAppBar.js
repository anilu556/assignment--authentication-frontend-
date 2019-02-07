import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

class MenuAppBar extends Component {

  constructor(props) {
    super(props)
        this.state = {
            open: false
        }
    }
    //Toggle function (open/close Drawer)
    toggleDrawer = () => {
        this.setState({
            open: !this.state.open
        })
    }

  handleLogout = () => {
    const { history } = this.props;

    localStorage.removeItem("token");
    history.push("/");
  }

  render() {

    const AppBarBack = {
      background: '#af183b'
    };

    const AppBarStyles ={
      flex: 1,

    };

    const ListItemTextStyle = {
      width: 200,
    }

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar style={AppBarBack} position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer}  color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography style={AppBarStyles} variant="h6" color="inherit">
              Assigment Authentication
            </Typography>
              <Link to='/signup'>
                <Typography variant="title" variant="h6" style={AppBarStyles} >
                  Sign Up
                </Typography>
              </Link>
              <Link to='/login'>
                <Typography variant="title" variant="h6" style={AppBarStyles} >
                  Login
                </Typography>
              </Link>

          </Toolbar>

          <Drawer open={this.state.open} onClose={this.toggleDrawer}>
         <div
           tabIndex={0}
           role="button"
           onClick={this.toggleDrawer}
           onKeyDown={this.toggleDrawer}
         >
         </div>
         <List>
          <ListItem>
            <ListItemText style={ListItemTextStyle} primary="Menu" />
          </ListItem>
          <ListItem button>
            <Link onClick={this.toggleDrawer}to='/'> Home </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link onClick={this.toggleDrawer} to="/books"> Books </Link>
          </ListItem>
          <ListItem button>
            <Link onClick={this.toggleDrawer} to="/loans"> Loans </Link>
          </ListItem>
         </List>
         <Button onClick={ this.handleLogout }>Logout</Button>
       </Drawer>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MenuAppBar); withRouter (MenuAppBar);
